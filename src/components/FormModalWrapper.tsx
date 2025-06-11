'use client';

import { useState } from 'react';
import TallyFormModal from './TallyFormModal';
import { FaArrowRight } from 'react-icons/fa';

interface FormModalWrapperProps {
  buttonText?: string;
  className?: string;
}

export default function FormModalWrapper({ 
  buttonText = "Start Your AI Transformation",
  className = ""
}: FormModalWrapperProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <TallyFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <button 
        onClick={() => setIsFormOpen(true)}
        className={`btn-primary group relative overflow-hidden ${className}`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {buttonText}
          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </button>
    </>
  );
} 