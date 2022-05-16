import HabitCard from 'components/HabitCard/HabitCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import Link from 'next/link'
import router from 'next/router'
import { Habit, Category } from 'typings'
import fetchHabits from 'utils/fetchHabits'
import fetchCategories from 'utils/fetchCategories'

interface Props {
	habits: Habit[]
	categories: Category[]
}

function Habits({ habits, categories }: Props) {
	console.log('habits from habits ->', habits)
	console.log('categories from habits ->', categories)

	return (
		<>
			<div>Habits</div>

			{habits.map((habit) => (
				<HabitCard habit={habit} key={habit._id} />
			))}

			{categories.map((category) => (
				<span key={category._id}>{category.title}</span>
			))}
		</>
	)
}

export default Habits

export const getServerSideProps: GetServerSideProps = async (context) => {
	const habits = await fetchHabits()
	const categories = await fetchCategories()

	return {
		props: {
			habits,
			categories,
		},
	}
}
