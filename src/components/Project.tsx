import { ProjectInt } from "@/resources/projects"
import { useState, useEffect, useRef } from "react";

export default function Project(props: ProjectInt) {
  const { name, url, githubUrl, thumbnail, features } = props;

  const targetRef = useRef(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, {
      threshold: 0.5,
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, []);
  return (
    <div className="overflow-hidden" ref={targetRef}>
      <div className={`${visible ? 'opacity-1' : 'opacity-0'} top-0 group bg-gradient-to-r from-sky-700 to-sky-900 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.75)] flex flex-col gap-4 h-full p-4 rounded-lg transition-all ease-out duration-300`}>
        {thumbnail && <div className="overflow-hidden rounded-lg drop-shadow-[0px_0px_2px_rgba(0,0,0,0.75)]">
          <img className="scale-100 group-hover:scale-105 transition-all ease-out duration-1000" src={thumbnail} />
        </div>}
        <div className="flex flex-col justify-between gap-4">
          <div className="flex justify-between">
            {name && url && <a href={url} target="_blank" className="text-text-white hover:underline"><h2 className="font-bold text-3xl md:text-4xl">{name}</h2></a>}
            {githubUrl && name && <a href={githubUrl} aria-label={`${name} Github repository`} target="_blank" className="group/git text-text-white"><svg className="fill-slate-50 scale-100 group-hover/git:scale-110 transition-all ease-out duration-300" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" /></svg></a>}
          </div>
          {features &&
            <ul className="pl-4">
              {features.map(feature => <li key={features.indexOf(feature)} className="text-text-white list-disc">{feature}</li>)}
            </ul>}
        </div>
      </div>
    </div>
  )
}