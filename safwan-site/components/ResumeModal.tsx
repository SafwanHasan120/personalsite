"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string; // Path to your PDF file
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl,
}: ResumeModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-2 md:inset-4 lg:inset-8 z-50 flex items-center justify-center"
          >
            <div className="bg-gray-950/95 rounded-xl shadow-2xl border border-gray-800/50 w-full h-full flex flex-col max-w-6xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-gray-800/50">
                <h2 className="font-serif text-lg font-semibold text-white">
                  Resume
                </h2>
                <div className="flex items-center gap-2">
                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-500 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                    aria-label="Download resume"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="p-1.5 md:p-2 hover:bg-gray-800/50 rounded-lg transition-colors text-gray-400 hover:text-white"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden p-2 md:p-3">
                <iframe
                  src={resumeUrl}
                  className="w-full h-full rounded-lg border border-gray-800/30"
                  title="Resume PDF"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}