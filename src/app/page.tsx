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
              Your team's time is too valuable for repetitive work.
            </h1>
            <p className="text-xl text-light/80 mb-8">
              Most companies give their employees tools like ChatGPT — but never teach them how to actually use them effectively. We help small teams make AI specific, repeatable, and practical.
            </p>
            <FormModalWrapper />
            <p className="microcopy">Takes 2–3 minutes. No calls required.</p>
            
            <div className="mt-12 p-6 bg-dark-card rounded-xl border border-dark-border">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="w-6 h-6 text-neon" />
                <h3 className="heading-md">What you get in the free AI assessment:</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Time-saving opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Real examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Role-specific prompts</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-5 h-5 text-neon" />
                  <span className="text-light/70">Implementation plan</span>
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
                  <h3 className="heading-md">Enterprise Impact</h3>
                </div>
                <p className="text-light/70">
                  We've implemented AI systems across large organizations, optimizing sales, support, and operations.
                </p>
              </div>
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="w-6 h-6 text-neon" />
                  <h3 className="heading-md">500+ Hours Saved</h3>
                </div>
                <p className="text-light/70">
                  Our automations have saved over 500 hours per month for enterprise clients.
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
              A simple, fast process that meets you where you are. Everything is async, tailored to your workflows.
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

      {/* Pricing Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <FaChartLine className="w-12 h-12 text-neon" />
            </div>
            <h2 className="heading-lg mb-6">What's It Cost to Save 5–10 Hours a Week?</h2>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
              Clear deliverables, no fluff. We make your existing AI tools actually useful.
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
            <button className="btn-secondary group">
              View Our Plans
              <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
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
          <h2 className="heading-lg mb-6">Let's Make AI Actually Work for Your Team</h2>
          <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
            No sales pitch, no bloated strategy docs. Just a real plan for real results.
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
