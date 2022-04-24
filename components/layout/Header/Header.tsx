import styles from './Header.module.scss'
import Image from 'next/image'

function Header() {
	return (
		<header className={styles.header}>
			<Image src="/logo.svg" width={25} height={25} />
		</header>
	)
}

export default Header
