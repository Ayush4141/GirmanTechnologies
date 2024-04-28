import MainComponent from "./components/MainComponent/MainComponent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
      <div className="h-screen ">
        <Navbar/>
        <MainComponent />
        <Footer/>
      </div>
  );
}
