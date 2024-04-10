import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechSkills from "./components/TechSkills";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-4">
        <HeroSection />
        <AchievementSection />
        <hr className="mt-6 mb-3 border-t-4 border-blue-600 rounded-lg" />
        <About />
        <hr className="mt-6 mb-3 border-t-4 border-blue-600 rounded-lg" />
        <TechSkills />
        <hr className="mt-6 mb-3 border-t-4 border-blue-600 rounded-lg" />
        <ProjectSection />
        <hr className="mt-6 mb-3 border-t-4 border-blue-600 rounded-lg" />
        <EmailSection />
        <hr className="mt-6 mb-3 border-t-4 border-blue-600 rounded-lg" />
        <Footer />
      </div>
    </main>
  );
}
