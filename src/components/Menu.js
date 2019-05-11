import React from 'react';

// *************************************** NAVIGATION MENU ***************************************
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            activeclass: 'hidden',
            plusclass: 'plus',
            menuclass: 'menu_hidden'
        };
    };

    showMenu () {
        if (this.state.activeclass == 'show') {
            this.setState(() => ({activeclass: 'hidden', plusclass: 'plus_closed', menuclass:'menu_hidden'}));
        } else {
            this.setState(() => ({activeclass: 'show', plusclass: 'plus_active', menuclass:'menu_visible'}));
        };

    };
render () {
    return (
        <div>
        <svg className="circle" width="611px" onClick={this.showMenu} height="883px" viewBox="0 0 611 883" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path id='menu' className={this.state.activeclass} d="M611,473 L611,708 C611,804.649831 532.649831,883 436,883 L269,883 L60,883 C26.862915,883 1.11635499e-14,856.137085 7.10542736e-15,823 L1.08387875e-15,473 L-1.42108547e-14,60 C-1.82689772e-14,26.862915 26.862915,6.08718376e-15 60,0 L551,0 C584.137085,-6.08718376e-15 611,26.862915 611,60 L611,473 Z" id="Combined-Shape" fill="#FF531B"></path>
                <circle id="Oval" fill="#FF531B" cx="436" cy="708" r="175"></circle>
                <path className={this.state.plusclass} onClick={this.showMenu} d="M486,658.5 L561.5,658.5 L561.5,758.5 L486,758.5 L486,834 L386,834 L386,758.5 L310.5,758.5 L310.5,658.5 L386,658.5 L386,583 L486,583 L486,658.5 Z" id="Combined-Shape" fill="#080815"></path>
                <g className={this.state.menuclass}>
                <text id="HOME" fontSize="94" fontWeight="normal" fill="#080815">
                <a xlinkHref="/#home">
                <tspan x="205.181641" y="140">Home</tspan>
                </a>
                </text>
                <text id="ABOUT" fontSize="94" fontWeight="normal" fill="#080815">
                <a xlinkHref="/#about">
                <tspan x="176.977051" y="270">About</tspan>
                </a>
                </text>
                <text id="PORTFOLIO" fontSize="94" fontWeight="normal" fill="#080815">
                <a xlinkHref="/#portfolio">
                <tspan x="64.1586914" y="400">Portfolio</tspan>
                </a>
                </text>
                <text id="CONTACT" fontSize="94" fontWeight="normal" fill="#080815">
                <a xlinkHref="/#contact">
                <tspan x="120.567871" y="530">Contact</tspan>
                </a>
                </text>
                </g>
            </g>
        </svg>  
    </div>
    );
};
};