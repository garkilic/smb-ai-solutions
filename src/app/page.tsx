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
      <section className="section-padding bg-gradient-to-b from-neutral to-neutral-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="heading-xl text-light-brighter mb-4 sm:mb-6"
            >
              AI Implementation That Actually Works
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-light/80 mb-8 max-w-2xl"
            >
              No consultants, no classes, no unnecessary tools.
              <br />
              Just clear AI workflows that your team can start using today.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <FormModalWrapper buttonText="Get Your Free AI Workflow Audit" />
              <p className="microcopy mt-2">Takes 2–3 minutes. No technical knowledge required.</p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center items-center gap-8 mt-8"
            >
              <div className="flex items-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-light/80">Ready to help small businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-light/80">Proven AI implementation process</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem-Solution Section */}
      <section className="section-padding bg-neutral">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col h-full"
            >
              <div className="flex-grow">
                <h2 className="heading-lg mb-6 text-white">The Problem</h2>
                <p className="text-lg text-light/80 mb-6">
                  You've tried learning AI tools, but there's too much to know. Your team struggles to implement them effectively, and you're not seeing the promised results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-light/80">Inconsistent results from AI tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-light/80">Team members can't reliably use AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-light/80">No clear process for AI implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-light/80">Too many tools to learn and manage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-1" />
                    <span className="text-light/80">Wasted time on trial and error</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 flex flex-col h-full"
            >
              <div className="flex-grow">
                <h2 className="heading-lg mb-6 text-white">Our Solution</h2>
                <p className="text-lg text-light/80 mb-6">
                  We handle all the tools and processes for you. Your team just needs to execute. Simple, clear AI workflows that deliver real results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                    <span className="text-light/80">Ready-to-use AI workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                    <span className="text-light/80">No technical setup required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                    <span className="text-light/80">Immediate value from day one</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaFileAlt className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-white">See It In Action</h3>
                </div>
                <p className="text-light/80 mb-4">
                  Check out how we transformed a complex content creation process into a simple, repeatable AI workflow.
                </p>
                <Link 
                  href="/thread-example" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  View Example Workflow
                  <FaArrowRight className="w-4 h-4" />
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
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">Simple 3-Step Process</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              We provide maximum value upfront, making it easy to see the impact before committing
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="space-y-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm w-[500px] min-h-[180px] flex flex-col">
                      <h3 className="font-semibold text-neutral-900 mb-4 text-center">Quick Assessment</h3>
                      <ul className="space-y-3 flex-grow">
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">Fill out a brief questionnaire about your business needs</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">15-minute call with our founder to understand your goals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm w-[500px] min-h-[180px] flex flex-col">
                      <h3 className="font-semibold text-neutral-900 mb-4 text-center">Free Implementation</h3>
                      <ul className="space-y-3 flex-grow">
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">Receive a detailed audit of your current workflows</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">Get three popular AI threads you can use right away</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">Consultation to discuss implementation and results</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm w-[500px] min-h-[180px] flex flex-col">
                      <h3 className="font-semibold text-neutral-900 mb-4 text-center">Full Implementation</h3>
                      <ul className="space-y-3 flex-grow">
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">If you love the results, we implement your complete AI system</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">Ongoing support and optimization</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-neutral-600">Regular check-ins to ensure success</span>
                        </li>
                      </ul>
                    </div>
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
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">Built for Small Businesses</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              We understand the unique challenges small businesses face with AI adoption
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/20"
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
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">Common Questions</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Everything you need to know about our AI implementation process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-neutral-200 shadow-lg"
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

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="heading-lg text-white mb-6"
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-neutral-300 mb-8"
            >
              Start with a free audit and three AI workflows. No strings attached.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FormModalWrapper buttonText="Get Your Free AI Workflow Audit" />
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 border border-white/20 text-base sm:text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  View Pricing
                </Link>
              </div>
              <p className="text-sm text-neutral-400">No credit card required. Takes 2-3 minutes.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
