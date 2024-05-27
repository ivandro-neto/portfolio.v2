import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

interface ICursorProps {
  isHovered: boolean;
  hoverType: string;
}

export default function Cursor({ isHovered, hoverType }: ICursorProps) {
  const [cursorStyle, setCursorStyle] = useState('');
  const [cursor1Style, setCursor1Style] = useState('');
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursor1Ref = useRef<HTMLDivElement | null>(null);

  function calculateLuminance(color: string) {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const [r, g, b] = rgb.map(component => {
        const c = parseInt(component) / 255; // Normalize component values
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b; // Calculate luminance
    } else {
      console.log("No color found.")
      return 0;
    }
  }
  

  // Function to determine whether to use black or white text based on background color brightness
  function getContrastColor(color: string) {
    const luminance = calculateLuminance(color);
    return luminance > 0.5 ? 'black' : 'white';
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!cursorRef.current || !cursor1Ref.current) return;

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

    const hoveredElement = document.elementFromPoint(x, y);

    if (hoveredElement) {
      // Extract the color of the hovered element's text and background
      const computedStyle = window.getComputedStyle(hoveredElement);
      const textColor = computedStyle.getPropertyValue('color');
      const bgColor = computedStyle.getPropertyValue('background-color');

      // Set text and background color states
      setTextColor(getContrastColor(textColor));
      setBgColor(getContrastColor(bgColor));
    }

    // Set positions for follower cursors with a slight delay
    setTimeout(() => {
      if (cursor1Ref.current) {
        cursor1Ref.current.style.left = x + "px";
        cursor1Ref.current.style.top = y + "px";
      }
    }, 50); // Adjust the delay as needed
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setCursorStyle(handleHoverPointer());
    setCursor1Style(handleHover());
  }, [isHovered, hoverType, textColor, bgColor]); // Add textColor and bgColor to the dependency array

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
      if (bgColor === 'black') {
        return `${styles.cursor} ${styles.link} ${styles.dark}`;
      }
      return `${styles.cursor} ${styles.link}`;
    }
    if (isHovered && hoverType === 'button') {
      if (bgColor === 'black') {
        return `${styles.cursor} ${styles.button} ${styles.dark}`;
      }
      return `${styles.cursor} ${styles.button}`;
    }
    return `${styles.cursor}`;
  };

  return (
    <>
      <div className={cursorStyle} ref={cursorRef}></div>
      <div className={cursor1Style} ref={cursor1Ref}></div>
    </>
  );
}
