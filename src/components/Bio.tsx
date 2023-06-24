import { useEffect, useRef, useState } from 'react'
import BioBlock, { BioBlockInt } from './BioBlock';

export default function Bio() {

  const targetRef = useRef(null);
  const [shadow, setShadow] = useState<boolean>(false);

  const blocks: BioBlockInt[] = [
    {text: 'I am a full-stack software developer who loves to create. From building furniture to designing clothes, from tiling kitchens to writing code.',
    styles: 'col-span-1 p-4 text-3xl md:text-4xl text-text-white transition-all ease-out duration-500'},
    {text: 'I build beautiful websites and web applications with a focus on user experience, SEO, and accessibility. Make sure to checkout the Projects section to learn a little bit more about my work.',
    styles: 'col-start-2 p-4 row-start-2 row-span-1 text-3xl md:text-4xl text-text-white transition-all ease-out duration-300'},];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      });
    }, {
      threshold: 0.95,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <section className="w-full relative">
      <div className="absolute left-0 h-[80%] w-full z-[-1]">
        <div className="absolute left-0 top-12 animate-appear_2 h-[50%] w-full bg-sky-700 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.75)] skew-y-3 z-0"></div>
        <div className="absolute left-0 top-12 animate-appear h-[50%] w-full bg-sky-900 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.75)] -skew-y-3 z-10"></div>
      </div>
      <div className="bg-sky-900 w-full z-20" ref={targetRef}>
        <div className="md:grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-full md:max-w-7xl m-auto py-16">
        {blocks && blocks.map((block) => <BioBlock key={blocks.indexOf(block)} styles={block.styles} text={block.text} />)}
        </div>
      </div>
    </section>
  )
}