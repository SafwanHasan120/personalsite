import React from "react";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding px-6 max-w-5xl mx-auto ${className}`}
    >
      {(title || subtitle) && (
        <header className="mb-10 md:mb-12">
          {title && (
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              {subtitle}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
