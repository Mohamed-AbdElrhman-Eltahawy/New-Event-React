import AboutUs from "./components/AboutUs/AboutUs";
import CreativeSpeakersComponent from "./components/CreativeSpeakers/CreativeSpeakers";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms/OurPrograms";
import Overview from "./components/Overview/Overview";
import WatchVideo from "./components/WatchVideo/WatchVideo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Overview />
      <WatchVideo />
      <CreativeSpeakersComponent />
      <OurPrograms />
    </>
  );
}
