import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`glass-panel rounded-2xl p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-white/90">{title}</h3>
      )}
      {children}
    </div>
  );
};
