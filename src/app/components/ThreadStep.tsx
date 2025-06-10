import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

interface ThreadStepProps {
  number: number;
  title: string;
  description: string;
  prompt?: string;
  checklist?: string[];
}

export default function ThreadStep({ number, title, description, prompt, checklist }: ThreadStepProps) {
  return (
    <div className="mb-10">
      <h3 className="font-semibold text-primary text-xl mb-2 flex items-center gap-2">
        <FaClipboardList className="w-5 h-5 text-primary" />
        Step {number}: {title}
      </h3>
      <p className="text-neutral-700 mb-2">{description}</p>
      
      {prompt && (
        <div className="bg-neutral-50 p-4 rounded-lg border text-sm mb-2">
          <strong className="text-neutral-900">Prompt:</strong>
          <pre className="whitespace-pre-wrap text-neutral-800 mt-2">{prompt}</pre>
        </div>
      )}
      
      {checklist && (
        <div className="mt-2">
          <strong>Human Review Checklist:</strong>
          <ul className="list-disc ml-6 text-neutral-700">
            {checklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 