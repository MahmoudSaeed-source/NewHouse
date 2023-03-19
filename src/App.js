import './App.css';
import NAV_BAR from './components/NAV_BAR';
import HeroSection from './components/HeroSection';
import WHO_WE_ARE from './components/WHO_WE_ARE'
import HouseForSaleComponent from './components/HouseForSaleComponent';
import HouseForRentComponent from './components/HouseForRentComponent';
import Footer from './components/Footer'
import AgentList from './components/AgentList'
function App() {
  return (
    <div className="App h-{100%} w-screen m-0  bg-gray-200 dark:bg-black flex justify-center items-start flex-col" >
      <NAV_BAR />
        <HeroSection />
        <WHO_WE_ARE />
        <HouseForSaleComponent />
      <HouseForRentComponent />
      <AgentList/>
      <Footer/>
      </div>
  );
}

export default App;
