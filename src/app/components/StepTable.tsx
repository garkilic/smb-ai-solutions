import React from 'react';
import { FaTable, FaCheck, FaTimes } from 'react-icons/fa';

interface Step {
  number: number;
  task: string;
  ai: boolean;
  human: boolean;
}

interface StepTableProps {
  title: string;
  steps: Step[];
}

export default function StepTable({ title, steps }: StepTableProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-neutral-800 mb-2 flex items-center gap-2">
        <FaTable className="w-5 h-5 text-primary" />
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-neutral-200 rounded-lg">
          <thead>
            <tr className="bg-neutral-50">
              <th className="px-4 py-2 text-left text-neutral-800">Step</th>
              <th className="px-4 py-2 text-left text-neutral-800">Task</th>
              <th className="px-4 py-2 text-center text-neutral-800">AI</th>
              <th className="px-4 py-2 text-center text-neutral-800">Human</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((step) => (
              <tr key={step.number} className="border-t border-neutral-200">
                <td className="px-4 py-2 text-primary font-medium">{step.number}</td>
                <td className="px-4 py-2">
                  <div className="text-sm text-neutral-600">
                    {step.task}
                  </div>
                </td>
                <td className="px-4 py-2 text-center">
                  {step.ai ? (
                    <FaCheck className="inline text-green-500 w-5 h-5" title="AI" />
                  ) : (
                    <FaTimes className="inline text-red-400 w-5 h-5" title="No AI" />
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  {step.human ? (
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
    </div>
  );
} 