import { useState } from 'react';
import styles from './css/style.module.css';
import Logo from '/logo/logo-white.png';
import Cursor from '../../Components/Cursor';
import { CardInfo } from '../../Components/CardInfo';
import { Button } from '../../Components/Button';

const Home = () => {
  const [hoverState, setHoverState] = useState({ isHovered: false, hoverType: '' });
  const [fixed, setFixed] = useState(false);

  const handleHoverIn = (type: string) => {
    setHoverState({ isHovered: true, hoverType: type });
  };

  const handleHoverOut = () => {
    setHoverState({ isHovered: false, hoverType: '' });
  };

  const handleLogoClick = (e: Event) => {
    e.stopPropagation();
    setFixed(!fixed);
  };

  return (
    <section className={styles.container}>
      <Cursor isHovered={hoverState.isHovered} hoverType={hoverState.hoverType} />
      <main className={styles.hero} onClick={() => handleLogoClick}>
          <div
            className={`${styles.logo} ${fixed ? styles.pulsing : ''}`}
            onMouseEnter={() => handleHoverIn('cta')}
            onMouseLeave={handleHoverOut}
            onClick={() => handleLogoClick}
          >
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.buttonContainer}>
            <Button value={'view Projects'}  
            link='/projects'
            MouseEnter={() => handleHoverIn('button')}
            MouseLeave={handleHoverOut}/>
          </div>
      </main>
          <div className={`${styles.layer} ${fixed ? styles.visible : ''}`}>
            <CardInfo fixed={fixed} dataType={'contact'} MouseEnter={() => handleHoverIn('button')}
            MouseLeave={handleHoverOut}/>
            <CardInfo fixed={fixed} dataType={'about'} MouseEnter={() => handleHoverIn('link')}
            MouseLeave={handleHoverOut}/>
          </div>
          <footer className={styles.footer}>
            <a href="https://twitter.com/IvandroNeto6121" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="2dvw" height="2dvw" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
            <a href="https://github.com/ivandro-neto" aria-label="Github">
              <svg xmlns="http://www.w3.org/2000/svg" width="2dvw" height="2dvw" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ineto818/" aria-label="Linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="2dvw" height="2dvw" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
      </footer>
    </section>
  );
};

export default Home;
