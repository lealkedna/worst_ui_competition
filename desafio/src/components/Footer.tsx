import styles from '@/styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.decorativeBar}></div>
            <div className={styles.content}>
                <div className={styles.motivational}>
                    <h2>Continue Evaluating with Excellence!</h2>
                    <p> Your judgment is the mirror of success.</p>
                </div>
                <div className={styles.icons}>
                    <span className={styles.star}>⭐</span>
                    <span className={styles.trophy}>🏆</span>
                    <span className={styles.medal}>🥇</span>
                    <span className={styles.star}>⭐</span>
                </div>
            </div>
            <div className={styles.decorativeBar}></div>
        </footer>
    );
};

export default Footer;