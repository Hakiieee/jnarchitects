import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="bg-[#091124] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Contact</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light text-[#F5F0E8] sm:text-5xl">Studio Details</h2>

          <div className="mt-10 space-y-7 text-[#E5E0D8]">
            <p className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 text-[#D4AF37]" />
              <a href="mailto:JNArchitects@gmail.com" className="transition hover:text-[#D4AF37]">JNArchitects@gmail.com</a>
            </p>
            <p className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 text-[#D4AF37]" />
              <a href="tel:+63941959084" className="transition hover:text-[#D4AF37]">+63 941 959 084</a>
            </p>
            <p className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 text-[#D4AF37]" />
              <span>Caingal, San Carlos City, Pangasinan, Philippines</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="min-h-[420px] overflow-hidden border border-[#D4AF37]/20 bg-[#0A162E]"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="JNArchitects studio location in San Carlos City, Pangasinan"
            src="https://www.google.com/maps?q=Caingal%20San%20Carlos%20City%20Pangasinan%20Philippines&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
