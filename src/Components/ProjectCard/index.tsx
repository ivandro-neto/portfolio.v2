import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import styles from "./css/style.module.css";
import { ReturnButtonPage } from "../Button";

interface IProjectProps {
  data: IProjectData;
  MouseEnter: () => void | null; // Função para onMouseEnter
  MouseLeave: () => void | null;
}

export const ProjectCard = ({ data,  MouseEnter, MouseLeave }: IProjectProps) => {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.container}`)) {
        setIsUp(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseClick = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setIsUp(false);
  };

  return (
    
      <div
        style={{backgroundColor : data.bgColor}}
        className={`${styles.container} ${isUp ? styles.up : ""}`}
        onClick={() => setIsUp(true)}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
      >
        <div className={`${isUp ? styles.bgImg : styles.minimized}`}>
          <img src={data.imgURL} alt={data.title} />
        </div>
        <div className={`${isUp ? styles.hide : styles.smallLogo}`}>
          <img src={data.logo} alt={data.title} />
        </div>
        <div className={`${isUp ? styles.layer : styles.hide}`}>
          <div className={styles.return}>
            <ReturnButtonPage
              scheme={'dark'}
              value="Go back"
              MouseEnter={MouseEnter}
              MouseLeave={MouseLeave}
              MouseClick={handleMouseClick}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <img src={data.logo} alt={data.title} />
              </div>
              <div className={styles.live}>
                <a href={data.liveLink} style={{color : data.color}} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>{data.liveMask}</a>
              </div>
              <div className={styles.techs}>
                <h3 style={{color : data.color}}>Technologies used</h3>
                <ul className={styles.techsList}>
                  {data.techs.map((tech) => (
                    <li key={tech} className={styles.tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.description}>
              <p style={{color : data.color}} className={styles.content}>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
  );
};
