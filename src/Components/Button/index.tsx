import { MouseEventHandler, MouseEvent as ReactMouseEvent} from 'react';
import styles from './css/style.module.css';

interface IButtonProps {
  scheme?: string;
  size?: string;
  value: string;
  link: string;
  MouseEnter: () => void; // Função para onMouseEnter
  MouseLeave: () => void; // Função para onMouseLeave
}
interface IButtonPageProps {
  scheme: string;
  value: string;
  MouseClick: (event: ReactMouseEvent) => void | MouseEventHandler;
  MouseEnter: () => void; // Função para onMouseEnter
  MouseLeave: () => void; // Função para onMouseLeave
}

export const Button = ({ size, scheme, value, link, MouseEnter, MouseLeave }: IButtonProps) => {
  return (
    <div
      className={` ${scheme == 'dark'? styles.dark: styles.light} ${size == 'small'? styles.btnSml : styles.button}`}
      onMouseEnter={MouseEnter} // Não é necessário chamar a função aqui, apenas passar a referência
      onMouseLeave={MouseLeave} // Não é necessário chamar a função aqui, apenas passar a referência
    >
      <a href={link}>{value}</a>
    </div>
  );
};

export const ButtonPage = ({ value, MouseClick, MouseEnter, MouseLeave }: IButtonPageProps) => {
  

  return (
    <div
      className={styles.button}
      onMouseEnter={MouseEnter} // Não é necessário chamar a função aqui, apenas passar a referência
      onMouseLeave={MouseLeave}
      onClick={MouseClick} // Não é necessário chamar a função aqui, apenas passar a referência
    >
      <a>{value}</a>
    </div>
  );
};

export const ReturnButtonPage = ({ scheme, value, MouseClick, MouseEnter, MouseLeave }: IButtonPageProps) => {

  return (
    <div
      className={`${styles.btnSml} ${scheme == 'dark'? styles.dark: styles.light}`}
      onMouseEnter={MouseEnter} // Não é necessário chamar a função aqui, apenas passar a referência
      onMouseLeave={MouseLeave}
      onClick={MouseClick} // Não é necessário chamar a função aqui, apenas passar a referência
    >
      <a>{value}</a>
    </div>
  );
};


