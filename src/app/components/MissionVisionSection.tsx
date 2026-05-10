import { Eye, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const statements = [
  {
    icon: Target,
    label: 'Mission',
    title: 'High-quality architectural services with purpose',
    body: 'Our mission is to provide high-quality architectural services that combine creativity, functionality, and sustainability. We are committed to addressing the unique needs of clients and communities by delivering innovative design solutions, and delivering accuracy in every project. Through collaboration, adaptability, and continuous improvement, we aim to contribute to the built environment in ways that promote progress, inclusivity, and resilience.'
  },
  {
    icon: Eye,
    label: 'Vision',
    title: 'A leading studio for sustainable and meaningful design',
    body: 'To become a leading architectural firm recognized for creating sustainable, innovative, and community-centered designs that inspire growth, preserve culture, and shape a better future for generations.'
  }
];

export default function MissionVisionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.18
  });

  return (
    <section id="mission" className="relative overflow-hidden bg-[#0A162E] px-5 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(90deg,#D4AF37_1px,transparent_1px),linear-gradient(#D4AF37_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Mission & Vision</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light leading-tight text-[#F5F0E8] sm:text-5xl lg:text-6xl">
            A clear direction for every space we shape
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {statements.map((statement, index) => {
            const Icon = statement.icon;

            return (
              <motion.article
                key={statement.label}
                className="border border-[#D4AF37]/25 bg-[#091124]/82 p-8 backdrop-blur transition hover:border-[#D4AF37]/55 sm:p-10"
                initial={{ opacity: 0, y: 34 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#D4AF37]/45 bg-[#D4AF37] text-[#091124]">
                    <Icon size={22} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{statement.label}</p>
                </div>

                <h3 className="mt-8 font-['Cormorant_Garamond'] text-3xl font-light leading-tight text-[#F5F0E8] sm:text-4xl">
                  {statement.title}
                </h3>
                <p className="mt-6 text-sm font-light leading-8 text-[#E5E0D8] sm:text-base">
                  {statement.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
