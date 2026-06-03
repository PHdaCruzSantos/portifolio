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
    role: "Desenvolvedor Full Stack",
    description: "Estudante de Sistemas de Informação na UFOP, focado em produtos web, APIs, automação e arquitetura pragmática.",
    imageUrl: "/eu2.jpg"
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[var(--cv-paper)] text-[var(--cv-ink)] font-sans selection:bg-[var(--cv-accent)]/20">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-24 bg-gradient-to-b from-[var(--cv-paper)] via-[var(--cv-paper)]/90 to-transparent" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] cv-grid" />

      <PillNav />
      <Hero />

      <section id='aboutMe' className="relative z-10 flex flex-col items-center justify-center px-5 py-20 scroll-mt-32 sm:px-8">
        <div className="w-full max-w-7xl">
          <SplitProfileCard 
            name={profileData.name}
            role={profileData.role}
            imageUrl={profileData.imageUrl}
          />
        </div>
        <JourneyTimeline />
      </section>

      <section id="skills" className="relative z-10 pb-10 scroll-mt-32">
         <LogoLoop />
      </section>

      <section id="projects" className="relative z-10 py-16 scroll-mt-32">
         <div className="container mx-auto px-6 mb-8 max-w-7xl">
            <p className="cv-kicker">Trabalho aplicado</p>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.85] tracking-[-0.075em] text-[var(--cv-accent)] md:text-7xl">
              Projetos selecionados para leitura rápida
            </h2>
            <p className="mt-6 max-w-3xl border-t border-[var(--cv-ink)]/25 pt-5 text-base leading-snug text-[var(--cv-muted)] md:text-lg">
              Recorte com sete projetos que mostram produto, dashboard, extensões de navegador, mobile e análise de dados sem transformar a seção em uma lista longa demais.
            </p>
         </div>
         <ProjectShowcase />
      </section>

      <section id="certificates" className="relative z-10 pb-20 scroll-mt-32">
         <CertificatesCarousel />
      </section>

      <section id="contact" className="relative z-10 scroll-mt-32">
         <ContactMe />
      </section>
    </main>
  );
}

export default App;
