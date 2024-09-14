// import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import EvaluationCard from "@/components/EvaluationCardProps";
import Footer from "@/components/Footer";
import InvertedCursor from "@/components/InvertedCursor";


export default function Home() {
  return (
    <div >
      <main className={styles.main}>
     
        <Header />
        <MainSection />
        <div className={styles.card}>
          <EvaluationCard
            imageUrl="/images/juiz1.jpg"
            description="skate judge at the Olympics."
            userName="Garrett Hill"
          />
          <EvaluationCard
            imageUrl="/images/juiz2.png"
            description="Australian gymnast judge"
            userName=" Trisha Hade"
          />
          <EvaluationCard
            imageUrl="/images/juiz3.jpg"
            description="Portuguese volleyball referee."
            userName="Rui Carvalho "
          />
            <EvaluationCard
            imageUrl="/images/juiz4.jpeg"
            description="Rhythmic Gymnastics Judge"
            userName="Delia Halmu"
          />
        </div>

        <Footer />
        <InvertedCursor />
      </main>
    </div>
  );
}
