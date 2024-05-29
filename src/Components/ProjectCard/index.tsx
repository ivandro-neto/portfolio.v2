import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import styles from "./css/style.module.css";
import { ReturnButtonPage } from "../Button";

interface IProjectProps {
  data: IProjectData;
  MouseEnter: () => void | null; // Função para onMouseEnter
  MouseLeave: () => void | null;
  onExpand: (projectTitle: string | null) => void; // Adicionado callback
  isVisible: boolean; // Adicionado prop para visibilidade
}

export const ProjectCard = ({
  data,
  MouseEnter,
  MouseLeave,
  onExpand,
  isVisible,
}: IProjectProps) => {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: ReactMouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.container}`)) {
        setIsUp(false);
        onExpand(null); // Notifica que o projeto não está mais expandido
      }
    };

    document.addEventListener("click", () => handleClickOutside);

    return () => {
      document.removeEventListener("click", () => handleClickOutside);
    };
  }, []);

  const handleMouseClick = (e: ReactMouseEvent) => {
    e.stopPropagation();
    const expand = !isUp;
    setIsUp(expand);
    onExpand(expand ? data.title : null);
  };

  const handleExpandClick = () => {
    setIsUp(true);
    onExpand(data.title); // Notifica que o projeto está expandido
  };

  if (!isVisible) {
    return null; // Se não estiver visível, não renderiza nada
  }
  return (
    <div
      style={{ backgroundColor: data.bgColor }}
      className={`${styles.container} ${isUp ? styles.up : ""}`}
      onClick={handleExpandClick}
      onMouseEnter={MouseEnter}
      onMouseLeave={MouseLeave}
    >
      <div className={`${isUp ? styles.bgImg : styles.minimized}`}>
        <img src={data.imgURL} alt={data.title} />
      </div>
      <div className={`${isUp ? styles.hide : styles.smallLogo}`}>
        <h1 style={{ color: data.color }} className={styles.title}>
          {data.title}
        </h1>
      </div>
      <div className={`${isUp ? styles.layer : styles.hide}`}>
        <div className={styles.return}>
          <ReturnButtonPage
            scheme={data.scheme}
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
              <h1 style={{ color: data.color }} className={styles.title}>
                {data.title}
              </h1>
            </div>
            <div className={styles.live}>
              <a
                href={data.liveLink}
                style={{ color: data.color }}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
              >
                {data.liveMask}
              </a>
            </div>
            <div className={styles.techs}>
              <h3 style={{ color: data.color }}>Technologies used</h3>
              <ul className={styles.techsList}>
                {data.techs.map((tech) => (
                  <li key={tech} className={styles.tech}>
                    {tech}
                  </li>
                ))}
                <li>
                  <a
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}
                    href={data.repo}
                    aria-label="Github"
                    style={{fill : data.color}}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.description}>
            <p style={{ color: data.color }} className={styles.content}>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
