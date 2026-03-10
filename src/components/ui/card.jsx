import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-4',
        'dark:bg-gray-800',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3 className={cn('text-lg font-semibold', className)}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
};