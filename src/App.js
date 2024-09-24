// import logo from './logo.svg';
import Hero from './Components/Hero/Hero';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import AboutSection from './Components/AboutSection/AboutSection';
import Spacer from './Components/Spacer/Spacer';
import JoinSection from './Components/JoinSection/JoinSection';
import TrainSection from './Components/TrainSection/TrainSection';
import Footer from './Components/Footer/Footer';
import BuySection from './Components/BuySection/BuySection'


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <AboutSection />
      <Spacer />
      <JoinSection  />
      <BuySection />
      <Spacer />
      <TrainSection />
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
