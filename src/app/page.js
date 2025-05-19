import Image from "next/image";
import './globals.css';
import Header from "./components/header"
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div className="layout-principal">
    <Header />
    <div className="layout-principal content">
    <Hero />
    <AboutSection />
    <Projetos />
    <Footer />

    </div>
    </div>
     
  );
}
