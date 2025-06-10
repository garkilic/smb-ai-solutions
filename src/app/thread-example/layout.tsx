import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thread Example | Solution Threads',
  description: 'See how Solution Threads transforms your business operations with AI-powered process automation and standardization.',
};

export default function ThreadExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 