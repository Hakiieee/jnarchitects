import { Calculator, DraftingCompass, HardHat, Landmark, Palette, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const departments = [
  {
    icon: Landmark,
    title: 'President / CEO',
    description: 'Sets the overall vision, mission, and goals while guiding company operations and design direction.'
  },
  {
    icon: DraftingCompass,
    title: 'Architectural Design',
    description: 'Leads architectural concepts, senior architect coordination, junior architects, and CAD/BIM documentation.'
  },
  {
    icon: HardHat,
    title: 'Engineering & Technical Services',
    description: 'Coordinates structural, civil, electrical, and mechanical requirements for safe and functional projects.'
  },
  {
    icon: Palette,
    title: 'Landscape & Interior Design',
    description: 'Develops outdoor spaces, interior concepts, finishes, materials, and spatial arrangements.'
  },
  {
    icon: Calculator,
    title: 'Finance & Administration',
    description: 'Handles budgeting, records, accounting, HR support, and day-to-day administrative operations.'
  },
  {
    icon: Users,
    title: 'Site Staff',
    description: 'Supports implementation by coordinating site work, construction activities, and project completion.'
  }
];

export default function StudioStructureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12
  });

  return (
    <section id="structure" className="bg-[#0A162E] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Studio Structure</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light leading-tight text-[#F5F0E8] sm:text-5xl">
            Organized for collaboration and complete project delivery
          </h2>
          <p className="mt-7 max-w-2xl text-base font-light leading-8 text-[#E5E0D8]">
            JNArchitects is planned as a medium-sized studio of approximately 18 members, bringing together design, engineering, administration, and site coordination.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#D4AF37]/20 bg-[#D4AF37]/20 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, index) => {
            const Icon = department.icon;

            return (
              <motion.article
                key={department.title}
                className="bg-[#091124] p-8 transition hover:bg-[#0A162E]"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.07 }}
              >
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-7 font-['Cormorant_Garamond'] text-2xl font-light leading-tight text-[#F5F0E8]">
                  {department.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-[#E5E0D8]">{department.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
