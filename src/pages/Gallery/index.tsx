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

export const Gallery = ({
  show,
  onClose,
  MouseEnter,
  MouseLeave,
}: IGalleryProps) => {
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
      title: "Age Calculator App",
      description: `This is a solution to the Age calculator app challenge on Frontend Mentor.
       Frontend Mentor challenges help you improve your coding skills by building realistic projects.`,
      bgColor: "#ffffff",
      color: "hsl(0, 0%, 8%)",
      imgURL:
        "https://raw.githubusercontent.com/ivandro-neto/Age-Calculator-App/main/screenshots/screenshot.png",
      liveLink: "https://age-calculator-app-bice.vercel.app/",
      liveMask:
        "Get your age just typing your birth date!",
      logo: "/logo/logo-black.png",
      repo: "https://github.com/ivandro-neto/age-calculator-app",
      techs: ["React", "TypeScript", "CSS"],
      scheme : 'light'
    },
    {
      title: "kilunga App",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
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
      imgURL: "https://github.com/ivandro-neto/Portfolio/blob/main/images/Projects/kilunga.png?raw=true",
      liveLink: "https://kilunga.netlify.app/",
      liveMask:
        "Cultivar com technologia é cultive bem!",
      logo: "/projects/bg/spacium.png",
      repo: "https://github.com/ivandro-neto/Kilunga",
      techs: ["HTML", "CSS", "JavaScript"],
      scheme : 'dark'
    },
    {
      title: "EventGub Api",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Magnam, fugiat, minima ullam maxime earum iusto, 
      et quibusdam illum deleniti eum suscipit? 
      Facere quisquam voluptas, numquam saepe 
      distinctio fuga asperiores perferendis 
      quasi dolor reiciendis rem iusto doloremque 
      nisi eos, maiores eligendi a non similique! 
      Voluptatum consequatur ullam incidunt ut. 
      Reprehenderit, tempora.`,
      bgColor: " #0a100dff",
      color: "#eeeeffff",
      imgURL: "https://github.com/ivandro-neto/Portfolio/blob/main/images/Projects/EventHubAPI.png?raw=true",
      liveLink: "https://github.com/ivandro-neto/EventHub",
      liveMask:
        "Discover the world inside the panties of a big foot in the beach Or something else that you could like before",
      logo: "/logo/logo-white.png",
      repo: "https://github.com/ivandro-neto/EventHub",
      techs: ["HTML", "CSS", "CSharp", "MySQL", "DotNet Core", "Docker"],
      scheme : 'dark'
    },
    {
      title: "IN.Store",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Magnam, fugiat, minima ullam maxime earum iusto, 
      et quibusdam illum deleniti eum suscipit? 
      Facere quisquam voluptas, numquam saepe 
      distinctio fuga asperiores perferendis 
      quasi dolor reiciendis rem iusto doloremque 
      nisi eos, maiores eligendi a non similique! 
      Voluptatum consequatur ullam incidunt ut. 
      Reprehenderit, tempora.`,
      bgColor: "#ffffff",
      color: "hsl(0, 0%, 8%)",
      imgURL: "https://github.com/ivandro-neto/Portfolio/blob/main/images/Projects/Ecommerce.png?raw=true",
      liveLink: "https://ivandro-neto.github.io/Ecommerce/",
      liveMask:
        "Discover the world inside the panties of a big foot in the beach Or something else that you could like before",
      logo: "/logo/logo-black.png",
      repo: "https://github.com/ivandro-neto/Ecommerce.git",
      techs: ["HTML", "CSS", "JavaScript"],
      scheme : 'light'
    },
  ];

  return (
    <div className={`${styles.container} ${isUp ? styles.up : styles.down}`}>
      <div className={styles.return}>
        <ReturnButtonPage
          scheme={"light"}
          value={"Go back"}
          MouseEnter={MouseEnter}
          MouseLeave={MouseLeave}
          MouseClick={handleMouseClick}
        />
      </div>
        <h1>Featured Projects</h1>
      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            data={project}
            MouseEnter={MouseEnter}
            MouseLeave={MouseLeave}
          />
        ))}
      </div>
    </div>
  );
};
