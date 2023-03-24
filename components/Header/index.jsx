import Link from "next/link";
import styles from './Header.module.css'

export default function Header() {
    return (
        <nav className={styles.container}>
            <ul className={styles.lista}>
                <li className={styles.container_link}><Link href='/' className={styles.links}>Home</Link></li>
                <li className={styles.container_link}><Link href="/howtouse" className={styles.links}>Como usar?</Link></li>
            </ul>
        </nav>
    )
}