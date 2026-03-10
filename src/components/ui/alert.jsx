import React from 'react';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

const icons = {
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info
};

const variants = {
  success: 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  error: 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200',
  info: 'bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
};

export const Alert = ({ children, variant = 'info', className }) => {
  const Icon = icons[variant];

  return (
    <div className={cn('flex items-start p-4 rounded-lg', variants[variant], className)}>
      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
};