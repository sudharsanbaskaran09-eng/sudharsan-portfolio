import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import MarqueeSection from './components/MarqueeSection';
import ContactSection from './components/ContactSection';

const App = () => {
return (
<main
className="relative w-full overflow-x-hidden bg-[#050816] text-white"
style={{
overflowX: 'clip',
}}
>
{/* Hero */} <HeroSection />

  {/* About */}
  <AboutSection />

  {/* Services */}
  <ServicesSection />

  {/* Moving Infrastructure Showcase */}
  <MarqueeSection />

  {/* Projects */}
  <ProjectsSection />

  {/* Contact */}
  <ContactSection />
</main>

);
};

export default App;
