'use client';

import { useState } from 'react';
import TallyFormModal from './TallyFormModal';

export default function FormModalWrapper() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <TallyFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <button 
        onClick={() => setIsFormOpen(true)}
        className="btn-primary group"
      >
        See How Much Time You Could Save
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </>
  );
} 