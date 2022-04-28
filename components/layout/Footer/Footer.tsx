import styles from './Footer.module.scss'

function Footer() {
	const curretYear = new Date().getFullYear()
	return (
		<footer className={styles.footer}>
			Copyright &copy; {curretYear} The Habit Guide
		</footer>
	)
}

export default Footer
