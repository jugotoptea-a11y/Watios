import React from 'react';
import { cn } from '../../lib/utils';

export const Table = ({ children, className }) => {
  return (
    <div className="overflow-x-auto">
      <table className={cn('w-full text-sm', className)}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return <thead className="bg-gray-50 dark:bg-gray-700">{children}</thead>;
};

export const TableBody = ({ children }) => {
  return <tbody className="divide-y divide-gray-200 dark:divide-gray-700">{children}</tbody>;
};

export const TableRow = ({ children, className }) => {
  return <tr className={cn('hover:bg-gray-50 dark:hover:bg-gray-700', className)}>{children}</tr>;
};

export const TableHead = ({ children, className }) => {
  return (
    <th className={cn('px-4 py-3 text-left font-medium text-gray-600 dark:text-gray-300', className)}>
      {children}
    </th>
  );
};

export const TableCell = ({ children, className }) => {
  return <td className={cn('px-4 py-3', className)}>{children}</td>;
};