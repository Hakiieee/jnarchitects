import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="bg-[#091124] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">About Us</p>
          </div>

          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light leading-tight text-[#F5F0E8] sm:text-5xl lg:text-6xl">
            Design and construction shaped for lasting value
          </h2>
          <p className="mt-7 max-w-2xl text-base font-light leading-8 text-[#E5E0D8]">
            JNArchitects is a full-service architectural design and construction firm established on December 29, 2021, with the goal of providing innovative, functional, and sustainable design solutions. The firm creates spaces that respond to the changing needs of modern communities while maintaining high standards in design and construction.
          </p>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-[#E5E0D8]">
            The firm offers architectural design, interior design, site planning, and construction management for residential, commercial, and civic developments. Each project is approached with careful planning and attention to detail to ensure client needs, project objectives, comfort, function, and long-term value are successfully achieved.
          </p>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-[#E5E0D8]">
            Guided by contemporary architectural principles and sustainable practices, JNArchitects combines creativity, technical knowledge, and professional collaboration. Its team of architects, engineers, designers, administrative personnel, and site staff manages work from concept and planning through construction and completion.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { value: '2021', label: 'Established' },
              { value: '4', label: 'Core Services' },
              { value: '18', label: 'Team Members' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="border-l border-[#D4AF37] pl-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="font-['Cormorant_Garamond'] text-4xl font-light text-[#D4AF37]">{stat.value}</div>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#B8A88A]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="group overflow-hidden bg-[#0A162E]"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[360px] overflow-hidden sm:h-[520px]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 ease-in-out group-hover:scale-105"
              src="/videos/studio-principle.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Architectural studio principle video"
            />
          </div>
          <div className="border-x border-b border-[#D4AF37]/40 bg-[#091124] p-6 sm:p-7">
            <svg className="h-5 w-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 7h3V6H6v1zm0 3h3v-1H6v1zm0 3h3v-1H6v1zm0 3h3v-1H6v1zm0 3h3v-1H6v1z"/>
            </svg>
            <p className="mt-4 font-['Cormorant_Garamond'] text-2xl font-light leading-snug text-[#F5F0E8] sm:text-3xl">
              Architecture should enhance comfort, function, and the quality of life of its users.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[#B8A88A]">JNArchitects Studio Principle</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
