import React from 'react';
import Projects from './Projects';

// *************************************** PORTFOLIO SCREEN ***************************************
export default class PortfolioScreen extends React.Component {
    constructor(props) {
        super(props);
        this.selectedPortfolio = this.selectedPortfolio.bind(this);
        // this.personalPortfolio = this.personalPortfolio.bind(this);
        this.state = {
            selected: 0,
            background: 'portfolio_professional',
            professional_class: 'professional_title_selected',
            personal_class: 'personal_title',
            title1: 'Professional Projects',
            title2: 'Personal Projects',
            projects: [[
                    {title: 'Kraemer & Kraemer', url: 'https://kraemerlaw.com', image: '/images/kraemer_law.jpg', description: ['Website managed with WordPress.', 'SEO optimization.', 'Speed and Performance optimization.', 'Theme and Plugin customization using JavaScript and PHP.']},
                    {title: 'Panama retirees and Pensioners Visa', url: 'https://panamaretireespensionersvisa.com/', image: '/images/prpv.jpg', description: ['Website managed with WordPress.', 'SEO optimization.', 'Speed and Performance optimization.', 'Theme and Plugin customization using JavaScript and PHP.']},
                    {title: 'Lácteos Don Joaquín', url: 'https://lacteosdonjoaquin.com/', image: '/images/don_joaquin.jpg', description: ['Website managed with WordPress.', 'SEO optimization.', 'Speed and Performance optimization.']}
                ],
                [
                    {title: 'Portfolio Site', url: 'https://iamguido.com', image: '/images/portfolio.png', git: 'https://github.com/cguidog/portfolio_2019', description: ['The same website you are at right now.', 'Built with ReactJS.', 'Uses Babel, Express & Webpack.']},
                    {title: 'React Car Search', url: 'https://react-car-search.herokuapp.com/', image: '/images/react_car_search.jpg', git: 'https://github.com/cguidog/carDisplay', description: ['Simple search tool created with React.','Built with ReactJS', 'Uses Babel, Express, Redux & Webpack.']},
                    {title: 'ToDo List', url: 'https://cguidog.github.io/to-do-list/index.html', image: '/images/to_do_list.jpg', git: 'https://github.com/cguidog/to-do-list', description: ['A simple to-do app.', 'Built with Jquery.']},
                    {title: 'Weather App', url: 'https://codepen.io/cguidog/full/LJPZry/', image: '/images/weather_app.jpg', git: 'https://github.com/cguidog/weather-app', description: ['Displays your local weather.', 'Built with Javascript.', 'Uses API, JSON.']},
                    {title: 'Wikipedia Viewer', url: 'https://cguidog.github.io/wikipediaViewer/', image: '/images/wiki_viewer.jpg', git: 'https://github.com/cguidog/wikipediaViewer', description: ['Display 5 main results from a Wikipedia Search.', 'Built with Jquery.', 'Uses API, JSON']},
                    {title: 'Circles', url: 'https://cguidog.github.io/circles/index.html', image: '/images/circles.jpg', git: 'https://github.com/cguidog/circles', description: ['Random circles generator. (Needs a physical keyboard to work)', 'Built with Javascript and the Paper.Js API.', 'Uses JSON.']},
                    {title: 'RGB Color Guessing Game', url: 'https://cguidog.github.io/rgb-color-game/', image: '/images/rgb_game.jpg', git: 'https://github.com/cguidog/rgb-color-game', description: ['Test your RGB knowledge by picking the right color.','Built with Javascript.']}
                ]
            ]
        };
    };

    selectedPortfolio () {
        if (this.state.selected === 0) {
            this.setState(() => ({selected: 1, background: 'portfolio_personal', professional_class: 'professional_title', personal_class: 'personal_title_selected', title1: 'Personal Projects', title2: 'Professional Projects'}));
        } else {
            this.setState(() => ({selected: 0, background: 'portfolio_professional', professional_class: 'professional_title_selected', personal_class: 'personal_title', title1: 'Professional Projects', title2: 'Personal Projects'}));
        };
    };

    render () {
        return (
            <div id='portfolio' className={this.state.background}>
                <div className="portfolio_title">
                    <div className={this.state.professional_class} onClick={this.selectedPortfolio}>
                        <h2>{this.state.title1}</h2>
                    </div>
                    <div className={this.state.personal_class} onClick={this.selectedPortfolio}>
                        <h2>{this.state.title2}</h2>
                    </div>
                </div>
                <div>
                <Projects selected={this.state.selected} professional={this.state.projects[0]} personal={this.state.projects[1]}/>
                </div>
            </div>
        );
    };
};