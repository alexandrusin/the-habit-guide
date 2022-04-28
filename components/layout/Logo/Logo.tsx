import styles from './Logo.module.scss'

function Logo() {
	return (
		<svg
			className={styles.logo}
			width="50"
			height="50"
			x="0px"
			y="0px"
			viewBox="0 0 100 100"
			aria-labelledby="thg_logo thg_logo_description"
			role="img"
		>
			<title id="thg_logo">The Habit Guide</title>
			<desc id="thg_logo_description">
				Head icon viewed from profile and two arrows surrounding it in circular
				motion.
			</desc>

			<g className={styles.head}>
				<path
					d="M41,69.8L54.4,71c0.8,0.1,1.5-0.6,1.5-1.4v-6.3c0-0.4,0.3-0.7,0.7-0.7h4.7c1.4,0,2.6-1.2,2.6-2.6v-6.3
					c0-0.3,0.2-0.5,0.5-0.5h2.3c1.4,0,2.2-1.5,1.5-2.7l-4-6.1c-0.2-0.4-0.3-0.8-0.4-1.2c-0.7-8-7.4-14.2-15.5-14.2
					c-8.6,0-15.6,7-15.6,15.6c0,5.1,2.5,10.1,6.3,13.4c0.5,0.4,0.7,0.9,0.7,1.5v8.9C39.8,69.1,40.3,69.7,41,69.8z"
				/>
			</g>
			<g className={styles.arrows}>
				<path
					d="M70.9,75.1c-6,5.1-13.6,7.8-21.4,7.8c-18.3,0-33.2-14.9-33.2-33.2v-2.8h5.3c1,0,1.9-0.5,2.3-1.4c0.5-0.8,0.4-1.9-0.1-2.7
					l-8.5-13.1c-1-1.5-3.5-1.5-4.4,0L2.5,42.8C2,43.7,2,44.7,2.3,45.5c0.5,0.8,1.4,1.4,2.3,1.4H10v2.8c0,21.8,17.8,39.6,39.6,39.6
					c9.4,0,18.4-3.3,25.6-9.4c1.4-1.1,1.5-3.2,0.4-4.5C74.3,74.1,72.3,73.9,70.9,75.1z"
				/>
				<path
					d="M96.8,53.9c-0.5-0.8-1.4-1.4-2.3-1.4h-5.3v-2.8c0-21.8-17.8-39.6-39.6-39.6c-9.4,0-18.4,3.3-25.6,9.4
					c-1.4,1.1-1.5,3.2-0.4,4.5c1.1,1.4,3.2,1.5,4.5,0.4c6-5.1,13.6-7.8,21.4-7.8c18.3,0,33.2,14.9,33.2,33.2v2.8h-5.3
					c-1,0-1.9,0.5-2.3,1.4c-0.5,0.8-0.4,1.9,0.1,2.7l8.6,13c0.5,0.8,1.3,1.2,2.2,1.2c0.9,0,1.7-0.5,2.2-1.2l8.5-13.2
					C97.2,55.7,97.2,54.7,96.8,53.9z"
				/>
				<animateTransform
					attributeType="xml"
					attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					begin="0"
					dur="10s"
					repeatCount="indefinite"
				/>
			</g>
		</svg>
	)
}

export default Logo
