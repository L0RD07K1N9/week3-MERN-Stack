import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with different variants
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, danger)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {function} props.onClick - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} - Button component
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  children,
  className = '',
  ...rest 
}) => {
  // Base classes with animation and smooth transitions
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out animate-fade-in';

  // Variant classes with gradients and interactive effects
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 hover:scale-105 hover:-translate-y-1 transform',
    secondary: 'bg-gradient-to-r from-gray-200 to-gray-400 text-gray-800 hover:from-gray-300 hover:to-gray-500 hover:scale-105 hover:-translate-y-1 transform',
    danger: 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 hover:scale-105 hover:-translate-y-1 transform animate-pulse',
    success: 'bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 hover:scale-105 hover:-translate-y-1 transform',
    warning: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 hover:-translate-y-1 transform',
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2',
    lg: 'px-7 py-3 text-lg',
  };

  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${disabledClasses} ${className}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button; 