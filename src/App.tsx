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
    role: "Software Engineer • Full Stack",
    description: "Estudante de Sistemas de Informação na UFOP, focado em produtos web, APIs, automação e arquitetura pragmática.",
    imageUrl: "/eu2.jpg"
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white font-sans selection:bg-teal-500/30">
      <AnimatedBackground />
      
      <div className="fixed top-0 left-0 w-full h-24 md:h-36 bg-gradient-to-b from-[#080a0f] via-[#080a0f]/80 to-transparent z-40 pointer-events-none" />

      <PillNav />

      <Hero />

      <section id='aboutMe' className="relative z-10 flex flex-col items-center justify-center px-4 py-24 scroll-mt-32">
        <div className="w-full max-w-6xl px-4">
          <SplitProfileCard 
            name={profileData.name}
            role={profileData.role}
            imageUrl={profileData.imageUrl}
          />
        </div>
        <JourneyTimeline />
      </section>


      {/* Skills Section */}
      <section id="skills" className="relative z-10 pb-10 scroll-mt-32">
         <LogoLoop />
      </section>



      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-10 scroll-mt-32">
         <div className="container mx-auto px-6 mb-6 max-w-7xl">
            <p className="text-sm uppercase tracking-[0.28em] text-teal-300/80 mb-4">Trabalho aplicado</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Projetos selecionados para leitura rápida
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400 text-lg">
              Recorte com sete projetos que mostram produto, dashboard, extensões de navegador, mobile e análise de dados sem transformar a seção em uma lista longa demais.
            </p>
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
