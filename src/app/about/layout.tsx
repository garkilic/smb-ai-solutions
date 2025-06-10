import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Solution Threads',
  description: 'Learn about Solution Threads and our human-first approach to AI implementation. We build simple, effective solutions that work for real people.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 