import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Solution Threads',
  description: 'Choose the perfect Solution Threads plan for your business. From starter to enterprise, find the right fit for your needs.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 