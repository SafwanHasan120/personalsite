"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Briefcase,
  Award,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ParticleNetwork from "@/components/ParticleNetwork";
import {
  site,
  experience,
  skills,
  projects,
  social,
} from "@/data/site";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Renders description text with **keywords** as bold. */
function renderWithBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-400">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-16">
        <section
          id="about"
          className="min-h-screen flex flex-col md:flex-row md:items-center justify-center gap-10 md:gap-14 px-6 max-w-5xl mx-auto -mt-12"
        >
          <AnimatedSection className="shrink-0 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#262626] bg-[#171717]">
              <Image
                src={site.headshot}
                alt={`${site.name} headshot`}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
          <AnimatedSection className="flex-1">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">
              {site.name}
            </h1>
            <p className="text-gray-400 text-lg mb-4">{site.tagline}</p>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line max-w-xl">
              {site.about}
            </p>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="inline-block mt-4 text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                {site.email}
              </a>
            )}
          </AnimatedSection>
        </section>

        {/* Experience: list first, then skills */}
        <Section
          id="experience"
          title="Experience"
          subtitle="Background and core competencies."
        >
          <div className="space-y-12">
            <AnimatedSection>
              <ul className="space-y-8">
                {experience.map((item, index) => (
                  <li
                    key={index}
                    className="pl-6 border-l-2 border-[#262626]"
                  >
                    <p className="font-medium text-white">{item.role}</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {item.company} · {item.period}
                    </p>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {renderWithBold(item.description)}
                    </p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection>
              <h3 className="font-serif text-lg font-medium text-white mb-6 flex items-center gap-2">
                <Award size={20} className="text-gray-500" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626] text-gray-300 text-sm hover:border-gray-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Section>

        {/* Projects & Awards */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work and recognitions."
        >
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <AnimatedSection key={index}>
                <li className="p-6 rounded-lg bg-[#171717] border border-[#262626] hover:border-gray-600 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-gray-200 inline-flex items-center gap-1.5 transition-colors"
                      >
                        {project.title}
                        <ExternalLink size={14} />
                      </a>
                      {project.award ? (
                        <p className="text-[#b8a070] text-sm mt-1.5 font-medium">
                          {project.award}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </Section>

        {/* Connect */}
        <Section
          id="connect"
          title="Connect"
          subtitle="Find me on these platforms."
        >
          <AnimatedSection className="flex flex-wrap gap-3 -mt-6">
            <a
              href={social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a call (Calendly)"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-gray-300 hover:text-white hover:border-gray-500 transition-all"
            >
              <Calendar size={18} />
              <span>Calendly</span>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-gray-300 hover:text-white hover:border-gray-500 transition-all"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-gray-300 hover:text-white hover:border-gray-500 transition-all"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            {social.instagram ? (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] border border-[#262626] text-gray-300 hover:text-white hover:border-gray-500 transition-all"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            ) : null}
          </AnimatedSection>
        </Section>

        {/* Footer */}
        <footer className="section-padding px-6 border-t border-[#262626]">
          <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
