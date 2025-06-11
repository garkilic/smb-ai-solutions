'use client';

import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface TallyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TallyFormModal({ isOpen, onClose }: TallyFormModalProps) {
  useEffect(() => {
    // Load Tally script when modal opens
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.removeChild(script);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={handleBackdropClick}
    >
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />
      <div className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] md:h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Close form"
        >
          <FaTimes className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </button>
        <iframe
          src="https://tally.so/r/3jY44J?transparentBackground=1&showExitButton=1"
          className="w-full h-full border-0"
          title="AI Readiness Assessment"
          loading="lazy"
        />
      </div>
    </div>
  );
} 