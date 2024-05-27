import { MouseEvent as ReactMouseEvent, useState } from 'react';
import styles from './css/style.module.css';
import Logo from '/logo/logo-white.png';
import Cursor from '../../Components/Cursor';
import { CardInfo } from '../../Components/CardInfo';
import { ButtonPage } from '../../Components/Button';
import { Footer } from '../../Components/Footer';
import { Gallery } from '../Gallery';

const Home = () => {
  const [hoverState, setHoverState] = useState({ isHovered: false, hoverType: '' });
  const [fixed, setFixed] = useState(false);
  const [openned, setOpenned] = useState(false);

  const handleHoverIn = (type: string) => {
    setHoverState({ isHovered: true, hoverType: type });
  };

  const handleHoverOut = () => {
    setHoverState({ isHovered: false, hoverType: '' });
  };

  const handleCloseGallery = () => {
    setOpenned(false);
  };

  const handleLogoClick = (e: ReactMouseEvent) => {
    e.stopPropagation();
    setFixed(!fixed);
  };

  return (
    <section className={styles.container}>
      <Cursor isHovered={hoverState.isHovered} hoverType={hoverState.hoverType} />
      <main className={styles.hero} onClick={()=> setFixed(false)}>
        <div
          className={`${styles.logo} ${fixed ? styles.pulsing : ''}`}
          onMouseEnter={() => handleHoverIn('cta')}
          onMouseLeave={handleHoverOut}
          onClick={handleLogoClick}
        >
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.buttonContainer}>
          <ButtonPage
            scheme={'dark'}
            value="view Projects"
            MouseClick={()=> setOpenned(true)}
            MouseEnter={() => handleHoverIn('button')}
            MouseLeave={handleHoverOut}
          />
        </div>
      </main>
      <div className={`${styles.layer} ${fixed ? styles.visible : ''}`} onClick={()=> setFixed(false)}>
        <CardInfo
          fixed={fixed}
          dataType="contact"
          MouseEnter={() => handleHoverIn('button')}
          MouseLeave={handleHoverOut}

        />
        <CardInfo
          fixed={fixed}
          dataType="about"
          MouseEnter={() => handleHoverIn('link')}
          MouseLeave={handleHoverOut}
        />
      </div>
      <Gallery
        show={openned}
        MouseEnter={() => handleHoverIn('button')}
        MouseLeave={handleHoverOut}
        onClose={handleCloseGallery}
      />
      <Footer
        MouseEnter={() => handleHoverIn('link')}
        MouseLeave={handleHoverOut}
      />
    </section>
    
  );
};

export default Home;
