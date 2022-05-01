import { useRouter } from 'next/router'

export type HabitCardProps = {
	name: string
	description: string
	difficulty: string
	onClick: VoidFunction
}

function HabitCard({ name, description, difficulty, onClick }: HabitCardProps) {
	const router = useRouter()
	return (
		<div className="card" onClick={onClick}>
			{name}
			{description}
			{difficulty}
		</div>
	)
}

export default HabitCard
