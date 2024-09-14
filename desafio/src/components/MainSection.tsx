
import styles from '@/styles/mainSection.module.css';
import Button from "@/components/Button";
import Image from "next/image";

const MainSection = () => {
    return (
        <main className={styles.mainSection}>
            <div className={styles.descrition}>
                <div className={styles.conteudo}>
                    <h2 className={styles.title}>  Scoring System for Judges - Olympic Games</h2>
                    <p>In the Olympic Games, accuracy and fairness in evaluating athletes are crucial to ensuring the integrity of the competition. But what about the judges? Who evaluates these impartial and infallible beings? We know that, of course, the accuracy and impartiality of the judges are unquestionable... or at least that's what we would like to believe.That's why the scoring system promises to ensure just that — fairness for the judges. After all, human judgment never fails (except when it does, of course). So, it's your turn to judge the judges! </p>
                    <Button text="Start" link="https://media.giphy.com/media/LXXdsc4oeAPPq/giphy.gif" />
                </div>
                <div className="container">
                    <Image
                        src="/images/podio.png"
                        width={450}
                        height={450}
                        alt="Picture of the author"
                    />

                </div>
            </div>
        </main>
    );
};

export default MainSection;
