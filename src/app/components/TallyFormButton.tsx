'use client';

import React from 'react';

interface TallyFormButtonProps {
  buttonText: string;
  className?: string;
}

export default function TallyFormButton({ buttonText, className = '' }: TallyFormButtonProps) {
  const openTallyForm = () => {
    const returnUrl = encodeURIComponent(window.location.href);
    window.location.href = `https://tally.so/r/nWkADj?transparentBackground=1&returnUrl=${returnUrl}&showExitButton=1`;
  };

  return (
    <button onClick={openTallyForm} className={className}>
      {buttonText}
    </button>
  );
} 