import { motion } from 'framer-motion';

// Import all logos - In a real app we might automate this or use a CDN
// For now, mapping known files from the directory listing
import angularImg from '../../assets/techicons/AngularJS.png';
import cssImg from '../../assets/techicons/CSS3.png';
import dockerImg from '../../assets/techicons/Docker.png';
import figmaImg from '../../assets/techicons/Figma.png';
import flutterImg from '../../assets/techicons/Flutter.png';
import gitImg from '../../assets/techicons/Git.png';
import htmlImg from '../../assets/techicons/HTML5.png';
import javaImg from '../../assets/techicons/Java.png';
import jsImg from '../../assets/techicons/JavaScript.png';
import linuxImg from '../../assets/techicons/Linux.png';
import muiImg from '../../assets/techicons/Material UI.png';
import nextImg from '../../assets/techicons/Next.js.png';
import pgImg from '../../assets/techicons/PostgresSQL.png';
import pythonImg from '../../assets/techicons/Python.png';
import rabbitImg from '../../assets/techicons/RabbitMQ.png';
import reactImg from '../../assets/techicons/React.png';
import swaggerImg from '../../assets/techicons/Swagger.png';
import tailwindImg from '../../assets/techicons/Tailwind CSS.png';
import tsImg from '../../assets/techicons/TypeScript.png';
import viteImg from '../../assets/techicons/Vite.js.png';
import vueImg from '../../assets/techicons/Vue.js.png';

const logos = [
  { name: 'Angular', src: angularImg, role: 'Frontend Framework' },
  { name: 'CSS3', src: cssImg, role: 'Styling Language' },
  { name: 'Docker', src: dockerImg, role: 'Containerization' },
  { name: 'Figma', src: figmaImg, role: 'Design Tool' },
  { name: 'Flutter', src: flutterImg, role: 'Mobile Framework' },
  { name: 'Git', src: gitImg, role: 'Version Control' },
  { name: 'HTML5', src: htmlImg, role: 'Markup Language' },
  { name: 'Java', src: javaImg, role: 'Backend Language' },
  { name: 'JavaScript', src: jsImg, role: 'Scripting Language' },
  { name: 'Linux', src: linuxImg, role: 'Operating System' },
  { name: 'Material UI', src: muiImg, role: 'UI Library' },
  { name: 'Next.js', src: nextImg, role: 'React Framework' },
  { name: 'PostgreSQL', src: pgImg, role: 'Relational Database' },
  { name: 'Python', src: pythonImg, role: 'Backend Language' },
  { name: 'RabbitMQ', src: rabbitImg, role: 'Message Broker' },
  { name: 'React', src: reactImg, role: 'Frontend Library' },
  { name: 'Swagger', src: swaggerImg, role: 'API Documentation' },
  { name: 'Tailwind', src: tailwindImg, role: 'CSS Framework' },
  { name: 'TypeScript', src: tsImg, role: 'Typed Superset' },
  { name: 'Vite', src: viteImg, role: 'Build Tool' },
  { name: 'Vue.js', src: vueImg, role: 'Frontend Framework' },
];

interface LogoLoopProps {
    className?: string;
    withTitle?: boolean;
    direction?: 'horizontal' | 'vertical';
}

const LogoLoop = ({ className = "", withTitle = true, direction = 'horizontal' }: LogoLoopProps) => {
  const loopedLogos = [...logos, ...logos, ...logos];
  const isVertical = direction === 'vertical';

  return (
    <div className={`relative overflow-hidden ${isVertical ? 'h-[600px] w-32' : 'w-full py-16'} ${className}`}>
      
      {/* Gradients */}
      {isVertical ? (
          <>
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
          </>
      ) : (
          <>
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black/30 to-transparent z-10 pointer-events-none" />
          </>
      )}


      {withTitle && !isVertical && (
      <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/50 mb-12">
        Arsenal Tecnológico
      </h3>
      )}

      <div className={`flex ${isVertical ? 'flex-col items-center' : ''}`}>
        <motion.div
            initial={isVertical ? { y: 0 } : { x: 0 }}
            animate={isVertical ? { y: "-50%" } : { x: "-50%" }}
            transition={{
                duration: isVertical ? 60 : 40,
                ease: "linear",
                repeat: Infinity,
            }}
            className={`flex ${isVertical ? 'flex-col gap-8 py-6' : 'gap-12 px-6'}`}
        >
            {loopedLogos.map((logo, index) => (
                <div 
                    key={`${logo.name}-${index}`} 
                    className="group relative flex flex-col items-center justify-center gap-2 min-w-[80px]"
                >
                    <div className="w-16 h-16 transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                        <img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>
                    
                    {/* Tooltip */}
                    <div className={`absolute ${isVertical ? 'right-full mr-4 top-1/2 -translate-y-1/2' : '-top-14 left-1/2 -translate-x-1/2'} p-2 bg-neutral-900/95 border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform ${isVertical ? 'translate-x-2 group-hover:translate-x-0' : 'translate-y-2 group-hover:translate-y-0'} z-20 pointer-events-none w-max max-w-[150px] shadow-xl backdrop-blur-sm`}>
                        <div className="text-center">
                            <p className="text-xs font-bold text-white">{logo.name}</p>
                            <p className="text-[10px] text-gray-400">{logo.role}</p>
                        </div>
                        {/* Arrow */}
                         {isVertical ? (
                             <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-neutral-900 rotate-45 border-r border-t border-white/10" />
                         ) : (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45 border-r border-b border-white/10" />
                         )}
                    </div>
                </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoLoop;
