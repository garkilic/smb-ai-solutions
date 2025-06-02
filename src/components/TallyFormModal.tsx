'use client';

import { useEffect } from 'react';

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
      className="fixed inset-0 z-50 bg-dark"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-white">
        <iframe
          data-tally-src="https://tally.so/r/3jY44J?transparentBackground=0"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="AI Readiness Assessment"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-center p-4 z-10">
        <button
          onClick={onClose}
          className="bg-dark hover:bg-dark/90 text-light px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
          aria-label="Close form"
        >
          <span>Exit Form</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 