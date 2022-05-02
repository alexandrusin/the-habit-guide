import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticProps } from 'next'
import axios from 'axios'
import Card from 'components/Card/Card'

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
		<Card onClick={() => toHabitView(habit.id)} key={habit.id}>
			{habit.attributes.name} <br />
			{habit.attributes.difficulty} <br />
			{habit.attributes.description}
		</Card>
	))

	return (
		<>
			{habits}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}

export default Habits
