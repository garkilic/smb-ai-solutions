import { FaRobot, FaUser, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function AIStepwiseExample() {
  return (
    <div className="bg-neutral-card rounded-xl border border-neutral-border p-8">
      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="w-6 h-6 text-primary" />
        <h3 className="heading-md">AI-Powered Content Creation Process</h3>
      </div>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">1</span>
          </div>
          <div className="flex-grow">
            <h4 className="text-light-brighter font-medium mb-2">Define Your Goal</h4>
            <div className="bg-neutral rounded-lg p-4 mb-2">
              <div className="flex items-start gap-3">
                <FaUser className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80">I need to create a blog post about "5 Ways AI Can Help Small Businesses Save Time"</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FaRobot className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80">I'll help you create a comprehensive blog post. Let's start by outlining the key points and structure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">2</span>
          </div>
          <div className="flex-grow">
            <h4 className="text-light-brighter font-medium mb-2">Create an Outline</h4>
            <div className="bg-neutral rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FaRobot className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80 mb-2">Here's a suggested outline:</p>
                  <ul className="list-disc list-inside text-light/70 space-y-1">
                    <li>Introduction: The Time-Saving Power of AI</li>
                    <li>Automated Customer Service</li>
                    <li>Streamlined Content Creation</li>
                    <li>Smart Data Analysis</li>
                    <li>Automated Task Management</li>
                    <li>Conclusion: Getting Started with AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">3</span>
          </div>
          <div className="flex-grow">
            <h4 className="text-light-brighter font-medium mb-2">Generate Content</h4>
            <div className="bg-neutral rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FaRobot className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80 mb-2">I'll generate the first section. Here's the introduction:</p>
                  <div className="bg-neutral-card rounded p-3 text-light/70">
                    <p>"In today's fast-paced business environment, time is your most valuable asset. Small business owners are constantly looking for ways to work smarter, not harder. Artificial Intelligence (AI) has emerged as a game-changing solution, offering powerful tools to automate routine tasks and boost productivity. In this article, we'll explore five practical ways AI can help your small business save time and focus on what matters most."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">4</span>
          </div>
          <div className="flex-grow">
            <h4 className="text-light-brighter font-medium mb-2">Review and Refine</h4>
            <div className="bg-neutral rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FaUser className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80">The introduction looks good, but can you make it more specific to small businesses in the service industry?</p>
                </div>
              </div>
            </div>
            <div className="bg-neutral rounded-lg p-4 mt-2">
              <div className="flex items-start gap-3">
                <FaRobot className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80 mb-2">Here's the revised introduction:</p>
                  <div className="bg-neutral-card rounded p-3 text-light/70">
                    <p>"For service-based small businesses, every minute spent on administrative tasks is a minute taken away from serving clients. In today's competitive market, efficiency isn't just an advantage—it's a necessity. Artificial Intelligence (AI) has become an essential tool for service businesses, offering practical solutions to automate routine tasks and enhance client experiences. In this article, we'll explore five specific ways AI can help your service business save time and deliver better results to your clients."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">5</span>
          </div>
          <div className="flex-grow">
            <h4 className="text-light-brighter font-medium mb-2">Finalize and Publish</h4>
            <div className="bg-neutral rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FaRobot className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-light/80">I'll continue generating the remaining sections following the same process. Would you like me to proceed with the next section?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="w-5 h-5 text-primary" />
          <p className="text-light/80">
            This stepwise process ensures consistent, high-quality content while saving you time. Each step is documented and can be automated further as needed.
          </p>
        </div>
      </div>
    </div>
  );
} 