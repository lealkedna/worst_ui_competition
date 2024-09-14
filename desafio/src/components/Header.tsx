
import styles from "@/styles/header.module.css"

import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <Image
              className={styles.logo}
              src="/images/medalha.png"
              alt="medalha"
              width={20}
              height={50}
            />
            <nav>
                <ul className={styles.navList}>
                <li><a href="#home" className={styles.upsideDown}>Start</a></li>
                <li><a href="#about" className={styles.upsideDown}>Podium</a></li>
                   
                </ul>
            </nav>
        </header>
    );
};

export default Header;
