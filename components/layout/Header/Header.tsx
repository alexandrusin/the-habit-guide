import styles from './Header.module.scss'
import Logo from 'components/layout/Logo/Logo'
import Nav from 'components/layout/Nav/Nav'
import Link from 'next/link'

function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<a className={styles.logoLink} aria-label="Go to home">
					<Logo />
				</a>
			</Link>
			<Nav />
		</header>
	)
}

export default Header
