'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  FaRocket, 
  FaRobot, 
  FaChartLine, 
  FaUsers, 
  FaLightbulb, 
  FaShieldAlt, 
  FaCheck, 
  FaArrowRight,
  FaQuestionCircle,
  FaCheckCircle,
  FaUserTie,
  FaTools,
  FaHandshake,
  FaFileAlt,
  FaHeart
} from 'react-icons/fa';
import { Metadata } from 'next';
import FormModalWrapper from '@/components/FormModalWrapper';
import AIStepwiseExample from './components/AIStepwiseExample';
import ThreadExample from './components/ThreadExample';
import { useState } from 'react';
import TallyFormModal from './components/TallyFormModal';
import FeatureCard from './components/FeatureCard';
import motion from './components/MotionWrapper';
import EmailPopup from './components/EmailPopup';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <EmailPopup />
      {/* Hero Section - The Problem */}
      <section className="section-padding bg-gradient-to-b from-neutral to-neutral-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float">
                <FaQuestionCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-xl text-light-brighter mb-4 sm:mb-6"
            >
              AI is Everywhere.<br />
              But Where Do You Start?
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-light/80 mb-6 sm:mb-8"
            >
              Everyone's talking about AI, but for small business owners, it's overwhelming. You want to stay competitive, but you don't know who to trust or what tools to use. Sound familiar?
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 sm:mb-8 p-3 sm:p-4 bg-neutral-card rounded-lg border border-neutral-border hover:border-primary/50 transition-colors"
            >
              <p className="text-primary font-medium text-sm sm:text-base">
                "You don't need to be a tech expert to use AI. You just need the right guide."
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4"
            >
              <FormModalWrapper buttonText="Get Your Free AI Audit" />
              <p className="microcopy">Takes 2–3 minutes. No technical knowledge required.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30"></div>
        <div className="container-custom relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
              >
                <h2 className="heading-lg mb-4 sm:mb-6 text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-neutral-300 mb-6 sm:mb-8">
                  Get started with your free AI audit and discover how Solution Threads can help you save time and improve results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)} 
                    className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Get Your Free AI Audit
                  </motion.button>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/pricing" 
                      className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 border border-white/20 text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                    >
                      View Pricing
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative max-w-xl mx-auto lg:mx-0 lg:justify-self-end mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-50"></div>
                <div className="relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                      <FaRocket className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Quick Start Guide</h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    <motion.li 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1" />
                      <span className="text-sm sm:text-base text-neutral-300">Get your free AI audit in one week</span>
                    </motion.li>
                    <motion.li 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1" />
                      <span className="text-sm sm:text-base text-neutral-300">Receive 3 popular Solution Threads</span>
                    </motion.li>
                    <motion.li 
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1" />
                      <span className="text-sm sm:text-base text-neutral-300">Start implementing AI today</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              The Solution: AI-First Operations
            </h2>
            <p className="text-lg sm:text-xl text-light/80">
              We help small businesses implement practical AI solutions that deliver real results, not just hype.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={FaUserTie}
                title="Business-First Approach"
                description="We start with your business goals, not the technology. Every AI solution is tailored to your specific needs."
                actionText="Focus on what matters to you"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={FaTools}
                title="Custom Threads"
                description="Clear, step-by-step processes that anyone on your team can follow. No technical jargon, just results."
                actionText="Easy to implement and scale"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={FaHandshake}
                title="Ongoing Support"
                description="We're here for the long haul. Get help when you need it, whether it's a quick question or a major update."
                actionText="Never feel alone with AI"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <FaRobot className="w-12 h-12 text-primary" />
            </motion.div>
            <h2 className="heading-lg mb-6">How It Works</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              We combine the power of AI with human expertise to create efficient, reliable processes for your business. Here's how we do it:
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ThreadExample />
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-light/80 mb-6">
              This is just one example. We create custom processes for your specific needs, with clear instructions and human oversight at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Tools Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <FaTools className="w-12 h-12 text-primary" />
            </motion.div>
            <h2 className="heading-lg mb-6">The Tools You Need</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              We use the best AI tools available, but we don't just hand them over. We create custom processes that make them work for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={FaRobot}
                title="AI Tools"
                description="Access to the best AI tools, set up and configured for your specific needs."
                actionText="No technical setup required"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={FaFileAlt}
                title="Custom Threads"
                description="Clear, step-by-step processes that anyone on your team can follow."
                actionText="Easy to implement and scale"
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={FaShieldAlt}
                title="Ongoing Support"
                description="Get help whenever you need it, whether it's a quick question or a major update."
                actionText="Never feel stuck"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOP Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6"
            >
              <FaFileAlt className="w-8 h-8 text-neutral-900" />
            </motion.div>
            <h2 className="heading-lg mb-6 text-neutral-900">Why We're Different</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Most AI services for small businesses focus on selling tools or automation for its own sake. Solution Threads is different: we start with your people, your workflows, and your real business needs. Our approach is human-first, not tech-first.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center"
                  >
                    <FaHeart className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="heading-md text-neutral-900">Human-First Design</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  We design every solution around your team, not just the technology. Our processes empower your people to do their best work with AI as a true partner.
                </p>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center"
                  >
                    <FaTools className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="heading-md text-neutral-900">Practical Implementation</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  We don't just hand you a tool and walk away. We build step-by-step, easy-to-follow processes that fit your business and actually get used.
                </p>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center"
                  >
                    <FaChartLine className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="heading-md text-neutral-900">Real Results</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  Our focus is on outcomes, not hype. We measure success by the time you save, the clarity you gain, and the results you see in your business.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
