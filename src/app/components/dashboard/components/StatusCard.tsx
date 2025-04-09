import { FC } from 'react';
import { StatusCardProps } from '@/app/types/dashboard';
import { COLORS } from '@/app/constants/dashboard';

export const StatusCard: FC<StatusCardProps> = ({ title, value, status = 'success' }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return COLORS.SUCCESS;
      case 'warning':
        return COLORS.WARNING;
      case 'error':
        return COLORS.ERROR;
      default:
        return COLORS.GRAY;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col h-full">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <p className="text-2xl font-bold" style={{ color: getStatusColor() }}>
        {value}
      </p>
    </div>
  );
}; 