import styles from './css/style.module.css';

interface IButtonProps {
  value: string;
  link: string;
  MouseEnter: () => void; // Função para onMouseEnter
  MouseLeave: () => void; // Função para onMouseLeave
}

export const Button = ({ value, link, MouseEnter, MouseLeave }: IButtonProps) => {
  return (
    <div
      className={styles.button}
      onMouseEnter={MouseEnter} // Não é necessário chamar a função aqui, apenas passar a referência
      onMouseLeave={MouseLeave} // Não é necessário chamar a função aqui, apenas passar a referência
    >
      <a href={link}>{value}</a>
    </div>
  );
};
