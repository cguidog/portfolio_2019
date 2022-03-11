import Details from "./Details";

const Projects = ({portfolio}) => {

    const professional_projects = [
        { title: 'Apply to Vet School', url: null, image: './images/vmsar.jpg', description: ['Online Veterinary School Catalog.', 'Headless Wordpress website built with <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a> and <a href="https://nextjs.org/" target="_blank" rel="noopener">NextJS</a>.', 'Uses <a href="https://www.wpgraphql.com/" target="_blank" rel="noopener">WPGraphQl</a> and <a href="https://www.apollographql.com/" target="_blank" rel="noopener">Apollo</a>.'] },
        { title: 'Kraemer & Kraemer', url: 'https://kraemerlaw.com', image: './images/kraemer_law.jpg', description: ['Website managed with WordPress.', 'SEO optimization.', 'Speed and Performance optimization.', 'Theme and Plugin customization using JavaScript and PHP.'] },
        { title: 'Panama retirees and Pensioners Visa', url: 'https://panamaretireespensionersvisa.com/', image: './images/prpv.jpg', description: ['Website managed with WordPress.', 'SEO optimization.', 'Speed and Performance optimization.', 'Theme and Plugin customization using JavaScript and PHP.'] },
        { title: 'Lácteos Don Joaquín', url: 'https://lacteosdonjoaquin.com/', image: './images/don_joaquin.jpg', description: ['Website managed with WordPress.', 'SEO optimization.', 'Speed and Performance optimization.'] }
    ];
    const personal_projects = [
        { title: 'Scales Buddy', url: 'https://scalesbuddy.com', image: './images/scales_buddy.jpg', description: ['Practice and learn the scales on the freboard.', 'Built with <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a>.'] },
        { title: 'Portfolio Site', url: 'https://www.iamguido.com', image: './images/portfolio.jpg', git: 'https://github.com/cguidog/portfolio_2019', description: ['The same website you are at right now.', 'Built with <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a>.', 'Uses Babel, Express, SVG & Webpack.'] },
        { title: 'RGB Color Guessing Game', url: 'https://cguidog.github.io/rgb-color-game/', image: '/images/rgb_game.jpg', git: 'https://github.com/cguidog/rgb-color-game', description: ['Test your RGB knowledge by picking the right color.', 'Built with Javascript.'] }
    ]
    return (
        <div className="project_display">
            { portfolio === 'professional' && professional_projects.map((project) => {
            return (
                <div key={professional_projects.indexOf(project)} className="project_container">
                    <div className="project_image_container">
                        {project.url ? <a href={project.url} target="_blank" rel="noopener"><img src={project.image} /></a> : <a><img src={project.image} /></a>}
                    </div>
                    <div className="project_info">
                        {project.url ? <a href={project.url} target="_blank" rel="noopener"><h2>{project.title}</h2></a> : <h2 style={{color: '#2ca1a1', cursor: 'not-allowed'}}>{project.title}</h2>}
                        <Details description={project.description} />
                    </div>
                </div>
            )
        })}
        { portfolio !== 'professional' && personal_projects.map((project) => {
            return (
                <div key={personal_projects.indexOf(project)} className="project_container">
                    <div className="project_image_container">
                        {project.url ? <a href={project.url} target="_blank" rel="noopener"><img src={project.image} /></a> : <a><img src={project.image} /></a>}
                    </div>
                    <div className="project_info">
                        {project.url ? <a href={project.url} target="_blank" rel="noopener"><h2>{project.title}</h2></a> : <a><h2>{project.title}</h2></a>}
                        <Details description={project.description} />
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Projects;