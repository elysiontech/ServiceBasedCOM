import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Founders from "./components/Founders";
import Work from "./components/Work";
import Engagement from "./components/Engagement";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Founders />
        <Work />
        <Engagement />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
