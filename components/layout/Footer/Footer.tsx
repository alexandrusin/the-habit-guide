import styles from './Footer.module.scss'

function Footer() {
	const curretYear = new Date().getFullYear()
	return (
		<footer>
			<div className={styles.copyright}>
				Copyright &copy; {curretYear} The Habit Guide
			</div>
		</footer>
	)
}

export default Footer
