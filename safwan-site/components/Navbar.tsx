"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import ResumeModal from "@/components/ResumeModal";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
  { label: "Resume", href: "#resume", isModal: true},
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHasScrolled(latest > 20);
    });
  }, [scrollY]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: typeof navLinks[0]
  ) => {
    if (link.isModal) {
      e.preventDefault();
      setIsResumeModalOpen(true);
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b transition-all duration-300 ${
        hasScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-[#262626]"
          : "border-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg font-semibold text-white hover:text-gray-200 transition-colors"
        >
          {site.name}
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#171717] border-t border-[#262626]"
        >
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors py-1"
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl="/resume.pdf"
      />
    </motion.header>
  );
}
