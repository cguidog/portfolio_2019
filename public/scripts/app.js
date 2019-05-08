"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio() {
        _classCallCheck(this, Portfolio);

        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
    }

    _createClass(Portfolio, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Menu, null),
                React.createElement(Welcome, null),
                React.createElement(Skills, null),
                React.createElement(PortfolioScreen, null),
                React.createElement(Contact, null)
            );
        }
    }]);

    return Portfolio;
}(React.Component);

;

var Welcome = function (_React$Component2) {
    _inherits(Welcome, _React$Component2);

    function Welcome() {
        _classCallCheck(this, Welcome);

        return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
    }

    _createClass(Welcome, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "home", className: "welcome_div" },
                React.createElement(
                    "div",
                    { className: "title" },
                    React.createElement(
                        "h1",
                        null,
                        " <CarlosGuido /> "
                    ),
                    React.createElement(
                        "h2",
                        null,
                        "web_developer",
                        React.createElement(
                            "span",
                            null,
                            React.createElement("div", null)
                        )
                    )
                )
            );
        }
    }]);

    return Welcome;
}(React.Component);

;

// *************************************** NAVIGATION MENU ***************************************

var Menu = function (_React$Component3) {
    _inherits(Menu, _React$Component3);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this3 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this3.showMenu = _this3.showMenu.bind(_this3);
        _this3.state = {
            activeclass: 'hidden',
            plusclass: 'plus',
            menuclass: 'menu_hidden'
        };
        return _this3;
    }

    _createClass(Menu, [{
        key: "showMenu",
        value: function showMenu() {
            if (this.state.activeclass == 'show') {
                this.setState(function () {
                    return { activeclass: 'hidden', plusclass: 'plus_closed', menuclass: 'menu_hidden' };
                });
            } else {
                this.setState(function () {
                    return { activeclass: 'show', plusclass: 'plus_active', menuclass: 'menu_visible' };
                });
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _React$createElement;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "svg",
                    { className: "circle", width: "611px", onClick: this.showMenu, height: "883px", viewBox: "0 0 611 883", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement(
                        "g",
                        { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        React.createElement("path", (_React$createElement = { id: "menu", className: this.state.activeclass, d: "M611,473 L611,708 C611,804.649831 532.649831,883 436,883 L269,883 L60,883 C26.862915,883 1.11635499e-14,856.137085 7.10542736e-15,823 L1.08387875e-15,473 L-1.42108547e-14,60 C-1.82689772e-14,26.862915 26.862915,6.08718376e-15 60,0 L551,0 C584.137085,-6.08718376e-15 611,26.862915 611,60 L611,473 Z" }, _defineProperty(_React$createElement, "id", "Combined-Shape"), _defineProperty(_React$createElement, "fill", "#FF531B"), _React$createElement)),
                        React.createElement("circle", { id: "Oval", fill: "#FF531B", cx: "436", cy: "708", r: "175" }),
                        React.createElement("path", { className: this.state.plusclass, onClick: this.showMenu, d: "M486,658.5 L561.5,658.5 L561.5,758.5 L486,758.5 L486,834 L386,834 L386,758.5 L310.5,758.5 L310.5,658.5 L386,658.5 L386,583 L486,583 L486,658.5 Z", id: "Combined-Shape", fill: "#080815" }),
                        React.createElement(
                            "g",
                            { className: this.state.menuclass },
                            React.createElement(
                                "text",
                                { id: "HOME", fontSize: "94", fontWeight: "normal", fill: "#080815" },
                                React.createElement(
                                    "a",
                                    { href: "#home" },
                                    React.createElement(
                                        "tspan",
                                        { xlink: "https:www.google.com", x: "205.181641", y: "140" },
                                        "Home"
                                    )
                                )
                            ),
                            React.createElement(
                                "text",
                                { id: "ABOUT", fontSize: "94", fontWeight: "normal", fill: "#080815" },
                                React.createElement(
                                    "a",
                                    { href: "#about" },
                                    React.createElement(
                                        "tspan",
                                        { x: "176.977051", y: "270" },
                                        "About"
                                    )
                                )
                            ),
                            React.createElement(
                                "text",
                                { xlinkHref: "#portfolio", id: "PORTFOLIO", fontSize: "94", fontWeight: "normal", fill: "#080815" },
                                React.createElement(
                                    "a",
                                    { href: "#portfolio" },
                                    React.createElement(
                                        "tspan",
                                        { x: "64.1586914", y: "400" },
                                        "Portfolio"
                                    )
                                )
                            ),
                            React.createElement(
                                "text",
                                { id: "CONTACT", fontSize: "94", fontWeight: "normal", fill: "#080815" },
                                React.createElement(
                                    "a",
                                    { href: "#contact" },
                                    React.createElement(
                                        "tspan",
                                        { x: "120.567871", y: "530" },
                                        "Contact"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Menu;
}(React.Component);

;

// *************************************** SKILLS SCREEN ***************************************

var Skills = function (_React$Component4) {
    _inherits(Skills, _React$Component4);

    function Skills() {
        _classCallCheck(this, Skills);

        return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
    }

    _createClass(Skills, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "about", className: "about" },
                React.createElement(
                    "div",
                    { className: "trim_top animated bounceInRight delay-2s" },
                    React.createElement("div", { className: "trim_block" }),
                    React.createElement("div", { className: "trim_block" }),
                    React.createElement("div", { className: "trim_block" }),
                    React.createElement("div", { className: "trim_white" })
                ),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement("div", { className: "star" }),
                React.createElement(
                    "div",
                    { className: "description animated bounceInLeft delay-2s" },
                    "I am a self-taught web developer who loves to create: from building furniture to designing clothes, from tiling kitchens to writing code.   "
                ),
                React.createElement(
                    "div",
                    { className: "skills animated bounceInRight delay-2s" },
                    "I build responsive web applications using HTML, CSS, JavaScript and PHP. I have also had the opportunity to work with JavaScript libraries like Jquery and React, Node run-time environment, Mongo and MySQL databases and Wordpress."
                ),
                React.createElement(
                    "div",
                    { className: "trim_bottom animated bounceInLeft delay-2s" },
                    React.createElement("div", { className: "trim_white" }),
                    React.createElement("div", { className: "trim_block" }),
                    React.createElement("div", { className: "trim_block" }),
                    React.createElement("div", { className: "trim_block" })
                )
            );
        }
    }]);

    return Skills;
}(React.Component);

;

// *************************************** PORTFOLIO SCREEN ***************************************

var PortfolioScreen = function (_React$Component5) {
    _inherits(PortfolioScreen, _React$Component5);

    function PortfolioScreen(props) {
        _classCallCheck(this, PortfolioScreen);

        var _this5 = _possibleConstructorReturn(this, (PortfolioScreen.__proto__ || Object.getPrototypeOf(PortfolioScreen)).call(this, props));

        _this5.selectedPortfolio = _this5.selectedPortfolio.bind(_this5);
        // this.personalPortfolio = this.personalPortfolio.bind(this);
        _this5.state = {
            selected: 0,
            background: 'portfolio_professional',
            professional_class: 'professional_title_selected',
            personal_class: 'personal_title',
            title1: 'Professional Projects',
            title2: 'Personal Projects',
            projects: [[{ title: 'Kraemer & Kraemer', url: 'https://kraemerlaw.com', image: '../resources/assets/kraemer_law.jpg', description: ['Website managed with WordPress.', 'SEO optimization', 'Speed and Performance optimization', 'Theme and Plugin customization using JavaScript and PHP'] }, { title: 'Panama retirees and Pensioners Visa', url: 'https://panamaretireespensionersvisa.com/', image: '../resources/assets/prpv.jpg', description: ['Website managed with WordPress.', 'SEO optimization', 'Speed and Performance optimization', 'Theme and Plugin customization using JavaScript and PHP'] }, { title: 'Lácteos Don Joaquín', url: 'https://lacteosdonjoaquin.com/', image: '../resources/assets/don_joaquin.jpg', description: ['Website managed with WordPress.', 'SEO optimization', 'Speed and Performance optimization'] }], [{ title: 'Circles', url: 'https://cguidog.github.io/circles/index.html', image: '../resources/assets/circles.jpg', git: 'https://github.com/cguidog/circles', description: ['Random circles generator built with Paper.js (Needs a physical keyboard to work)'] }, { title: 'React Car Search', url: 'https://react-car-search.herokuapp.com/', image: '../resources/assets/react_car_search.jpg', git: 'https://github.com/cguidog/carDisplay', description: ['Simple search tool created with React.'] }, { title: 'RGB Color Guessing Game', url: 'https://cguidog.github.io/rgb-color-game/', image: '../resources/assets/rgb_game.jpg', git: 'https://github.com/cguidog/rgb-color-game', description: ['Test your RGB knowledge picking the right color.'] }, { title: 'ToDo List', url: 'https://cguidog.github.io/to-do-list/index.html', image: '../resources/assets/to_do_list.jpg', git: 'https://github.com/cguidog/to-do-list', description: ['A simple to-do app created with Jquery.'] }, { title: 'Weather App', url: 'https://codepen.io/cguidog/full/LJPZry/', image: '../resources/assets/weather_app.jpg', git: 'https://github.com/cguidog/weather-app', description: ['App created with Javascript to show local weather.'] }, { title: 'Wikipedia Viewer', url: 'https://cguidog.github.io/wikipediaViewer/', image: '../resources/assets/wiki_viewer.jpg', git: 'https://github.com/cguidog/wikipediaViewer', description: ['Display 5 main results from a Wikipedia Search.'] }]]
        };
        return _this5;
    }

    _createClass(PortfolioScreen, [{
        key: "selectedPortfolio",
        value: function selectedPortfolio() {
            if (this.state.selected === 0) {
                this.setState(function () {
                    return { selected: 1, background: 'portfolio_personal', professional_class: 'professional_title', personal_class: 'personal_title_selected', title1: 'Personal Projects', title2: 'Professional Projects' };
                });
            } else {
                this.setState(function () {
                    return { selected: 0, background: 'portfolio_professional', professional_class: 'professional_title_selected', personal_class: 'personal_title', title1: 'Professional Projects', title2: 'Personal Projects' };
                });
            };
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "portfolio", className: this.state.background },
                React.createElement(
                    "div",
                    { className: "portfolio_title" },
                    React.createElement(
                        "div",
                        { className: this.state.professional_class, onClick: this.selectedPortfolio },
                        React.createElement(
                            "h2",
                            null,
                            this.state.title1
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: this.state.personal_class, onClick: this.selectedPortfolio },
                        React.createElement(
                            "h2",
                            null,
                            this.state.title2
                        )
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(Projects, { selected: this.state.selected, professional: this.state.projects[0], personal: this.state.projects[1] })
                )
            );
        }
    }]);

    return PortfolioScreen;
}(React.Component);

;

var Projects = function Projects(props) {
    if (props.selected === 0) {
        return React.createElement(
            "div",
            { className: "project_display" },
            props.professional.map(function (project) {
                return React.createElement(
                    "div",
                    { key: props.professional.indexOf(project), className: "project_container" },
                    React.createElement(
                        "div",
                        { className: "project_image_container" },
                        React.createElement(
                            "a",
                            { href: project.url, target: "_blank" },
                            React.createElement("img", { src: project.image })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "project_info" },
                        React.createElement(
                            "a",
                            { href: project.url, target: "_blank" },
                            React.createElement(
                                "h2",
                                null,
                                project.title
                            )
                        ),
                        React.createElement(Details, { description: project.description })
                    )
                );
            })
        );
    } else if (props.selected === 1) {
        return React.createElement(
            "div",
            { className: "project_display" },
            props.personal.map(function (project) {
                return React.createElement(
                    "div",
                    { key: props.personal.indexOf(project), className: "project_container" },
                    React.createElement(
                        "div",
                        { className: "project_image_container" },
                        React.createElement(
                            "a",
                            { href: project.url, target: "_blank" },
                            React.createElement("img", { src: project.image })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "project_info" },
                        React.createElement(
                            "div",
                            { className: "project_info_header" },
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "a",
                                    { href: project.url, target: "_blank" },
                                    React.createElement(
                                        "h2",
                                        null,
                                        project.title
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "a",
                                    { href: project.git, target: "_blank" },
                                    React.createElement("i", { className: "fab fa-github" })
                                )
                            )
                        ),
                        React.createElement(Details, { description: project.description })
                    )
                );
            })
        );
    };
};

var Details = function Details(props) {
    return React.createElement(
        "ul",
        null,
        props.description.map(function (descript) {
            return React.createElement(
                "li",
                { key: props.description.indexOf(descript) },
                descript
            );
        })
    );
};

var Contact = function Contact() {
    return React.createElement(
        "div",
        { id: "contact" },
        React.createElement(
            "div",
            { className: "contact_container" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    { href: "https://github.com/cguidog", target: "_blank" },
                    React.createElement("i", { className: "fab fa-github" })
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "a",
                    null,
                    React.createElement("i", { className: "fab fa-linkedin-in" })
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(Portfolio, null), document.getElementById('app'));
