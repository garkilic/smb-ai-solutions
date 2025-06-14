'use client';

import React from 'react';
import { 
  FaCheck, 
  FaTimes, 
  FaInfoCircle,
  FaCheckCircle,
  FaHandshake,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';
import Link from 'next/link';
import motion from '../components/MotionWrapper';
import { useState } from 'react';
import TallyFormModal from '../components/TallyFormModal';

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <TallyFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-neutral to-neutral-light relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50"></div>
        <div className="container-custom relative">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl text-light-brighter mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-light/80 mb-8">
              No complex tech talk, no hidden fees. Just clear plans that help you implement AI in your business, step by step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section - moved up */}
      <div className="bg-neutral py-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pricing-section max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaShieldAlt className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="heading-lg">30-Day Risk-Free Guarantee</h3>
          </div>
          <p className="text-base text-light/80">
            Every plan is backed by our 30-day risk-free guarantee. If you don't see clear results or feel confident using AI in your business, we'll fix it or refund it.
          </p>
        </motion.div>
      </div>

      {/* Monthly Support Option - moved up, now immediately after guarantee */}
      <div className="bg-neutral py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pricing-section max-w-4xl mx-auto relative border-4 border-primary md:scale-105 z-10 px-4 sm:px-6 lg:px-8"
        >
          <div className="pricing-popular">
            <span className="text-primary font-medium">Most Popular</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 bg-green-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-md">
              <FaClock className="w-4 h-4" /> Monthly
            </span>
            <div>
              <h3 className="heading-lg">Your AI Ops Team — On Demand</h3>
              <p className="text-light/80 mt-2">Get a dedicated AI strategist for a fraction of the cost of hiring an AI engineer full time.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-light/80 mb-6">
                Stop starting from scratch with every new AI idea. With our AI Ops retainer, you get a dedicated strategist who learns your business inside-out, implements new automations monthly, and keeps your systems sharp.
              </p>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="pricing-feature bg-primary/10 border-l-4 border-primary rounded-md px-3 py-2 flex items-center gap-2 mb-2"
                >
                  <FaHandshake className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-primary">We pay for and manage all the AI tools you need—no extra subscriptions.</span>
                </motion.li>
                {[
                  "Receive one Solution Thread every week.",
                  "We deliver threads until your business is fully using AI.",
                  "We handle all the technical setup for you.",
                  "Get fast answers with priority Slack support."
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="pricing-feature"
                  >
                    <FaCheckCircle className="pricing-feature-icon" />
                    <span className="pricing-feature-text">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-light-brighter mb-4">$3,997<span className="text-xl">/mo</span></div>
              <p className="text-red-500 font-medium mb-4">Limited onboarding slots this month</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://calendly.com/garkilic/griffin-arkilic', '_blank')}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-lg text-primary bg-transparent hover:bg-primary/10 transition-colors"
              >
                Book My AI Strategy Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Pricing Section (One-Time Payment Cards) */}
      <section className="py-16 bg-neutral">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 max-w-[1400px] mx-auto items-stretch">
            {/* Starter Plan */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pricing-card group hover:shadow-lg transition-shadow pt-10 sm:pt-12 md:pt-12 h-full flex flex-col"
            >
              <div className="mb-2 text-center">
                <span className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-4 py-2 rounded-full shadow-md mb-2">
                  <FaCheck className="w-4 h-4" /> One-Time Payment
                </span>
              </div>
              <div className="mb-8 text-center">
                <h3 className="heading-lg mb-2">Get Your First AI Win</h3>
                <div className="text-light/70 text-base mb-4">Launch your first AI-powered process and see results fast.</div>
                <div className="text-5xl font-bold text-light-brighter mb-4">$497</div>
                <p className="text-light/70 text-lg">Perfect for businesses taking their first steps with AI. We'll help you implement one key thread that saves you time.</p>
              </div>
              <ul className="grid grid-rows-3 gap-3 mb-4 flex-grow">
                {["One thread implementation","Step-by-step guidance","Basic AI training"].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="pricing-feature"
                  >
                    <FaCheckCircle className="pricing-feature-icon" />
                    <span className="pricing-feature-text">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="text-center mt-auto pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)} 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-lg text-primary bg-transparent hover:bg-primary/10 transition-colors"
                >
                  Start Starter Audit
                </motion.button>
              </div>
              <div className="flex items-center gap-2 mt-4 justify-center">
                <FaInfoCircle className="text-red-500 w-4 h-4" />
                <span className="text-xs text-red-500 font-semibold">AI tool costs not included in one-time plans.</span>
              </div>
            </motion.div>

            {/* Growth Plan */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="pricing-card group hover:shadow-lg transition-shadow pt-10 sm:pt-12 md:pt-12 h-full flex flex-col"
            >
              <div className="mb-2 text-center">
                <span className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-4 py-2 rounded-full shadow-md mb-2">
                  <FaCheck className="w-4 h-4" /> One-Time Payment
                </span>
              </div>
              <div className="mb-8 text-center">
                <h3 className="heading-lg mb-2">Scale AI Systems</h3>
                <div className="text-light/70 text-base mb-4">Multiply your productivity with AI-powered workflows for your whole team.</div>
                <div className="text-5xl font-bold text-light-brighter mb-4">$1,997</div>
                <p className="text-light/70 text-lg">Transform your business with AI. We'll implement multiple threads and train your team to use AI effectively.</p>
              </div>
              <ul className="grid grid-rows-3 gap-3 mb-4 flex-grow">
                {["3 thread implementations","Team training sessions","1 month of priority support"].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="pricing-feature"
                  >
                    <FaCheckCircle className="pricing-feature-icon" />
                    <span className="pricing-feature-text">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="text-center mt-auto pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)} 
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary hover:bg-primary/90 shadow-lg transition-colors"
                >
                  Scale My Team with AI
                </motion.button>
              </div>
              <div className="flex items-center gap-2 mt-4 justify-center">
                <FaInfoCircle className="text-red-500 w-4 h-4" />
                <span className="text-xs text-red-500 font-semibold">AI tool costs not included in one-time plans.</span>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="pricing-card group hover:shadow-lg transition-shadow pt-10 sm:pt-12 md:pt-12 h-full flex flex-col"
            >
              <div className="mb-2 text-center">
                <span className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-4 py-2 rounded-full shadow-md mb-2">
                  <FaCheck className="w-4 h-4" /> One-Time Payment
                </span>
              </div>
              <div className="mb-8 text-center">
                <h3 className="heading-lg mb-2">Full AI Transformation</h3>
                <div className="text-light/70 text-base mb-4">Unlock company-wide AI leverage and ongoing support.</div>
                <div className="text-5xl font-bold text-light-brighter mb-4">$3,997</div>
                <p className="text-light/70 text-lg">Full AI transformation. We'll implement 5 core threads and provide ongoing support to ensure your success.</p>
              </div>
              <ul className="grid grid-rows-3 gap-3 mb-4 flex-grow">
                {["5 thread implementations","Dedicated AI coach","3 months of priority support"].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="pricing-feature"
                  >
                    <FaCheckCircle className="pricing-feature-icon" />
                    <span className="pricing-feature-text">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="text-center mt-auto pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)} 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-lg text-primary bg-transparent hover:bg-primary/10 transition-colors"
                >
                  Transform My Business
                </motion.button>
              </div>
              <div className="flex items-center gap-2 mt-4 justify-center">
                <FaInfoCircle className="text-red-500 w-4 h-4" />
                <span className="text-xs text-red-500 font-semibold">AI tool costs not included in one-time plans.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Not Ready Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Not Ready Yet?</h2>
            <p className="text-xl text-light/80 mb-8">
              Start with a free AI Process Audit. We'll analyze your current workflows and show you exactly where AI can save you time and money.
            </p>
            <p className="text-light/60 mb-8">
              No pressure — just practical insights for your business.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)} 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary hover:bg-primary/90 shadow-lg transition-colors"
            >
              Start Free Assessment
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 