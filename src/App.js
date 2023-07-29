import { useEffect } from "react";
import NAV_BAR from './components/NAV_BAR';
import './App.css';
import HeroSection from './components/HeroSection';
import HouseForSaleComponent from './components/HouseForSaleComponent';
import HouseForRentComponent from './components/HouseForRentComponent';
import FeaturedHouses from './components/FeaturedHouses'
import Footer from './components/Footer'
import AgentList from './components/AgentList'
import Properties_Area from './components/Properties_Area';
import MoveUp from "./components/MoveUp";
import { useSelector } from "react-redux";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "mapbox-gl/dist/mapbox-gl.css";
function App() {
  const users = useSelector((state) => state.users)
  const successLogin = () => {
    toast.success(`Welcome ${users.user}`,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  useEffect(() => {
    if(users.user) {
      successLogin()
    }
  },[])
  return (
    <div className="App h-{100%} w-screen m-0  bg-gray-100 dark:bg-gray-800 flex justify-center items-start flex-col" >
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <NAV_BAR />
      <HeroSection />
      <Properties_Area/>
        <HouseForSaleComponent />
      <HouseForRentComponent />
      <FeaturedHouses/>
      <AgentList />
      <Footer />
    <MoveUp/>
      </div>
  );
}

export default App;
