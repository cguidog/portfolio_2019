import Details from "./Details";

const Projects = () => {

    const projects = [
        { title: 'Scales Buddy', url: 'https://scalesbuddy.com', image: './images/scales_buddy.jpg', description: ['Practice and learn the scales on the freboard.', 'Built with React, NextJS, TypeScript and Tailwinds CSS.'] },
        { title: 'Ara: History Untold', url: 'https://arahistoryuntold.com', image: './images/ara.jpg', description: ['Website for the Ara: History Untold game.', 'Built with Wordpress, PHP and Sage.'] },
        { title: 'Apply to Vet Schoold', url: 'https://applytovetschool.org', image: './images/vet.jpg', description: ['Online Veterinary School Catalog.', 'Headless Wordpress website built with React and NextJS.', 'Uses GraphQl.', 'Explore the site by choosing "AAVMC Member" and typing "demo" in the name field.'] },
    ];

    return (
        <div className="project_display">
            { projects.map((project) => {
            return (
                <div key={projects.indexOf(project)} className="project_container">
                    <div className="project_image_container">
                        {project.url ? <a href={project.url} target="_blank" rel="noreferrer"><img alt={project.description[0]} src={project.image} /></a> : <img alt={project.description[0]}src={project.image} />}
                    </div>
                    <div className="project_info">
                        {project.url ? <a href={project.url} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a> : <h2 style={{color: '#2ca1a1', cursor: 'not-allowed'}}>{project.title}</h2>}
                        <Details description={project.description} />
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Projects;