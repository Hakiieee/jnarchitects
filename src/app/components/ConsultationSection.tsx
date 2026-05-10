import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export default function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="consultation" className="bg-[#0A162E] px-5 py-24 sm:py-32 lg:px-8">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 top-0 h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#D4AF37]">Consultation</p>
          </div>
          <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-light leading-tight text-[#F5F0E8] sm:text-5xl">
            Book a design consultation
          </h2>
          <p className="mt-7 text-base font-light leading-8 text-[#E5E0D8]">
            Share the space you want to build, improve, or redesign. JNArchitects will help clarify the scope, site conditions, design direction, and next steps from concept to construction.
          </p>
        </motion.div>

        <motion.form
          className="grid gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted && (
            <div className="border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-4 text-sm leading-7 text-[#F5F0E8]">
              Thank you. Your consultation request has been noted, and JNArchitects will review the project details.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Full Name</span>
              <input
                type="text"
                name="name"
                className="mt-3 w-full border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition placeholder:text-[#B8A88A] focus:border-[#D4AF37]"
                placeholder="Your name"
                required
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Email</span>
              <input
                type="email"
                name="email"
                className="mt-3 w-full border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition placeholder:text-[#B8A88A] focus:border-[#D4AF37]"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Phone</span>
              <input
                type="tel"
                name="phone"
                className="mt-3 w-full border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition placeholder:text-[#B8A88A] focus:border-[#D4AF37]"
                placeholder="+63"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Project Location</span>
              <input
                type="text"
                name="location"
                className="mt-3 w-full border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition placeholder:text-[#B8A88A] focus:border-[#D4AF37]"
                placeholder="San Carlos City, Pangasinan"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Project Type</span>
              <select
                name="projectType"
                className="mt-3 w-full border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition focus:border-[#D4AF37]"
                defaultValue=""
              >
                <option value="" disabled>Select type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Civic</option>
                <option>Interior Design</option>
                <option>Site Planning</option>
                <option>Construction Management</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Project Stage</span>
              <select
                name="projectStage"
                className="mt-3 w-full border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition focus:border-[#D4AF37]"
                defaultValue=""
              >
                <option value="" disabled>Select stage</option>
                <option>Idea / Concept</option>
                <option>Planning</option>
                <option>Design Development</option>
                <option>For Construction</option>
                <option>Renovation</option>
              </select>
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.24em] text-[#B8A88A]">Project Brief</span>
            <textarea
              name="message"
              rows={6}
              className="mt-3 w-full resize-y border border-[#D4AF37]/25 bg-[#091124] px-5 py-4 text-[#F5F0E8] outline-none transition placeholder:text-[#B8A88A] focus:border-[#D4AF37]"
              placeholder="Tell us about the site, space needs, preferred style, timeline, and the main problem you want the design to solve."
            ></textarea>
          </label>
          <button
            type="submit"
            className="border border-[#D4AF37] bg-[#D4AF37] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#091124] transition hover:bg-[#0A162E] hover:text-[#D4AF37]"
          >
            Request Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
