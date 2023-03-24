import Image from "next/image";
import styles from './Loading.module.css'

export default function Loading() {
    return (
        <Image 
            src="/loading.gif"
            alt="Imagem de carregamento" 
            width={30} 
            height={30}
            className={styles.carregando}
        />
    )
}