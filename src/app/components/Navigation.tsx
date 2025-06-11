'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import TallyFormModal from './TallyFormModal';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral/95 backdrop-blur-sm shadow-lg' : 'bg-neutral/80 backdrop-blur-sm'
      } border-b border-neutral-border`}>
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg sm:text-xl font-bold text-light-brighter hover:text-primary transition-colors">
              Solution Threads
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Get Your Free Audit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-light/80 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-[500px] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="container-custom py-4 space-y-4 border-t border-neutral-border">
            <Link
              href="/about"
              className="block text-light/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/thread-example"
              className="block text-light/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Workflow Example
            </Link>
            <Link
              href="/pricing"
              className="block text-light/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Get Your Free Audit
            </button>
          </div>
        </div>
      </nav>
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 