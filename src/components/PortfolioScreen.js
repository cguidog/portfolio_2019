import { useState } from "react";
import Projects from "./Projects";

const PortfolioScreen = () => {
    const [portfolio, setPortfolio] = useState('professional');

    const handlePortfolio = () => {
        if (portfolio === 'professional') {
            setPortfolio('personal');
        } else {
            setPortfolio('professional');
        }
    }
    return (
        <div>
            <div id='portfolio' className={portfolio === 'professional' ? 'portfolio_professional' : 'portfolio_personal'}>
                <div className="portfolio_title">
                    <div className={portfolio === 'professional' ? 'professional_title_selected' : 'professional_title'} onClick={handlePortfolio}>
                        <h2 id="title_label" >{portfolio === 'professional' ? 'Professional Projects' : 'Personal Projects'}</h2>
                    </div>
                    <div className={portfolio === 'professional' ? 'personal_title' : 'personal_title_selected'} onClick={handlePortfolio}>
                        <h2 id="title_label" >{portfolio === 'professional' ? 'Personal Projects' : 'Professional Projects'}</h2>
                    </div>
                </div>
                <div>
                <Projects portfolio={portfolio}/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioScreen;