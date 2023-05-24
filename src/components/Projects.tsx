import { DataType } from '../pages/api/projects'
import Image from 'next/image'
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
    <div className='gap-4 grid grid-cols-2 p-4 max-w-7xl m-auto' ref={targetRef}>
      Hello from the Projects
      {loading && 'Loading'}
      {projects && projects.map((project, index) => {
        return <Project key={index} name={project.name} url={project.url} githubUrl={project.githubUrl} thumbnail={project.thumbnail} features={project.features} />
      })}
    </div>
  )
}