import React from 'react';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  actionText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, actionText }) => {
  return (
    <div className="feature-card">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="heading-md">{title}</h3>
      </div>
      <p className="text-light/70 mb-4">
        {description}
      </p>
      {actionText && (
        <div className="text-sm text-primary">
          → {actionText}
        </div>
      )}
    </div>
  );
};

export default FeatureCard; 