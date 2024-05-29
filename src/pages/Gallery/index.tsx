import { useEffect, useState } from "react";
import styles from "./css/style.module.css";
import { ProjectCard } from "../../Components/ProjectCard";
import { Button, ReturnButtonPage } from "../../Components/Button";

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

  const projects: IProjectData[] = [
    {
      title: "Age Calculator App",
      description: `Our Age Calculator App is a sophisticated solution designed to streamline age calculation processes with precision and efficiency. Seamlessly integrated with modern technology, our app offers an intuitive user interface, ensuring a seamless experience for users of all backgrounds. Whether you're planning an event or simply curious about your age, our app provides accurate results with just a few clicks. Elevate your age calculation experience with our innovative app today`,
      bgColor: "#ffffff",
      color: "hsl(0, 0%, 8%)",
      imgURL:
        "https://raw.githubusercontent.com/ivandro-neto/Age-Calculator-App/main/screenshots/screenshot.png",
      liveLink: "https://age-calculator-app-bice.vercel.app/",
      liveMask: "Empowering age calculation, effortlessly!",
      logo: "/logo/logo-black.png",
      repo: "https://github.com/ivandro-neto/age-calculator-app",
      techs: ["React", "TypeScript", "CSS"],
      scheme: "light",
    },
    {
      title: "kilunga App",
      description: `Kilunga App represents the pinnacle of gardening innovation, revolutionizing the way gardening enthusiasts interact with their green spaces. With Kilunga, gardening becomes more than just a hobby – it's a journey of exploration and growth. Our platform leverages cutting-edge technology to offer personalized gardening insights, expert tips, and tailored recommendations, empowering users to cultivate vibrant and thriving gardens with confidence. Experience the future of gardening with Kilunga.`,
      bgColor: "#305350",
      color: "#FFFFFF",
      imgURL:
        "https://github.com/ivandro-neto/Portfolio/blob/main/images/Projects/kilunga.png?raw=true",
      liveLink: "https://kilunga.netlify.app/",
      liveMask: "Cultivate with technology, cultivate well!",
      logo: "https://raw.githubusercontent.com/ivandro-neto/Kilunga/main/img/logo/logo.svg",
      repo: "https://github.com/ivandro-neto/Kilunga",
      techs: ["HTML", "CSS", "JavaScript"],
      scheme: "dark",
    },
    {
      title: "EventHub Api",
      description: ` EventHub API redefines the way individuals discover and engage with events, offering a comprehensive platform that connects event organizers with eager attendees. From bustling cultural festivals to intimate community gatherings, our API provides real-time access to a diverse array of events, ensuring that users never miss out on the latest happenings in their area. With advanced features and seamless integration, EventHub API is the ultimate solution for event discovery and engagement.`,
      bgColor: " #0a100dff",
      color: "#eeeeffff",
      imgURL:
        "https://github.com/ivandro-neto/Portfolio/blob/main/images/Projects/EventHubAPI.png?raw=true",
      liveLink: "https://github.com/ivandro-neto/EventHub",
      liveMask: "Connecting communities, one event at a time!",
      logo: "https://raw.githubusercontent.com/ivandro-neto/EventHub/main/EventHub.API/wwwroot/public/Logo_dark.svg",
      repo: "https://github.com/ivandro-neto/EventHub",
      techs: ["HTML", "CSS", "CSharp", "MySQL", "DotNet Core", "Docker"],
      scheme: "dark",
    },
    {
      title: "IN.Store",
      description: `IN.Store is a premier e-commerce destination that caters to the modern shopper's needs, offering a curated selection of products sourced from around the globe. Our platform combines convenience with quality, providing users with a seamless shopping experience from start to finish. From fashion essentials to home decor treasures, IN.Store delivers an unparalleled shopping journey, enriched by innovative features and personalized recommendations. Explore a world of possibilities with IN.Store today.`,
      bgColor: "#ffffff",
      color: "hsl(0, 0%, 8%)",
      imgURL:
        "https://github.com/ivandro-neto/Portfolio/blob/main/images/Projects/Ecommerce.png?raw=true",
      liveLink: "https://ivandro-neto.github.io/Ecommerce/",
      liveMask: "Redefining online shopping, one click at a time!",
      logo: "/logo/logo-black.png",
      repo: "https://github.com/ivandro-neto/Ecommerce.git",
      techs: ["HTML", "CSS", "JavaScript"],
      scheme: "light",
    },
  ];

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
