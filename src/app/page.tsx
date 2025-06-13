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
  FaHeart,
  FaTimesCircle
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
      
      {/* 1. Above-the-Fold Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral to-neutral-dark opacity-50"></div>
        <div className="container-custom relative z-10 py-12 sm:py-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-xl mb-6 text-4xl sm:text-5xl md:text-6xl leading-tight">
              AI Implementation That Actually Works
            </h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-light/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              No consultants, no classes, no unnecessary tools.
              <br className="hidden sm:block" />
              Just clear AI workflows that your team can start using today.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link 
                href="/audit" 
                className="btn-primary w-full sm:w-auto text-lg py-4"
              >
                Get Free AI Workflow Audit
              </Link>
              <Link 
                href="/pricing" 
                className="btn-secondary w-full sm:w-auto text-lg py-4"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem-Solution Section */}
      <section className="py-8 sm:py-12 bg-neutral -mt-16 sm:-mt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col h-full"
            >
              <div className="flex-grow">
                <h2 className="heading-lg mb-6 text-white text-3xl sm:text-4xl">The Problem</h2>
                <p className="text-lg sm:text-xl text-light/80 mb-8 leading-relaxed">
                  You've tried learning AI tools, but there's too much to know. Your team struggles to implement them effectively, and you're not seeing the promised results.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <FaTimesCircle className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-light/80 text-lg">Inconsistent results from AI tools</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaTimesCircle className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-light/80 text-lg">Team members can't reliably use AI</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaTimesCircle className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-light/80 text-lg">No clear process for AI implementation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaTimesCircle className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-light/80 text-lg">Too many tools to learn and manage</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaTimesCircle className="w-6 h-6 text-red-500 mt-1" />
                    <span className="text-light/80 text-lg">Wasted time on trial and error</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 flex flex-col h-full"
            >
              <div className="flex-grow">
                <h2 className="heading-lg mb-6 text-white text-3xl sm:text-4xl">Our Solution</h2>
                <p className="text-lg sm:text-xl text-light/80 mb-8 leading-relaxed">
                  We handle all the tools and processes for you. Your team just needs to execute. Simple, clear AI workflows that deliver real results.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <FaCheckCircle className="w-6 h-6 text-primary mt-1" />
                    <span className="text-light/80 text-lg">Ready-to-use AI workflows</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheckCircle className="w-6 h-6 text-primary mt-1" />
                    <span className="text-light/80 text-lg">No technical setup required</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaCheckCircle className="w-6 h-6 text-primary mt-1" />
                    <span className="text-light/80 text-lg">Immediate value from day one</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaFileAlt className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white text-xl">See It In Action</h3>
                </div>
                <p className="text-light/80 text-lg mb-6 leading-relaxed">
                  Check out how we transformed a complex content creation process into a simple, repeatable AI workflow.
                </p>
                <Link 
                  href="/thread-example" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
                >
                  View Example Workflow
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Offer & Process Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-6 text-3xl sm:text-4xl">Simple 3-Step Process</h2>
            <p className="text-lg sm:text-xl text-light/80 max-w-3xl mx-auto px-4 leading-relaxed">
              We provide maximum value upfront, making it easy to see the impact before committing
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm w-full h-full flex flex-col">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl md:text-4xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-6 text-xl md:text-2xl text-center">Quick Assessment</h3>
                    <ul className="space-y-4 flex-grow">
                      <li className="flex items-start gap-4">
                        <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-neutral-600 text-lg">We'll analyze your current processes and identify where AI can make the biggest impact.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-neutral-600 text-lg">Schedule a 15-minute strategy call with our founder to discuss your specific needs and goals.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FaArrowRight className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-green-600 text-lg font-medium">Our team will review your challenges and develop a customized plan to transform your business with AI</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm w-full h-full flex flex-col">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl md:text-4xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-6 text-xl md:text-2xl text-center">Free Audit</h3>
                    <ul className="space-y-4 flex-grow">
                      <li className="flex items-start gap-4">
                        <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-neutral-600 text-lg">We'll walk through your audit results and identify key opportunities for AI implementation.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-neutral-600 text-lg">You'll receive three proven AI threads to use immediately - yours to keep regardless of your decision.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FaArrowRight className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-green-600 text-lg font-medium">We'll recommend the optimal starting points for building your custom AI threads</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative h-full"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm w-full h-full flex flex-col">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl md:text-4xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-6 text-xl md:text-2xl text-center">Full Implementation</h3>
                    <ul className="space-y-4 flex-grow">
                      <li className="flex items-start gap-4">
                        <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-neutral-600 text-lg">We'll build and deploy your custom AI threads, handling all technical setup and integration.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FaCheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-neutral-600 text-lg">Weekly check-ins and monthly success reviews to ensure you're hitting your goals.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <FaArrowRight className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-green-600 text-lg font-medium">Your business runs smoother than ever with AI - no technical expertise required</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Social Proof Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-6">Built for Small Businesses</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto px-4">
              We understand the unique challenges small businesses face with AI adoption
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/20"
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span className="text-light/80">Exclusive focus on small businesses - we understand your unique needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span className="text-light/80">No complex tools or technical setup required - we handle everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                  <span className="text-light/80">Clear, step-by-step processes anyone on your team can follow</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg mb-6">Common Questions</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto px-4">
              Everything you need to know about our AI implementation process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 shadow-lg"
            >
              <ul className="space-y-6">
                <li className="space-y-2">
                  <h3 className="font-semibold text-neutral-900 flex items-start gap-3">
                    <FaQuestionCircle className="w-5 h-5 text-primary mt-1" />
                    What if my team isn't technical?
                  </h3>
                  <p className="text-neutral-600 ml-8">
                    Our AI workflows are designed for non-technical users. We create clear, step-by-step instructions that anyone can follow, regardless of their technical background.
                  </p>
                </li>

                <li className="space-y-2">
                  <h3 className="font-semibold text-neutral-900 flex items-start gap-3">
                    <FaQuestionCircle className="w-5 h-5 text-primary mt-1" />
                    How is this different from hiring a consultant?
                  </h3>
                  <p className="text-neutral-600 ml-8">
                    Unlike traditional consultants, we don't just give advice—we create practical, ready-to-use AI workflows that your team can implement immediately.
                  </p>
                </li>

                <li className="space-y-2">
                  <h3 className="font-semibold text-neutral-900 flex items-start gap-3">
                    <FaQuestionCircle className="w-5 h-5 text-primary mt-1" />
                    How long does implementation take?
                  </h3>
                  <p className="text-neutral-600 ml-8">
                    Most businesses can implement their first AI workflow within 2 weeks. We work at your pace and ensure everything is working smoothly before moving forward.
                  </p>
                </li>

                <li className="space-y-2">
                  <h3 className="font-semibold text-neutral-900 flex items-start gap-3">
                    <FaQuestionCircle className="w-5 h-5 text-primary mt-1" />
                    What kind of support do you provide?
                  </h3>
                  <p className="text-neutral-600 ml-8">
                    We provide ongoing support through email, chat, and regular check-ins. We're here to help your team succeed with AI, every step of the way.
                  </p>
                </li>

                <li className="space-y-2">
                  <h3 className="font-semibold text-neutral-900 flex items-start gap-3">
                    <FaQuestionCircle className="w-5 h-5 text-primary mt-1" />
                    What's included in the free audit?
                  </h3>
                  <p className="text-neutral-600 ml-8">
                    You'll receive a detailed analysis of your current workflows, three free AI workflows tailored to your business, and a consultation to discuss implementation.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h2 className="heading-lg mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-light/80 mb-8">
              Get started with a free AI workflow audit and see the impact for yourself
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/audit" 
                className="btn-primary w-full sm:w-auto"
              >
                Get Free AI Workflow Audit
              </Link>
              <Link 
                href="/pricing" 
                className="btn-secondary w-full sm:w-auto"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
