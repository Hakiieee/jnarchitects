import { Handshake, Leaf, Lightbulb, Medal, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    icon: Lightbulb,
    title: 'Creativity and Innovation',
    description: 'We design with originality and fresh ideas that solve real-world challenges.'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity and Professionalism',
    description: 'We uphold honesty, transparency, and ethical practice in all our work.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We commit to eco-friendly solutions that support communities and the environment.'
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'We believe teamwork and partnerships bring the best results.'
  },
  {
    icon: Medal,
    title: 'Excellence and Precision',
    description: 'We strive for quality, accuracy, and client satisfaction in every project.'
  },
  {
    icon: RefreshCw,
    title: 'Adaptability',
    description: 'We embrace change and adjust to new ideas, technologies, and needs.'
  },
  {
    icon: Sparkles,
    title: 'Passion and Dedication',
    description: 'We work with enthusiasm and commitment to make a positive impact.'
  }
];

export default function CoreValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12
  });

  return (
    <section id="values" className="bg-[#091124] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Core Values</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light leading-tight text-[#F5F0E8] sm:text-5xl">
            Principles that guide the studio
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#D4AF37]/20 bg-[#D4AF37]/20 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                className={index === values.length - 1 ? 'bg-[#0A162E] p-7 transition hover:bg-[#091124] lg:col-span-2' : 'bg-[#0A162E] p-7 transition hover:bg-[#091124]'}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              >
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-6 font-['Cormorant_Garamond'] text-2xl font-light leading-tight text-[#F5F0E8]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-[#E5E0D8]">{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
