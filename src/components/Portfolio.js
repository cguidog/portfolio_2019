import React from 'react';
import Contact from './Contact';
import PortfolioScreen from './PortfolioScreen';
import Skills from './Skills';
import Menu from './Menu';
import Welcome from './Welcome';

export default class Portfolio extends React.Component {
    

    render() {
        return (
            <div>
                <Menu />
                <Welcome />
                <Skills />
                <PortfolioScreen />
            </div>
        );
    };
};

