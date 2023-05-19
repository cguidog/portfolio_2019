import { useState } from "react";
import Projects from "./Projects";
const PortfolioScreen = () => {
    return (
        <div>
            <div class='portfolio' id='portfolio'>
                <div className="portfolio_title">
                    <div>
                        <h2 className="projects_title">Projects</h2>
                    </div>
                </div>
                <div>
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default PortfolioScreen;