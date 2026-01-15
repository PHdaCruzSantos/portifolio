import AnimatedBackground from './components/ui/AnimatedBackground';
import Hero from './components/ui/Hero';
import PillNav from './components/layout/PillNav';
import SplitProfileCard from './components/ui/SplitProfileCard';
import LogoLoop from './components/ui/LogoLoop';
import JourneyTimeline from './components/ui/JourneyTimeline';
import ProjectShowcase from './components/ui/ProjectShowcase';
import CertificatesCarousel from './components/ui/CertificatesCarousel';
import ContactMe from './components/ui/ContactMe';

function App() {
  const profileData = {
    name: "Pedro Henrique da Cruz Santos",
    role: "Desenvolvedor Full Stack Júnior",
    description: "Estudante de Sistemas de Informação na UFOP. Apaixonado por criar experiências web modernas com React, Vue.js e Node.js. Buscando oportunidades para transformar código em soluções reais.",
    imageUrl: "/eu2.jpg"
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white font-sans selection:bg-purple-500/30">
      <AnimatedBackground />
      
      {/* Global Top Fade Gradient */}
      <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-40 pointer-events-none" />

      <PillNav />

      <Hero />

      <section id='aboutMe' className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 scroll-mt-32">
        <div className="mt-20 w-full max-w-5xl px-4"> {/* Offset for PillNav */}
          <SplitProfileCard 
            name={profileData.name}
            role={profileData.role}
            imageUrl={profileData.imageUrl}
          />
        </div>
        {/* Timeline Section */}
        <JourneyTimeline />
      </section>


      {/* Skills Section */}
      <section id="skills" className="relative z-10 pb-10 scroll-mt-32">
         <LogoLoop />
      </section>



      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-10 scroll-mt-32">
         <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Projetos Selecionados
            </h2>
         </div>
         <ProjectShowcase />
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative z-10 pb-20 scroll-mt-32">
         <CertificatesCarousel />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 scroll-mt-32">
         <ContactMe />
      </section>

    </main>
  );
}

export default App;
