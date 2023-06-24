import { DataType } from '../pages/api/projects'
import Image from 'next/image'
import Loading from './Loading'
import Project from './Project'
import { ProjectInt } from '../resources/projects'
import { useEffect, useRef, useState } from 'react'


export default function Projects() {

  const targetRef = useRef(null);
  const [projects, setProjects] = useState<ProjectInt[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(true);
          const fetchProjects = async () => {
            const response = await fetch('api/projects');
            const data: DataType = await response.json();
            setProjects(data.projects);
            setLoading(false);
          }
          fetchProjects();
        }
      });
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
    <section className="p-4" ref={targetRef}>
      {loading ?
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl m-auto py-16 lg:py-8">
          <Loading />
          <Loading />
        </div> :
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl m-auto py-16 lg:py-8">
          {projects && projects.map((project, index) => {
            return <Project key={index} name={project.name} url={project.url} githubUrl={project.githubUrl} thumbnail={project.thumbnail} features={project.features} />
          })}
        </div>
      }
    </section>
  )
}