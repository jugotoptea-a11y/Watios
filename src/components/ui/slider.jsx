import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export const Slider = ({ 
  min = 0, 
  max = 100, 
  value = 50, 
  onChange,
  className 
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className={cn('w-full', className)}>
      <input
        type="range"
        min={min}
        max={max}
        value={currentValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
        <span>{min}</span>
        <span>{currentValue}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};