import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="bg-[#091124] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Services</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light text-[#F5F0E8] sm:text-5xl">Our Expertise</h2>
        </motion.div>

        <div className="mt-7 max-w-2xl text-base font-light leading-8 text-[#E5E0D8]">
          JNArchitects brings together design creativity, technical proficiency, and project coordination to guide spaces from early concepts to successful completion.
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#D4AF37]/20 bg-[#D4AF37]/20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#0A162E] p-8 transition hover:bg-[#091124]"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Icon className="h-6 w-6 text-[#D4AF37]" />
                <h3 className="mt-7 font-['Cormorant_Garamond'] text-2xl font-light text-[#F5F0E8]">{service.title}</h3>
                <p className="mt-4 text-sm font-light leading-7 text-[#E5E0D8]">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
