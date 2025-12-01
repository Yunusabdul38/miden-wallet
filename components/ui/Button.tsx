import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-900/20 focus:ring-orange-500",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/10 focus:ring-white/50",
    outline: "border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 focus:ring-orange-500",
    ghost: "text-white/70 hover:text-white hover:bg-white/5 focus:ring-white/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white"></span>
      ) : null}
      {children}
    </button>
  );
};
