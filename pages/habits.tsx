import HabitCard from 'components/HabitCard/HabitCard'
import { GetServerSideProps, GetStaticProps } from 'next'
import Link from 'next/link'
import router from 'next/router'
import { Habit, Tag } from 'typings'
import fetchHabits from 'utils/fetchHabits'
import fetchTags from 'utils/fetchTags'

interface Props {
	habits: Habit[]
	tags: Tag[]
}

function Habits({ habits, tags }: Props) {
	console.log('habits from habits ->', habits)
	console.log('tags from habits ->', tags)

	return (
		<>
			<div>Habits</div>

			{habits.map((habit) => (
				<HabitCard habit={habit} key={habit._id} />
			))}

			{tags.map((tag) => (
				<span key={tag._id}>{tag.title}</span>
			))}
		</>
	)
}

export default Habits

export const getServerSideProps: GetServerSideProps = async (context) => {
	const habits = await fetchHabits()
	const tags = await fetchTags()

	return {
		props: {
			habits,
			tags,
		},
	}
}
