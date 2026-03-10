import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export const Tabs = ({ children, defaultValue, className, onValueChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (onValueChange) onValueChange(value);
  };

  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, child => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, onTabChange: handleTabChange });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, onTabChange, className }) => {
  return (
    <div className={cn('flex space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800', className)}>
      {React.Children.map(children, child => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, { 
            isActive: child.props.value === activeTab,
            onClick: () => onTabChange(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
};

export const TabsTrigger = ({ children, value, isActive, onClick, className }) => {
  return (
    <button
      className={cn(
        'px-3 py-1.5 text-sm font-medium rounded-md transition-all',
        isActive 
          ? 'bg-white text-blue-600 shadow-sm dark:bg-gray-900 dark:text-blue-400' 
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, activeTab, className }) => {
  if (value !== activeTab) return null;
  
  return (
    <div className={cn('mt-4', className)}>
      {children}
    </div>
  );
};