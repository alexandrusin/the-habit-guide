import styles from './Nav.module.scss'
import Link from 'next/link'

function Nav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">
						<a className="button">Home</a>
					</Link>
				</li>
				<li>
					<Link href="/typography">
						<a className="button">Typography</a>
					</Link>
				</li>
				<li>
					<Link href="/habits">
						<a className="button">Habits</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
