import './App.css';

import NAV_BAR from './components/NAV_BAR';
import HeroSection from './components/HeroSection';
import WHO_WE_ARE from './components/WHO_WE_ARE'
import HouseForSaleCompoent from './components/HouseForSaleCompoent';
function App() {
 

  return (
    <div className="App h-{100%} w-screen m-0 dark:bg-black flex justify-center items-start flex-col" >
      <NAV_BAR />
      
        <HeroSection />
        <WHO_WE_ARE />
        <HouseForSaleCompoent />
  
  
      </div>
    
 
  );
}

export default App;
