import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.heading}>
          better designs for your digital products
        </h1>
        <p className={styles.des}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia
          reiciendis voluptate maxime a repudiandae .
        </p>
        <Button url="/portfolio" text="see our work" />
      </div>
      <div className={styles.item}>
        <Image src={hero} className={styles.image} />
      </div>
    </div>
  );
}
