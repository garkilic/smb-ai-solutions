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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-white"
        onClick={onClose}
      />
      <div className="relative w-full h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-lg"
          aria-label="Close form"
        >
          <FaTimes className="w-6 h-6 text-black" />
        </button>
        <iframe
          src="https://tally.so/r/3jY44J?transparentBackground=1&showExitButton=1"
          className="w-full h-full border-0"
          title="Contact Form"
        />
      </div>
    </div>
  );
} 