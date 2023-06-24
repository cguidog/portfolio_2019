import { useEffect, useRef, useState } from 'react'

export interface BioBlockInt {
  styles: string;
  text: string;
}

export default function BioBlock( {styles, text}: BioBlockInt) {

  const targetRef = useRef(null);
  const [shadow, setShadow] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShadow(true);
        }
      });
    }, {
      threshold: 0.85,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, []);
  return (
        <div className={` ${shadow ? 'blur-none' : 'blur-lg' } ${styles}`} ref={targetRef}>
          <p>
            {text}
          </p>
        </div>
  )
}