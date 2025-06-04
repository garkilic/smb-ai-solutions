import { Metadata } from 'next';
import { 
  FaRocket, 
  FaTools, 
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaVideo,
  FaBook,
  FaChartLine,
  FaRobot,
  FaShieldAlt
} from 'react-icons/fa';
import FormModalWrapper from '@/components/FormModalWrapper';

export const metadata: Metadata = {
  title: 'Pricing | SMB AI Solutions',
  description: 'Simple, transparent pricing for AI workflow automation. Choose from our Workflow Jumpstart, Micro-Build, or Template Packs to transform your business operations.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon/5 to-transparent opacity-50"></div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-light-brighter mb-6">
              Transform Your Business Today
            </h1>
            <p className="text-xl text-light/80 mb-8">
              We don't believe in vague retainers, bloated software, or paying for complexity. We believe in leverage: less time spent, fewer steps repeated, more energy where it matters.
            </p>
            <div className="p-4 bg-dark-card rounded-lg border border-neon/20 mb-8">
              <p className="text-neon font-medium">
                Every offer is backed by our 30-day risk-free guarantee. If it doesn't save you time or make your workflow easier, we'll make it right or refund you. No fine print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
            {/* Workflow Jumpstart */}
            <div className="card p-8 relative overflow-visible group hover:border-neon/50 transition-all duration-300 flex flex-col">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-dark-card px-6 py-2 rounded-lg border border-neon/20 shadow-lg">
                <span className="text-neon font-medium">Most Popular</span>
              </div>
              <div className="mb-8 text-center">
                <h3 className="heading-lg mb-4">Workflow Jumpstart</h3>
                <div className="text-5xl font-bold text-light-brighter mb-4">$1,490</div>
                <p className="text-light/70 text-lg">Transform your business with AI-Powered Workflow Systems. We'll rebuild your core processes to be scalable, automated, and future-proof.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Complete workflow documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">AI integration at every step</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Automation implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Team training & support</span>
                </li>
              </ul>
              <div className="mb-8 text-center">
                <h4 className="text-neon font-medium mb-2">Perfect for:</h4>
                <p className="text-light/70">Businesses ready to transform their entire operation with scalable, AI-powered systems.</p>
              </div>
              <div className="text-center mt-auto">
                <FormModalWrapper buttonText="Start Your Transformation" />
              </div>
            </div>

            {/* Micro-Build */}
            <div className="card p-8 relative overflow-visible group hover:border-neon/50 transition-all duration-300 flex flex-col">
              <div className="mb-8 text-center">
                <h3 className="heading-lg mb-4">Micro-Build</h3>
                <div className="text-5xl font-bold text-light-brighter mb-4">$490</div>
                <p className="text-light/70 text-lg">Transform one critical workflow with an AI-Powered Workflow System. We'll optimize a single process that's draining your team's time.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Workflow documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">AI integration points</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Implementation support</span>
                </li>
              </ul>
              <div className="mb-8 text-center">
                <h4 className="text-neon font-medium mb-2">Perfect for:</h4>
                <p className="text-light/70">Teams with one specific workflow that needs optimization and automation.</p>
              </div>
              <div className="text-center mt-auto">
                <FormModalWrapper buttonText="Optimize One Workflow" />
              </div>
            </div>

            {/* Template Packs */}
            <div className="card p-8 relative overflow-visible group hover:border-neon/50 transition-all duration-300 flex flex-col">
              <div className="mb-8 text-center">
                <h3 className="heading-lg mb-4">Template Packs</h3>
                <div className="text-5xl font-bold text-light-brighter mb-4">$95</div>
                <p className="text-light/70 text-lg">Ready-to-use AI-Powered Workflow Systems. Implement immediately with complete documentation and AI integration.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Pre-built workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">AI integration guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Implementation guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                  <span className="text-light/70">Best practices</span>
                </li>
              </ul>
              <div className="mb-8 text-center">
                <h4 className="text-neon font-medium mb-2">Perfect for:</h4>
                <p className="text-light/70">Teams who want to get started quickly with proven, AI-powered workflows.</p>
              </div>
              <div className="text-center mt-auto">
                <FormModalWrapper buttonText="Get Started Now" />
              </div>
            </div>
          </div>

          {/* Retainer Option */}
          <div className="mt-16 p-8 bg-dark-card rounded-xl border border-neon/20 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FaRocket className="w-8 h-8 text-neon" />
              <h3 className="heading-lg">Need Ongoing Support?</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-light/80 mb-4">
                  Get a dedicated AI engineer at 1/100th the cost of hiring full-time. Perfect for teams who want continuous optimization and new implementations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                    <span className="text-light/70">Weekly optimization sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                    <span className="text-light/70">New workflow builds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-neon mt-1 flex-shrink-0" />
                    <span className="text-light/70">Priority support</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-light-brighter mb-4">$2,990<span className="text-xl">/mo</span></div>
                <FormModalWrapper buttonText="Get Your AI Engineer" />
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-16 p-8 bg-dark-card rounded-xl border border-neon/20 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <FaShieldAlt className="w-8 h-8 text-neon" />
              <h3 className="heading-lg">30-Day Risk-Free Guarantee</h3>
            </div>
            <p className="text-lg text-light/80">
              Every offer is backed by our 30-day risk-free guarantee. If you don't see clear time savings or workflow clarity, we'll fix it or refund it. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Not Ready Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-6">Not Ready Yet?</h2>
            <p className="text-xl text-light/80 mb-8">
              Start with the free AI Workflow Quiz. In less than 5 minutes, you'll get a personalized report with your AI Readiness Score, 2–3 workflow ideas, and clear next steps.
            </p>
            <p className="text-light/60 mb-8">
              No sales pressure — just practical recommendations.
            </p>
            <FormModalWrapper />
          </div>
        </div>
      </section>
    </main>
  );
} 