import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="relative bg-my-ash px-4 font-ubuntu md:px-10 lg:px-20">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <FAQ />
        <Contact />
        <Footer />
        <Notification />
      </main>
    </>
  );
};

export default App;
