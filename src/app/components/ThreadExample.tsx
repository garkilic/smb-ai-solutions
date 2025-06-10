import React from 'react';
import { FaInfoCircle, FaTable, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import StepTable from './StepTable';

export default function ThreadExample() {
  const steps = [
    {
      number: 1,
      task: 'Analyze content and map to platforms',
      ai: true,
      human: true
    },
    {
      number: 2,
      task: 'Generate content drafts',
      ai: true,
      human: true
    },
    {
      number: 3,
      task: 'Review and refine content',
      ai: false,
      human: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-neutral-800">AI Content Repurposing Thread</h2>
        <p className="text-neutral-600 mt-1">
          Transform one piece of content into multiple formats across all your marketing channels
        </p>
      </div>

      <StepTable title="Quick Overview" steps={steps} />

      <div className="flex justify-center">
        <Link 
          href="/thread-example" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          View Full Example
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
} 