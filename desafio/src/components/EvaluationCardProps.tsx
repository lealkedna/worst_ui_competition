"use client";

import { useState } from 'react';
import styles from '@/styles/evaluationCard.module.css';

interface EvaluationCardProps {
    imageUrl: string;
    description: string;
    userName: string;
}

const EvaluationCard: React.FC<EvaluationCardProps> = ({ imageUrl, description, userName }) => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const [stars, setStars] = useState(0);

    // Função para manipular a seleção de cor do cartão
    const handleCardSelection = (color: string) => {
        setSelectedCard(color);
    };

    // Função para manipular a avaliação por estrelas
    const handleStarClick = (star: number) => {
        setStars(star);
    };

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt="User" className={styles.image} />
            <h3>{userName}</h3>
            <p>{description}</p>

            {/* Cartões de cor */}
            <div className={styles.cardSelection}>
                <button 
                    className={`${styles.cardButton} ${styles.green}`} 
                    onClick={() => handleCardSelection('green')}
                >
                   green
                </button>
                <button 
                    className={`${styles.cardButton} ${styles.yellow}`} 
                    onClick={() => handleCardSelection('yellow')}
                >
                    yellow
                </button>
                <button 
                    className={`${styles.cardButton} ${styles.red}`} 
                    onClick={() => handleCardSelection('red')}
                >
                    red
                </button>
            </div>

            {/* Avaliação por estrelas */}
            <div className={styles.starRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                        key={star} 
                        className={`${styles.star} ${star <= stars ? styles.filledStar : ''}`}
                        onClick={() => handleStarClick(star)}
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Exibe a cor selecionada */}
            {selectedCard && <p>Cartão selecionado: {selectedCard}</p>}
        </div>
    );
};

export default EvaluationCard;
