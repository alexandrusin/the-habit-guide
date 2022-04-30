import { GetServerSideProps, GetStaticProps } from 'next'

import HabitCard from '@components/HabitCard'

interface Habit {
	id: number
	attributes: {
		name: string
		description: string
		createdAt: any
		updatedAt: any
		publishedAt: any
	}
}

interface HabitJsonResponse {
	data: Habit[]
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/habits`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	).then((response) => response.json())

	const data: Habit[] = response.data

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
	const habits = data.map((habit) => (
		<HabitCard name={habit.attributes.name} key={habit.id} />
	))

	return (
		<>
			{habits}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}

export default Habits
