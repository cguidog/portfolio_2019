import './App.css';
import Header from './components/Header'
import PortfolioScreen from './components/PortfolioScreen';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
        <Skills/>
        <PortfolioScreen/>
    </div>
  );
}

export default App;
