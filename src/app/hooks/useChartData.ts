import { useMemo } from 'react';
import { ChartData } from '@/app/types/dashboard';
import { CHART_DATA } from '@/app/constants/dashboard';

export const useChartData = () => {
  const processedData = useMemo(() => {
    return CHART_DATA.map((item) => ({
      ...item,
      value1: Number(item.value1),
      value2: Number(item.value2),
      value3: Number(item.value3),
    }));
  }, []);

  const getMaxValue = useMemo(() => {
    return Math.max(
      ...processedData.map((item) => 
        Math.max(item.value1, item.value2, item.value3)
      )
    );
  }, [processedData]);

  const formatTooltipValue = (value: number) => {
    return `${value}€`;
  };

  return {
    data: processedData,
    maxValue: getMaxValue,
    formatTooltipValue,
  };
}; 