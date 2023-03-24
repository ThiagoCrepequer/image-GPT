import Image from "next/image";
import Button from "../Button";
import styles from './GeneratedImages.module.css'
import Loading from "../Loading";

export default function GeneratedImages({urlImage, booleanLoading}) {
    return (
        <div className={styles.container}>
            <div className={styles.container_imagem}>
                {booleanLoading 
                    ? <Loading />
                    : <Image 
                        src={urlImage} 
                        alt="" 
                        width={512} 
                        height={512}
                        className={styles.image}
                    />    
                }
            </div>
        </div>
    )
}