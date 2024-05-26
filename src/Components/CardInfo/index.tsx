import { Button } from "../Button";
import styles from "./css/style.module.css";

interface ICardInfoProps{
  fixed : boolean
  dataType: string
  MouseEnter: () => void | null; // Função para onMouseEnter
  MouseLeave: () => void | null; // Função para onMouseLeave
}

export const CardInfo = ({ fixed, dataType, MouseEnter, MouseLeave } : ICardInfoProps) => {
  const tech: string[] = [
    "CSharp",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "React.Js",
    "Angular",
    "SQL Server",
    "MongoDB",
    "MySQL",
    "PostGreSQL",
    "SQLite",
    "Node.Js",
    "DotNet Core",
    "Express.Js",
    "Unity",
    "Godot",
    "SFML"
  ];
  const soft: string[] = [
    "LeaderShip",
    "Communication skill",
    "Problem-solving",
  ];

  return (
    <div className={`${styles.brief} ${fixed ? styles.visible : ""}`}>
      {dataType == "about" ? (
        <>
          <h1 className={styles.title}>Ivandro Neto</h1>
          <div className={styles.description}>
            <h2 className={styles.role}>Software Engineer</h2>
            <h4>
              I create dynamic, user-centric digital solutions, driven by a
              passion for technology and a commitment to excellence.
            </h4>
            <p className={styles.info}>
              Greetings! I'm Ivandro Neto, a seasoned developer known for my
              dedication to excellence in the tech industry. With a solid
              foundation in various programming languages, including C#, I
              tackle challenges with precision and passion, delivering top-notch
              solutions every time. Beyond the realms of coding, I find solace
              in the art of brewing the perfect cup of coffee, kickstarting my
              day with a dose of caffeine and focus.
            </p>
            <div className={styles.skills}>
              <h4>Tech Skills</h4>
              <ul className={styles.skillList}>
                {tech.map((skill) => (
                  <li key={skill} className={styles.skill}  onMouseEnter={MouseEnter}
                  onMouseLeave={MouseLeave}>
                    #{skill}
                  </li>
                ))}
              </ul>
                <h4>Soft Skills</h4>
              <ul className={styles.skillList}>
                {soft.map((skill) => (
                  <li key={skill} className={styles.skill} onMouseEnter={MouseEnter}
                  onMouseLeave={MouseLeave}>
                    #{skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
        <h1>Let's Work Together</h1>
        <p>
          I'm always eager to connect! Whether you have a project in mind, want
          to chat about tech, or simply share your favorite coffee brewing tips,
          I'd love to hear from you. Let's start a conversation and make things
          happen together!
        </p>
        <div>

        <Button value={'Say Hello'} 
        link="mailto:ivandro.neto@outlook.com?subject=Let's%20work"
        MouseEnter={MouseEnter}
        MouseLeave={MouseLeave}/>
        </div>
        </>
      )}
    </div>
  );
};
