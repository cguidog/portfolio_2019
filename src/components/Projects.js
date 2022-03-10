import React from 'react';
import Details from './Details';

const Projects = (props) => {
    if (props.selected === 0) {
        return (
            <div className="project_display">{props.professional.map((project)=>{
                return (
                    <div key={props.professional.indexOf(project)} className="project_container">
                        <div className="project_image_container">
                            {project.url ? <a href={project.url} target="_blank" rel="noopener"><img src={project.image}/></a> : <a><img src={project.image}/></a>}
                        </div>
                        <div className="project_info">
                            {project.url ? <a href={project.url} target="_blank" rel="noopener"><h2>{project.title}</h2></a> : <a><h2>{project.title}</h2></a>} 
                            <Details description={project.description}/>
                        </div>
                    </div>
                )
            })}</div>
        );
    } else if (props.selected === 1) {
        return (
            <div className="project_display">{props.personal.map((project)=> {
                return (
                    <div key={props.personal.indexOf(project)} className="project_container">
                        <div className="project_image_container">
                            <a href={project.url} target="_blank" rel="noopener"><img src={project.image}/></a>
                        </div>
                        <div className="project_info">
                            <div className="project_info_header">
                                <div>
                                    <a href={project.url} target="_blank" rel="noopener"><h2>{project.title}</h2></a>
                                </div>
                                <div>
                                    <a href={project.git} target="_blank" rel="noopener"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                            <Details description={project.description}/>
                        </div>
                    </div>
                )
            })}</div>
        )
    };
};

export default Projects;