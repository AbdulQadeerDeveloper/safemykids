// src/components/ui/Input.js
import React from 'react';
import { Mail } from 'lucide-react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="relative flex-1">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <div className="w-5 h-5 bg-blue-100 rounded-sm flex items-center justify-center">
            <Mail className="w-3 h-3 text-blue-600" />
          </div>
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all bg-white/90 backdrop-blur-sm ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;