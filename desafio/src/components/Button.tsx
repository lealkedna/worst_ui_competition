import styles from '@/styles/button.module.css';

interface ButtonProps {
    text: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>
                {text}
            </button>
        </a>
    );
};

export default Button;