import { ClipboardCheck, DraftingCompass, HardHat, Layers, Map, MessagesSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    icon: MessagesSquare,
    title: 'Consultation',
    description: 'Understand the client, project goals, site conditions, and design needs.'
  },
  {
    icon: DraftingCompass,
    title: 'Concept Design',
    description: 'Develop the initial design direction, layouts, mood, and spatial ideas.'
  },
  {
    icon: Layers,
    title: 'Design Development',
    description: 'Refine materials, details, plans, and technical requirements.'
  },
  {
    icon: Map,
    title: 'Site Planning',
    description: 'Coordinate access, circulation, outdoor areas, and environmental response.'
  },
  {
    icon: HardHat,
    title: 'Construction Coordination',
    description: 'Support project execution by aligning design intent with site work.'
  },
  {
    icon: ClipboardCheck,
    title: 'Completion',
    description: 'Review final results and ensure the completed space reflects the project vision.'
  }
];

export default function DesignProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12
  });

  return (
    <section id="process" className="bg-[#091124] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Design Process</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light leading-tight text-[#F5F0E8] sm:text-5xl">
            From concept to completion
          </h2>
          <p className="mt-7 max-w-2xl text-base font-light leading-8 text-[#E5E0D8]">
            JNArchitects follows a clear process that helps each project move from early ideas to coordinated design and successful construction.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                className="relative border border-[#D4AF37]/20 bg-[#0A162E] p-8"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.07 }}
              >
                <span className="absolute right-7 top-6 font-['Cormorant_Garamond'] text-5xl font-light text-[#D4AF37]/20">
                  0{index + 1}
                </span>
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-7 font-['Cormorant_Garamond'] text-2xl font-light text-[#F5F0E8]">{step.title}</h3>
                <p className="mt-4 text-sm font-light leading-7 text-[#E5E0D8]">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
