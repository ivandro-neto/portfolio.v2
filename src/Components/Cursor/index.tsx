import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

interface ICursorProps{
  isHovered : boolean;
  hoverType: string;
}

export default function Cursor({isHovered, hoverType} : ICursorProps) {
  const [cursorStyle, setCursorStyle] = useState('');
  const [cursor1Style, setCursor1Style] = useState('');
  const cursorRef = useRef(null);
  const cursor1Ref = useRef(null);

  const handleMouseMove = (e) => {
    const followerRect = cursorRef.current.getBoundingClientRect();
    const followerCenterX = followerRect.left + followerRect.width / 2;
    const followerCenterY = followerRect.top + followerRect.height / 2;
    const x = e.clientX;
    const y = e.clientY;

    const dx = x - followerCenterX;
    const dy = y - followerCenterY;

    const newX = followerCenterX + dx * 1.5;
    const newY = followerCenterY + dy * 1.5;

    cursorRef.current.style.left = newX + "px";
    cursorRef.current.style.top = newY + "px";

    // Set positions for follower cursors with a slight delay
    setTimeout(() => {
      cursor1Ref.current.style.left = newX + "px";
      cursor1Ref.current.style.top = newY + "px";

      
    }, 50); // Adjust the delay as needed
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleHover = () => {
    if (isHovered && hoverType === '') {
      return `${styles.ishovered} ${styles.cursor1}`;
    }
    if (isHovered && hoverType === 'cta') {
      return `${styles.cursor1} ${styles.cta}`;
    }
    if (isHovered && hoverType === 'link') {
      return `${styles.cursor1} ${styles.hide}`;
    }
    
    if (isHovered && hoverType === 'button') {
      return `${styles.cursor1} ${styles.hide}`;
    }
    return `${styles.cursor1}`;
  };
  const handleHoverPointer = () => {
    if (isHovered && hoverType === '') {
      return `${styles.ishovered} ${styles.cursor}`;
    }
    if (isHovered && hoverType === 'cta') {
      return `${styles.cursor} ${styles.bordered}`;
    }
    if (isHovered && hoverType === 'link') {
      return `${styles.cursor} ${styles.link}`;
    }
    if (isHovered && hoverType === 'button') {
      return `${styles.cursor} ${styles.button}`;
    }
    return `${styles.cursor}`;
  };

  useEffect(() => {
    setCursorStyle(handleHoverPointer());
    setCursor1Style(handleHover());
  }, [isHovered, hoverType]);
  return (
    <>
      <div className={cursorStyle} ref={cursorRef}></div>
      <div className={cursor1Style} ref={cursor1Ref}></div>
    </>
  );
}
