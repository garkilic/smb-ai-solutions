import Image from "next/image";
import { 
  FaRobot, 
  FaClock, 
  FaChartLine, 
  FaUsers, 
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaBrain,
  FaTools,
  FaHandshake,
  FaRocket,
  FaUserTie,
  FaUsersCog,
  FaBuilding
} from 'react-icons/fa';
import FormModalWrapper from '@/components/FormModalWrapper';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon/5 to-transparent opacity-50"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-neon/10 rounded-full flex items-center justify-center animate-float">
                <FaRobot className="w-8 h-8 text-neon" />
              </div>
            </div>
            <h1 className="heading-xl text-light-brighter mb-6">
              Your Business Needs AI.<br />
              We Make It Simple.
            </h1>
            <p className="text-xl text-light/80 mb-8">
              AI isn't just for tech giants anymore. We help small businesses implement practical AI solutions that actually work. Get your free AI Readiness Assessment and discover how to stay ahead.
            </p>
            <div className="mb-8 p-4 bg-dark-card rounded-lg border border-neon/20">
              <p className="text-neon font-medium">
                "What was once impossible is now possible. What was once hard is now easy. And what was once easy is now obsolete."
              </p>
            </div>
            <FormModalWrapper />
            <p className="microcopy">Takes 2–3 minutes. No calls required.</p>
            
            <div className="mt-12 p-6 bg-dark-card rounded-xl border border-dark-border">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Your Free AI Readiness Assessment:</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">10x productivity opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Role-specific AI mastery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Implementation roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Future-proof strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FaChartLine className="w-8 h-8 text-neon" />
              <h2 className="heading-lg">Proven at Scale</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className="w-6 h-6 text-neon" />
                  <h3 className="heading-md">10x Impact</h3>
                </div>
                <p className="text-light/70">
                  We've helped businesses achieve 10x productivity gains by implementing AI-first workflows across their operations.
                </p>
              </div>
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="w-6 h-6 text-neon" />
                  <h3 className="heading-md">500+ Hours Saved</h3>
                </div>
                <p className="text-light/70">
                  Our AI implementations have transformed impossible tasks into daily operations, saving over 500 hours monthly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FaTools className="w-12 h-12 text-neon" />
            </div>
            <h2 className="heading-lg mb-6">How It Works</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              A rapid transformation process that meets you where you are. We don't just add AI—we rebuild your workflows for the future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="step-number">1</div>
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Quick Assessment</h3>
              </div>
              <p className="text-light/70 mb-4">
                Lightweight audit of your content and workflows to identify AI opportunities.
              </p>
              <div className="text-sm text-neon">
                → Fast, no-BS overview of time-saving opportunities
              </div>
            </div>

            <div className="feature-card">
              <div className="step-number">2</div>
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Personalized Plan</h3>
              </div>
              <p className="text-light/70 mb-4">
                Tailored report with prompts, templates, and clear next steps.
              </p>
              <div className="text-sm text-neon">
                → Mapped-out AI system for your business
              </div>
            </div>

            <div className="feature-card">
              <div className="step-number">3</div>
              <div className="flex items-center gap-3 mb-4">
                <FaHandshake className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Hands-On Support</h3>
              </div>
              <p className="text-light/70 mb-4">
                Async training, documentation, and implementation support.
              </p>
              <div className="text-sm text-neon">
                → Your embedded AI ops team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOP Process Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FaTools className="w-12 h-12 text-neon" />
            </div>
            <h2 className="heading-lg mb-6">We Build AI-Powered SOPs That Scale Your Business</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Semi-automated workflows that combine human insight with AI precision. Each SOP is designed to be teachable, repeatable, and partially automatable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="w-6 h-6 text-neon" />
                <h3 className="heading-md">1. Define Purpose</h3>
              </div>
              <p className="text-light/70">Clear goals and outcomes for each workflow, from content creation to client onboarding.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaTools className="w-6 h-6 text-neon" />
                <h3 className="heading-md">2. Tool Stack</h3>
              </div>
              <p className="text-light/70">Documented tools and inputs needed: Notion, Zapier, Airtable, ChatGPT, and more.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="w-6 h-6 text-neon" />
                <h3 className="heading-md">3. Step-by-Step</h3>
              </div>
              <p className="text-light/70">Clear, sequential steps with purpose, inputs, tools, actions, and expected outputs.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaRobot className="w-6 h-6 text-neon" />
                <h3 className="heading-md">4. AI Integration</h3>
              </div>
              <p className="text-light/70">Reusable prompt templates for ChatGPT, Claude, and API-connected assistants.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCheckCircle className="w-6 h-6 text-neon" />
                <h3 className="heading-md">5. Quality Control</h3>
              </div>
              <p className="text-light/70">QA checklists to verify AI output and human input at each step.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaRocket className="w-6 h-6 text-neon" />
                <h3 className="heading-md">6. Automation</h3>
              </div>
              <p className="text-light/70">Identified automation opportunities with Zapier, Make, and custom AI workflows.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaHandshake className="w-6 h-6 text-neon" />
                <h3 className="heading-md">7. Deliverables</h3>
              </div>
              <p className="text-light/70">Clear output destinations and next steps for each workflow.</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="w-6 h-6 text-neon" />
                <h3 className="heading-md">8. Best Practices</h3>
              </div>
              <p className="text-light/70">Documented edge cases, variations, and tips learned from experience.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-dark-card rounded-xl border border-neon/20">
            <div className="flex items-center gap-4">
              <FaRocket className="w-8 h-8 text-neon" />
              <p className="text-lg text-light/90">
                The result? Structured, teachable processes that reduce decision fatigue, speed up delivery, and create scalable systems that match your creative energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FaChartLine className="w-12 h-12 text-neon" />
            </div>
            <h2 className="heading-lg mb-6">What's It Cost to Future-Proof Your Business?</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Clear deliverables, no fluff. We help you become an AI-first business that stays ahead of the curve.
            </p>
          </div>

          <div className="value-callout mb-12">
            <div className="flex items-center gap-4">
              <FaLightbulb className="w-8 h-8 text-neon" />
              <p className="text-lg text-light/90">
                Most agencies charge $10K+ for vague AI strategy decks.
                We help your team work smarter — with less overhead, faster results.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaUserTie className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Solo Operators</h3>
              </div>
              <ul className="text-light/70 space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Async training
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Prompt libraries
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Usage guides
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaUsersCog className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Small Teams</h3>
              </div>
              <ul className="text-light/70 space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Collaborative onboarding
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Role-specific systems
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Team training
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBuilding className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Fast-Moving Companies</h3>
              </div>
              <ul className="text-light/70 space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Slack support
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Documentation
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-neon" />
                  Ongoing advisory
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/pricing" className="btn-secondary group inline-flex items-center">
              View Our Plans
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Offer Details Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FaCheckCircle className="w-12 h-12 text-neon" />
            </div>
            <h2 className="heading-lg mb-6">What's Included in Your Free Assessment</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Real suggestions, role-specific prompts, and an honest look at where AI can start saving you time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Workflow Audit</h3>
              </div>
              <p className="text-light/70">Detailed analysis of your current processes</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Time Savings</h3>
              </div>
              <p className="text-light/70">Realistic estimates of AI time savings</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaUsers className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Role-Based Prompts</h3>
              </div>
              <p className="text-light/70">Custom prompts for each role</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="w-6 h-6 text-neon" />
                <h3 className="heading-md">Maturity Score</h3>
              </div>
              <p className="text-light/70">AI usage assessment and growth plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-6">
            <FaRocket className="w-12 h-12 text-neon" />
          </div>
          <h2 className="heading-lg mb-6">Let's Transform Your Business with AI</h2>
          <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
            No sales pitch, no bloated strategy docs. Just a real plan to make your business AI-first and future-proof.
          </p>
          <FormModalWrapper />
          <p className="microcopy">Takes 2–3 minutes. No calls required.</p>
          
          <div className="mt-12 text-light/60">
            <p>Let me show you the value of working with me.</p>
            <p className="mt-2">— Griffin Arkilic</p>
          </div>
        </div>
      </section>
    </main>
  );
}
