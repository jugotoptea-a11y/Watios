export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const formatNumber = (num, decimals = 1) => {
  return Number(num).toFixed(decimals);
};

export const formatCurrency = (num) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }).format(num);
};

export const formatPercentage = (num) => {
  return `${Number(num).toFixed(1)}%`;
};