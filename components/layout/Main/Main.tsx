import styles from './Main.module.scss'

interface Props {
  children: JSX.Element[] | JSX.Element
}

function Main({ children }: Props) {
  return <main className={styles.main}>{children}</main>
}

export default Main

