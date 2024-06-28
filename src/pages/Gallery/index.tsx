import { useEffect, useState } from "react";
import styles from "./css/style.module.css";
import { ProjectCard } from "../../Components/ProjectCard";
import { Button, ReturnButtonPage } from "../../Components/Button";
import {projects} from '../../utils/Data/projects'
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
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    if (show) {
      setIsUp(true);
    } else {
      setIsUp(false);
    }
  }, [show]);

  const handleProjectExpand = (projectTitle: string | null) => {
    setExpandedProject(projectTitle);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseClick = () => {
    setIsUp(false);
    onClose();
  };

  return (
    <div className={`${styles.container} ${isUp ? styles.up : styles.down} `}>
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
            onExpand={handleProjectExpand}
            isVisible={!expandedProject || expandedProject === project.title}
          />
        ))}
      </div>
      <div className={styles.btnFooter}>
        <Button
          scheme="light"
          link="https://github.com/ivandro-neto?tab=repositories"
          size="small"
          value={"See More"}
          MouseEnter={MouseEnter}
          MouseLeave={MouseLeave}
        />
      </div>
    </div>
  );
};
