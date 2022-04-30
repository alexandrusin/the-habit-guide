export type HabitCardProps = {
	name: string
}

function HabitCard({ name }: HabitCardProps) {
	return <div className="card">{name}</div>
}

export default HabitCard
