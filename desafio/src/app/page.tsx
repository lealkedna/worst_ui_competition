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
            imageUrl="https://www.thrashermagazine.com//mediaV2/k2/items/cache/47dfc222dd5e0fecbcee61bc772c3cec_L.jpg?t=1414189000"
            description="skate judge at the Olympics."
            userName="Garrett Hill"
          />
          <EvaluationCard
            imageUrl="https://static.wixstatic.com/media/8615b6_b7c62e468a9a4e8fb5f33774ac17e8ab~mv2.png/v1/fill/w_450,h_706,al_c,lg_1,q_85,enc_auto/8615b6_b7c62e468a9a4e8fb5f33774ac17e8ab~mv2.png"
            description="Australian gymnast judge"
            userName=" Trisha Hade"
          />
          <EvaluationCard
            imageUrl="https://cdn.record.pt/images/2024-09/img_552x364$2024_09_05_11_12_10_2292026.jpg"
            description="Portuguese volleyball referee."
            userName="Rui Carvalho "
          />
            <EvaluationCard
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ga9--2CtNP8vjHZE4PJdUaAWemSHRsRjPQ&s"
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
