import { Habit } from 'typings'

export default async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHabits`)
	const data = await res.json()
	const habits: Habit[] = data.habits

	return habits
}
