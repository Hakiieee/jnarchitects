import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  location: string;
  description: string;
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const currentProject = projects[activeProject];
  const goToPrevious = () => setActiveProject((current) => (current === 0 ? projects.length - 1 : current - 1));
  const goToNext = () => setActiveProject((current) => (current === projects.length - 1 ? 0 : current + 1));

  return (
    <section id="projects" className="bg-[#0A162E] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Portfolio</p>
            </div>
            <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light text-[#F5F0E8] sm:text-5xl">Selected Works</h2>
          </motion.div>

          <motion.p
            className="max-w-md text-sm font-light leading-7 text-[#E5E0D8]"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated look at healthcare, civic response, worship, and community-focused design studies developed with attention to site, function, material character, and long-term public value.
          </motion.p>
        </div>

        <div className="mt-14">
          <div className="relative mx-auto max-w-5xl">
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-[#D4AF37]/45 bg-[#091124]/80 text-[#D4AF37] shadow-xl backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#091124] sm:-left-6"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            <ProjectCard key={currentProject.title} project={currentProject} index={0} variant="featured" />

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-[#D4AF37]/45 bg-[#091124]/80 text-[#D4AF37] shadow-xl backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#091124] sm:-right-6"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveProject(index)}
                className={`h-2.5 transition-all ${
                  activeProject === index
                    ? 'w-9 bg-[#D4AF37]'
                    : 'w-2.5 bg-[#D4AF37]/35 hover:bg-[#D4AF37]/70'
                }`}
                aria-label={`Show ${project.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
