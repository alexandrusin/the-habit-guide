import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticProps } from 'next'
import axios from 'axios'

import HabitCard from 'components/HabitCard'

interface Habit {
	id: number
	attributes: {
		name: string
		description: string
		difficulty: string
		createdAt: any
		updatedAt: any
		publishedAt: any
	}
}

interface HabitJsonResponse {
	data: Habit[]
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/habits`
	)

	// NOTE: can we do something about the double data situation here?
	const data: Habit[] = await response.data.data

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data,
		},
	}
}

const Habits = ({ data }: HabitJsonResponse) => {
	const router = useRouter()
	const toHabitView = (id: number) => router.push(`/habits/${id}`)

	const habits = data.map((habit) => (
		<HabitCard
			name={habit.attributes.name}
			description={habit.attributes.description}
			difficulty={habit.attributes.difficulty}
			key={habit.id}
			onClick={() => toHabitView(habit.id)}
		/>
	))

	return (
		<>
			{habits}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}

export default Habits
