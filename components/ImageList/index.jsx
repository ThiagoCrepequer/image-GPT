import Image from "next/image";
import Button from "../Button";
import styles from './ImageList.module.css';

export default function ImageList({ images, onSetImage }) {
    return (
      <section className={styles.imageList}>
        {images.map(imagem => ( imagem && 
              <div className={styles.container} key={"div" + imagem}>
                <Image 
                  key={imagem} 
                  src={imagem} 
                  alt="" 
                  width={1024} 
                  height={1024} 
                  className={styles.image} 
                  onClick={() => onSetImage(imagem)}
                />
                <Button 
                  key={"button" + imagem} 
                  onClick={() => onSetImage(imagem)}
                >Editar</Button>
              </div>          
          ))}
        </section>
    )
}