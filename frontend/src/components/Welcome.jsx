import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WelcomeAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    // Split the text into characters and wrap each in a span
    const characters = text.innerText.split('').map((char, index) => {
      return `<span key=${index} style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`;
    }).join('');
    text.innerHTML = characters;

    // Select all the character spans
    const charSpans = text.querySelectorAll('span');

    // GSAP animation for each character
    gsap.fromTo(
      charSpans,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'ease.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="text-center text-slate-400 text-4xl font-bold mt-10">
      <h1 ref={textRef}>Welcome to Headquarters, Beyler</h1>
    </div>
  );
};

export default WelcomeAnimation;
