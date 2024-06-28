import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import styles from "./css/style.module.css";

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
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.container}`)) {
        setIsUp(false);
        onExpand(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onExpand]);


  const toggleExpansion = (element: HTMLElement, to: any, duration = 350) => {
    return new Promise((res) => {
      element.animate(
        [
          {
            top: to.top,
            left: to.left,
            width: to.width,
            height: to.height,
          },
        ],
        { duration, fill: "forwards", easing: "ease-in" }
      );
      setTimeout(res, duration);
    });
  };

  const fadeContent = (element: HTMLElement, opacity: string, duration = 300) => {
    return new Promise((res) => {
      [...element.children].forEach((child) => {
        requestAnimationFrame(() => {
          (child as HTMLElement).style.transition = `opacity ${duration}ms linear`;
          (child as HTMLElement).style.opacity = opacity;
        });
      });
      setTimeout(res, duration);
    });
  };
  const getData = () =>{
    return`
    <div class="${styles.bgImg}">
        <img src="${data.imgURL}" alt="${data.title}" />
      </div>
      <div class="${styles.layer}">
  <div class="${styles.return}">
  <div
      class="${styles.btnSml} exit interaction ${data.scheme == 'dark'? styles.dark: styles.light}"}
    >
      <a>Go back</a>
    </div>
  </div>
  <div class="${styles.info}">
    <div class="${styles.header}">
      <div class="${styles.logo}">
        <img src="${data.logo}" alt="${data.title}" />
        <h1 style="color: ${data.color}" class="${styles.title}">
          ${data.title}
        </h1>
      </div>
      <div class="${styles.live}">
        <a
          class="interaction"
          href="${data.liveLink}"
          style="color: ${data.color}"
        >
          ${data.liveMask}
        </a>
      </div>
      <div class="${styles.techs}">
        <h3 style="color: ${data.color}">Technologies used</h3>
        <ul class="${styles.techsList}">
          ${data.techs.map((tech) => (
            `<li key="${tech}" class="${styles.tech}">#${tech}</li>`
          )).join('')}
          <li>
            <a
              class="interaction"
              href="${data.repo}"
              aria-label="Github"
              style="fill: ${data.color}"
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
    <div class="${styles.description}">
      <p style="color: ${data.color}" class="${styles.content}">
        ${data.description}
      </p>
    </div>
  </div>
</div>
`
}

  const onCardClick = async (e: ReactMouseEvent) => {
    e.stopPropagation();
    const card = e.currentTarget as HTMLElement;
    // clone the card
    const cardClone = card.cloneNode(true) as HTMLElement;
    // get the location of the card in the view
    const { top, left, width, height } = card.getBoundingClientRect();
    // position the clone on top of the original
    cardClone.style.position = "fixed";
    cardClone.style.top = top + "px";
    cardClone.style.left = left + "px";
    cardClone.style.width = width + "px";
    cardClone.style.height = height + "px";
    cardClone.style.zIndex = "1000"; // ensure the clone is on top
    // hide the original card with opacity
    card.style.opacity = "0";
    // add card to the same container
    card.parentNode?.appendChild(cardClone);
    // fade the content away
    fadeContent(cardClone, "0").then(() => {
      [...cardClone.children].forEach((child) => (child as HTMLElement).style.display = "none");
    });
    // expand the clone card
    await toggleExpansion(cardClone, { top: 0, left: 0, width: "100vw", height: "100vh", border : "none" });
    cardClone.addEventListener("mouseover", () => {
      cardClone.style.transform = "translate(0)"
    })
    cardClone.style.borderRadius = "0"

    // display the content
    fadeContent(cardClone, "1");

    setIsUp(true);
    onExpand(data.title);
    cardClone.insertAdjacentHTML('afterbegin', getData())
    const closeButton = document.querySelector(".exit")
    // attach click event to the close button
			closeButton?.addEventListener('click', async () => {
				// remove the button on close
				closeButton.remove();
				// remove the display style so the original content is displayed right
				cardClone.style.removeProperty('display');
				cardClone.style.removeProperty('padding');
				// show original card content
				[...cardClone.children].forEach(child =>  (child as HTMLElement).style.removeProperty('display'));
				fadeContent(cardClone, '0');
				// shrink the card back to the original position and size
				await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
        setIsUp(false);
        onExpand(null); 
				// show the original card again
				card.style.removeProperty('opacity');
				// remove the clone card
				cardClone.remove();
			});

    document.querySelectorAll(".interaction").forEach(interator =>
      interator.addEventListener("mouseenter", MouseEnter))
    document.querySelectorAll(".interaction").forEach(interator =>
      interator.addEventListener("mouseleave", MouseLeave))
  };

  if (!isVisible) {
    return null; // Se não estiver visível, não renderiza nada
  }

  return (
    <div
      style={{ backgroundColor: data.bgColor }}
      className={`${styles.container}`}
      onClick={onCardClick}
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
     
    </div>
  );
};
