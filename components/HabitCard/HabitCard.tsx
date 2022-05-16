import styles from './HabitCard.module.scss'
import { Habit } from 'typings'
import Link from 'next/link'

type Props = {
	habit: Habit
}

function Card({ habit }: Props) {
	return (
		<div className={styles.card}>
			<Link href={`/habits/${habit.slug.current}`}>
				<a className={styles.link}>
					<h5 className={`${styles.title} headline5`}>{habit.title}</h5>
					<div className="body1">{habit.description}</div>
					{habit.categories.map((category) => {
						return <div className="button">{category.title}</div>
					})}
				</a>
			</Link>
		</div>
	)
}

export default Card
