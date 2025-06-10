'use client';

import React from 'react';
import { FaRocket, FaHeart, FaLightbulb, FaUsers, FaTools, FaHandshake } from 'react-icons/fa';
import Link from 'next/link';
import motion from '../components/MotionWrapper';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-white relative overflow-hidden pb-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50"></div>
        <div className="container-custom relative">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl text-neutral-900 mb-6">
              Building AI Solutions for Real People
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Hi, I'm <a href="https://www.linkedin.com/in/griffin-arkilic/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">Griffin</a>. I built Solution Threads because I believe AI should work for people, not the other way around.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="heading-lg text-neutral-900 mb-6">The Problem I Saw</h2>
              <p className="text-lg text-neutral-600 mb-4">
                After years of working with businesses on their AI implementations, I kept seeing the same thing: big companies building fancy AI systems that looked impressive but didn't actually help real people get their work done.
              </p>
              <p className="text-lg text-neutral-600">
                Too often, the focus was on the tech, not the people using it. These expensive systems would just sit there, while teams kept running into the same old headaches.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="heading-lg text-neutral-900 mb-6">The Solution Threads Approach</h2>
              <p className="text-lg text-neutral-600 mb-4">
                I created Solution Threads with a simple philosophy: start with the human, not the AI. Every thread we build begins with understanding your team's needs, challenges, and goals.
              </p>
              <p className="text-lg text-neutral-600 mb-4">
                Instead of complex systems that require technical expertise, we build simple, step-by-step processes that anyone can follow. The AI is there to help, not to replace human judgment or creativity.
              </p>
              <p className="text-lg text-neutral-600">
                The result? Solutions that actually get used, problems that actually get solved, and teams that feel empowered rather than overwhelmed.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="heading-lg text-neutral-900 mb-6">Why We're Different</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-neutral-50 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaHeart className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-neutral-900">Human-First Design</h3>
                  </div>
                  <p className="text-neutral-600">
                    We start with your team's needs and build solutions that enhance their work, not complicate it.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-neutral-50 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaLightbulb className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-neutral-900">Simple Solutions</h3>
                  </div>
                  <p className="text-neutral-600">
                    No complex tech talk or overwhelming systems. Just clear, actionable steps that anyone can follow.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-neutral-50 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaUsers className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-neutral-900">Small Business Focus</h3>
                  </div>
                  <p className="text-neutral-600">
                    We work with businesses that big tech companies ignore, solving real problems for real teams.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-neutral-50 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <FaTools className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-neutral-900">Practical Implementation</h3>
                  </div>
                  <p className="text-neutral-600">
                    We don't just design solutions – we help you implement them and make them work for your team.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="heading-lg text-neutral-900 mb-6">Our Promise</h2>
              <p className="text-lg text-neutral-600 mb-4">
                At Solution Threads, we're not just building AI solutions – we're building better ways of working. We believe that technology should make life easier, not more complicated.
              </p>
              <p className="text-lg text-neutral-600">
                Whether you're taking your first steps with AI or looking to transform your entire business, we're here to help you do it in a way that works for your team.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="heading-lg text-neutral-900 mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-neutral-600 mb-8">
                Let's work together to build AI solutions that actually work for your team.
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center"
              >
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  View Our Solutions
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 