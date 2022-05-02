import styles from './Card.module.scss'
import React, { ReactNode } from 'react'

type Props = {
	children?: ReactNode
	onClick: VoidFunction
}

function Card({ children, onClick }: Props) {
	return (
		<div className={styles.card} onClick={onClick}>
			{children}
		</div>
	)
}

export default Card
