import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const SplitText = ({
  text,
  className = '',
  charClass = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef(null);
  const words = text.split(' ');

  useGSAP(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.split-char');
    
    gsap.fromTo(
      chars,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          if (onLetterAnimationComplete) onLetterAnimationComplete();
        }
      }
    );
  }, { scope: containerRef, dependencies: [text, delay, duration, ease] });

  const Tag = tag;

  return (
    <Tag ref={containerRef} className={`split-parent ${className}`} style={{ display: 'inline-block', textAlign: 'center' }}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="split-word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIdx) => (
            <span 
              key={charIdx} 
              className={`split-char ${charClass}`}
              style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            >
              {char}
            </span>
          ))}
          {/* Tambahkan spasi setelah setiap kata kecuali yang terakhir */}
          {wordIdx < words.length - 1 && (
            <span className={`split-char ${charClass}`} style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
};

