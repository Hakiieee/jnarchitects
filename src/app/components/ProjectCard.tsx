import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import DecorativeCorner from './DecorativeCorner';

interface Project {
  title: string;
  location: string;
  description: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'standard' | 'featured';
}

export default function ProjectCard({ project, index, variant = 'standard' }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const isFeatured = variant === 'featured';

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden bg-[#091124]"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className={`relative overflow-hidden bg-[#071025] ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full transition-all duration-700 ease-out ${
            isFeatured
              ? 'object-contain group-hover:brightness-110'
              : 'object-cover group-hover:scale-110 group-hover:blur-[2px]'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-[#091124]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-end p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="w-full">
            <div className="mb-3 h-px w-12 bg-[#D4AF37]" />
            <p className="text-sm font-light leading-relaxed text-[#E5E0D8]">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative border border-[#D4AF37]/20 border-t-0 p-6">
        <DecorativeCorner position="bottom-right" className="-right-1 -bottom-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#F5F0E8]">{project.title}</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#B8A88A]">{project.location}</p>
      </div>
    </motion.article>
  );
}
