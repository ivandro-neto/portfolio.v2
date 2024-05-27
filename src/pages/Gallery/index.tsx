import { useEffect, useState } from "react";
import styles from "./css/style.module.css";
import { ProjectCard } from "../../Components/ProjectCard";
import { ReturnButtonPage } from "../../Components/Button";

interface IGalleryProps {
  show: boolean;
  onClose: () => void;
  MouseEnter: () => void | null; // Função para onMouseEnter
  MouseLeave: () => void | null;
}

export const Gallery = ({ show, onClose, MouseEnter, MouseLeave }: IGalleryProps) => {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    if (show) {
      setIsUp(true);
    } else {
      setIsUp(false);
    }
  }, [show]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseClick = () => {
    setIsUp(false);
    onClose();
  };

  const projects: IProjectData[] = [
    {
      title: "IN.code",
      description:
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Magnam, fugiat, minima ullam maxime earum iusto, 
      et quibusdam illum deleniti eum suscipit? 
      Facere quisquam voluptas, numquam saepe 
      distinctio fuga asperiores perferendis 
      quasi dolor reiciendis rem iusto doloremque 
      nisi eos, maiores eligendi a non similique! 
      Voluptatum consequatur ullam incidunt ut. 
      Reprehenderit, tempora.`,
      bgColor: "#212531ff",
      color: "#fcfcfcff",
      imgURL: "/logo/logo-white.png",
      liveLink: "",
      liveMask: "Discover the world inside the panties of a big foot in the beach Or something else that you could like before",
      logo: "/logo/logo-white.png",
      repo: "",
      techs: ["React.Js", "TailwindCss"],
    },
    {
      title: "SPACIUM",
      description:
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Magnam, fugiat, minima ullam maxime earum iusto, 
      et quibusdam illum deleniti eum suscipit? 
      Facere quisquam voluptas, numquam saepe 
      distinctio fuga asperiores perferendis 
      quasi dolor reiciendis rem iusto doloremque 
      nisi eos, maiores eligendi a non similique! 
      Voluptatum consequatur ullam incidunt ut. 
      Reprehenderit, tempora.`,
      bgColor: "#305350",
      color: "#FFFFFF",
      imgURL: "/projects/bg/spacium.png",
      liveLink: "",
      liveMask: "Discover the world inside the panties of a big foot in the beach Or something else that you could like before",
      logo: "/projects/bg/spacium.png",
      repo: "",
      techs: ["React.Js", "TailwindCss"],
    },
    {
      title: "Templefy.me",
      description:
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Magnam, fugiat, minima ullam maxime earum iusto, 
      et quibusdam illum deleniti eum suscipit? 
      Facere quisquam voluptas, numquam saepe 
      distinctio fuga asperiores perferendis 
      quasi dolor reiciendis rem iusto doloremque 
      nisi eos, maiores eligendi a non similique! 
      Voluptatum consequatur ullam incidunt ut. 
      Reprehenderit, tempora.`,
      bgColor: "#7D98A1",
      color: "#101218ff",
      imgURL: "/logo/logo-white.png",
      liveLink: "",
      liveMask: "Discover the world inside the panties of a big foot in the beach Or something else that you could like before",
      logo: "/logo/logo-white.png",
      repo: "",
      techs: ["React.Js", "TailwindCss"],
    },
  ];

  return (
    <div className={`${styles.container} ${isUp ? styles.up : styles.down}`}>
       <div className={styles.return}>
          <ReturnButtonPage 
            scheme={'light'}
            value={'Go back'}
            MouseEnter={MouseEnter}
            MouseLeave={MouseLeave}
            MouseClick={handleMouseClick}
          />
          <h1>Featured Projects</h1>
       </div>
       <div className={styles.list}>

        {projects.map((project) => (
          <ProjectCard key={project.title} data={project}
          MouseEnter={MouseEnter}
          MouseLeave={MouseLeave}
          />
        ))}
        </div>
    </div>
  );
};
