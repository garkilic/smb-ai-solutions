'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeen = localStorage.getItem('hasSeenEmailPopup');
    if (!hasSeen) {
      // Wait 5 seconds before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark that user has seen the popup
    localStorage.setItem('hasSeenEmailPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop and Centering Flex Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full relative pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors z-10"
                style={{ position: 'absolute', top: 16, right: 16 }}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Tally Form */}
              <div className="w-full">
                <iframe
                  src="https://tally.so/embed/nGjqNO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height={400}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Email Collection"
                  className="w-full"
                  style={{ background: 'white' }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 