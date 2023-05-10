import './App.css';
import NAV_BAR from './components/NAV_BAR';
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices'
import HouseForSaleComponent from './components/HouseForSaleComponent';
import HouseForRentComponent from './components/HouseForRentComponent';
import FeaturedHouses from './components/FeaturedHouses'
import Footer from './components/Footer'
import AgentList from './components/AgentList'
import Properties_Area from './components/Properties_Area';

function App() {
  return (
    <div className="App h-{100%} w-screen m-0  bg-gray-100 dark:bg-gray-800 flex justify-center items-start flex-col" >
      <NAV_BAR />
      <HeroSection />
      <Properties_Area/>
      <OurServices />
        <HouseForSaleComponent />
      <HouseForRentComponent />
      <FeaturedHouses/>
      <AgentList />
      <Footer/>
      </div>
  );
}

export default App;
