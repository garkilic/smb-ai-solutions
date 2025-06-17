'use client';

import React from 'react';
import { FaInfoCircle, FaTable, FaClipboardList, FaRobot, FaUser, FaCalendarAlt, FaCheckCircle, FaTools, FaExclamationTriangle, FaArrowLeft, FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import motion from '../components/MotionWrapper';

export default function ThreadExamplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              See our Solution Threads in action
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
              Watch how Solution Threads transforms a complex marketing process into a streamlined, AI-powered workflow.
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
                View our Pricing Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Process Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Before & After Solution Threads
          </h2>
          <p className="text-xl text-neutral-600">
            See how we transformed a complex marketing process into a streamlined workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Before */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Before Solution Threads</h3>
            <div className="space-y-6">
              {[
                {
                  icon: FaTimes,
                  title: "Manual Process Management",
                  description: "Team members had to remember and follow complex processes from memory or scattered documentation."
                },
                {
                  icon: FaTimes,
                  title: "Inconsistent Execution",
                  description: "Different team members followed different steps, leading to varying results and quality."
                },
                {
                  icon: FaTimes,
                  title: "Time-Consuming Training",
                  description: "New team members required extensive training to learn and remember all process steps."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <item.icon className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">After Solution Threads</h3>
            <div className="space-y-6">
              {[
                {
                  icon: FaCheck,
                  title: "AI-Guided Workflow",
                  description: "Team members follow a clear, step-by-step process guided by AI, ensuring consistency and quality."
                },
                {
                  icon: FaCheck,
                  title: "Standardized Execution",
                  description: "Every team member follows the same process, delivering consistent, high-quality results."
                },
                {
                  icon: FaCheck,
                  title: "Instant Onboarding",
                  description: "New team members can start following processes immediately with AI guidance, reducing training time."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <item.icon className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Thread Example */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto hover:shadow-xl transition-shadow"
      >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-800">AI Content Repurposing Thread – Full Example</h2>
            <p className="text-neutral-600 mt-1">
              A step-by-step, best-practices guide for transforming a single piece of content into multiple formats across all your marketing channels.
            </p>
          </div>

          {/* Quick Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Quick Overview</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-2 font-semibold text-neutral-700">Step</th>
                  <th className="py-2 px-2 font-semibold text-primary text-center">AI</th>
                  <th className="py-2 px-2 font-semibold text-primary text-center">Human</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { step: 'Content Analysis & Mapping', ai: true, human: true },
                  { step: 'Draft Creation', ai: true, human: true },
                  { step: 'Review & Edit', ai: false, human: true },
                  { step: 'Visual Creation', ai: true, human: true },
                  { step: 'Schedule & Publish', ai: true, human: true },
                ].map((row, idx) => (
                  <tr key={row.step} className={idx % 2 === 0 ? 'bg-neutral-50' : ''}>
                    <td className="py-2 px-2 text-neutral-800">{row.step}</td>
                    <td className="py-2 px-2 text-center">
                      {row.ai ? (
                        <FaCheck className="inline text-green-500 w-5 h-5" title="AI" />
                      ) : (
                        <FaTimes className="inline text-red-400 w-5 h-5" title="No AI" />
                      )}
                    </td>
                    <td className="py-2 px-2 text-center">
                      {row.human ? (
                        <FaCheck className="inline text-green-500 w-5 h-5" title="Human" />
                      ) : (
                        <FaTimes className="inline text-red-400 w-5 h-5" title="No Human" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <FaUser className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-800">Author</h3>
                <p className="text-neutral-600">Content Team</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <FaCalendarAlt className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-800">Last Updated</h3>
                <p className="text-neutral-600">March 15, 2024</p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <FaInfoCircle className="w-5 h-5 text-primary" />
              Purpose
            </h3>
            <p className="text-neutral-600">
              This thread details how to systematically repurpose a single piece of content (such as a blog post) into a suite of assets for social, email, and video. It ensures consistent messaging, maximizes content ROI, and maintains brand quality across all platforms.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <FaCheckCircle className="w-5 h-5 text-primary" />
              Prerequisites
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-medium text-neutral-800 mb-2">Tools Required</h4>
                <ul className="text-neutral-600 space-y-1">
                  <li>• ChatGPT Plus (for content generation)</li>
                  <li>• Canva Pro (for visual creation)</li>
                  <li>• Buffer or Hootsuite (for scheduling)</li>
                  <li>• Grammarly (for review)</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-medium text-neutral-800 mb-2">Accounts Needed</h4>
                <ul className="text-neutral-600 space-y-1">
                  <li>• ChatGPT Plus Account</li>
                  <li>• Canva Pro Subscription</li>
                  <li>• Buffer/Hootsuite Business Plan</li>
                  <li>• Grammarly Premium</li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h4 className="font-medium text-neutral-800 mb-2">Templates & Guides</h4>
                <ul className="text-neutral-600 space-y-1">
                  <li>• Content Calendar Template</li>
                  <li>• Brand Voice Guide</li>
                  <li>• Platform-Specific Guidelines</li>
                  <li>• Content Performance Metrics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 1: Content Analysis & Mapping */}
          <div className="mb-10">
            <h3 className="font-semibold text-primary text-xl mb-2 flex items-center gap-2">
              <FaClipboardList className="w-5 h-5 text-primary" />
              Step 1: Content Analysis & Mapping
            </h3>
            <p className="text-neutral-700 mb-2">Use this prompt to extract all possible value from your source content and plan for repurposing:</p>
            <div className="bg-neutral-50 p-4 rounded-lg border text-sm mb-2">
              <strong className="text-neutral-900">Prompt:</strong>
              <pre className="whitespace-pre-wrap text-neutral-800 mt-2">{`
You are a senior content strategist. Given the following blog post, create a detailed repurposing plan:

1. Extract 5-7 key messages, unique insights, and any data/statistics.
2. For each platform (LinkedIn, Twitter, Instagram, Email, YouTube):
   - Suggest 2-3 content types (e.g., article, thread, carousel, video, newsletter)
   - Write a one-sentence summary for each content type
   - Identify the target audience and main call to action
3. Recommend a posting schedule and cross-promotion strategy.
4. List any potential visual assets needed.

Blog Post: [Paste content here]
`}</pre>
            </div>
            <div className="mt-2">
              <strong>Human Review Checklist:</strong>
              <ul className="list-disc ml-6 text-neutral-700">
                <li>Are the key messages accurate and on-brand?</li>
                <li>Are the platform suggestions appropriate for our audience?</li>
                <li>Is the cross-promotion strategy realistic?</li>
                <li>Are visual asset needs clear?</li>
              </ul>
            </div>
          </div>

          {/* Step 2: Draft Creation */}
          <div className="mb-10">
            <h3 className="font-semibold text-primary text-xl mb-2 flex items-center gap-2">
              <FaClipboardList className="w-5 h-5 text-primary" />
              Step 2: Draft Creation (Social, Email, Video)
            </h3>
            <p className="text-neutral-700 mb-2">Generate high-quality, platform-optimized drafts for each channel:</p>
            <div className="bg-neutral-50 p-4 rounded-lg border text-sm mb-2">
              <strong className="text-neutral-900">Prompt:</strong>
              <pre className="whitespace-pre-wrap text-neutral-800 mt-2">{`
You are a professional content creator. For each key message and platform, generate:

- A draft post (or script) tailored to the platform's best practices
- 2 headline/title variations
- 1-2 calls to action
- A/B test options (e.g., different hooks, formats)
- Hashtags, mentions, and media suggestions

Include:
- Brand voice and tone guidance
- Platform-specific formatting (character limits, hashtags, etc.)
- Suggestions for visuals or supporting media

Example Input:
Key Message: [Insert]
Platform: LinkedIn
Content Type: Article

Example Output:
- Draft Article (600-800 words)
- 2 Headlines
- 2 CTAs
- Visual/media suggestions
`}</pre>
            </div>
            <div className="mt-2">
              <strong>Human Review Checklist:</strong>
              <ul className="list-disc ml-6 text-neutral-700">
                <li>Is the draft on-brand and clear?</li>
                <li>Are all platform requirements met?</li>
                <li>Are A/B options and CTAs strong?</li>
                <li>Are visual/media suggestions actionable?</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Review & Edit */}
          <div className="mb-10">
            <h3 className="font-semibold text-primary text-xl mb-2 flex items-center gap-2">
              <FaClipboardList className="w-5 h-5 text-primary" />
              Step 3: Review & Edit
            </h3>
            <p className="text-neutral-700 mb-2">Ensure all content is high quality, on-brand, and ready for publishing:</p>
            <div className="bg-neutral-50 p-4 rounded-lg border text-sm mb-2">
              <strong className="text-neutral-900">Checklist:</strong>
              <ul className="list-disc ml-6 text-neutral-800">
                <li>Brand voice and tone consistency</li>
                <li>Grammar, spelling, and clarity</li>
                <li>Platform formatting and requirements</li>
                <li>CTA effectiveness</li>
                <li>Visual/media alignment</li>
                <li>Compliance (legal, copyright, accessibility)</li>
              </ul>
            </div>
          </div>

          {/* Step 4: Visual Creation */}
          <div className="mb-10">
            <h3 className="font-semibold text-primary text-xl mb-2 flex items-center gap-2">
              <FaClipboardList className="w-5 h-5 text-primary" />
              Step 4: Visual Creation
            </h3>
            <p className="text-neutral-700 mb-2">Create or prompt for all required visuals, optimized for each platform:</p>
            <div className="bg-neutral-50 p-4 rounded-lg border text-sm mb-2">
              <strong className="text-neutral-900">Prompt:</strong>
              <pre className="whitespace-pre-wrap text-neutral-800 mt-2">{`
You are a visual content designer. For each content piece, provide:

- Visual concept and theme (aligned with brand guidelines)
- Color palette and typography
- Platform-specific dimensions and file types
- Suggestions for imagery, icons, or video
- Accessibility considerations (contrast, alt text)

Example Input:
Content: LinkedIn Article
Key Message: [Insert]

Example Output:
- Visual concept: Modern, clean, blue/white palette
- Image: Custom illustration of [topic]
- Dimensions: 1200x627px (LinkedIn)
- Alt text: "Illustration of [topic] for LinkedIn article"
`}</pre>
            </div>
            <div className="mt-2">
              <strong>Human Review Checklist:</strong>
              <ul className="list-disc ml-6 text-neutral-700">
                <li>Are visuals on-brand and high quality?</li>
                <li>Are all accessibility requirements met?</li>
                <li>Are file types and sizes correct for each platform?</li>
              </ul>
            </div>
          </div>

          {/* Step 5: Schedule & Publish */}
          <div className="mb-10">
            <h3 className="font-semibold text-primary text-xl mb-2 flex items-center gap-2">
              <FaClipboardList className="w-5 h-5 text-primary" />
              Step 5: Schedule & Publish
            </h3>
            <p className="text-neutral-700 mb-2">Distribute content across all channels and monitor performance:</p>
            <div className="bg-neutral-50 p-4 rounded-lg border text-sm mb-2">
              <strong className="text-neutral-900">Checklist:</strong>
              <ul className="list-disc ml-6 text-neutral-800">
                <li>Content scheduled for optimal times</li>
                <li>Cross-promotion set up</li>
                <li>Tracking/analytics enabled</li>
                <li>Initial engagement monitored</li>
                <li>Performance report generated</li>
              </ul>
            </div>
          </div>

          {/* AI-Human Collaboration */}
          <div className="mb-10">
            <h3 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <FaRobot className="w-5 h-5 text-primary" />
              AI-Human Collaboration
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-neutral-800 mb-2">AI's Role:</h4>
                  <ul className="text-neutral-600 space-y-2">
                    <li>Initial content analysis and mapping</li>
                    <li>Draft content generation</li>
                    <li>Visual content suggestions</li>
                    <li>Platform optimization</li>
                    <li>Performance predictions</li>
                    <li>A/B testing variations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 mb-2">Human's Role:</h4>
                  <ul className="text-neutral-600 space-y-2">
                    <li>Brand voice oversight</li>
                    <li>Quality control and editing</li>
                    <li>Strategic direction</li>
                    <li>Final approval</li>
                    <li>Performance analysis</li>
                    <li>Process improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices & Notes */}
          <div className="mb-8">
            <h3 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <FaExclamationTriangle className="w-5 h-5 text-primary" />
              Best Practices & Notes
            </h3>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <ul className="text-neutral-600 space-y-2">
                <li>Always review AI-generated content for accuracy and brand alignment</li>
                <li>Keep brand guidelines and voice guide updated</li>
                <li>Regularly update platform-specific requirements</li>
                <li>Monitor content performance and adjust strategy accordingly</li>
                <li>Maintain a feedback loop for continuous improvement</li>
                <li>Document learnings and update this thread as needed</li>
              </ul>
            </div>
          </div>
        </motion.div>
        </div>

      {/* CTA Section */}
      <div className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
            className="text-center"
      >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Ready to Transform Your Processes?
            </h2>
            <p className="text-xl text-neutral-600 mb-6 max-w-3xl mx-auto">
              Join the growing number of businesses using Solution Threads to streamline their operations and boost productivity.
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
                View our Pricing Plans
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 