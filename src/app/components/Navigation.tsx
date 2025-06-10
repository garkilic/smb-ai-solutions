'use client';

import Link from 'next/link';
import { useState } from 'react';
import TallyFormModal from './TallyFormModal';

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral/95 backdrop-blur-sm border-b border-neutral-border">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-light-brighter hover:text-primary transition-colors">
              Solution Threads
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/about"
                className="text-light/80 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/thread-example"
                className="text-light/80 hover:text-primary transition-colors"
              >
                Workflow Example
              </Link>
              <Link
                href="/pricing"
                className="text-light/80 hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Get Your Free Audit
              </button>
            </div>
          </div>
        </div>
      </nav>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 