import { FC } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Table } from '../components/Table';
import { useChartData } from '@/app/hooks/useChartData';
import { COLORS, TABLE_COLUMNS } from '@/app/constants/dashboard';
import { LoanData } from '@/app/types/dashboard';

interface FinancialSectionProps {
  loanData: LoanData[];
}

export const FinancialSection: FC<FinancialSectionProps> = ({ loanData }) => {
  const { data, maxValue, formatTooltipValue } = useChartData();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">
        Informations financières
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique */}
        <div className="bg-white rounded-xl p-6 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                formatter={formatTooltipValue}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                }}
              />
              <Line
                type="monotone"
                dataKey="value1"
                stroke={COLORS.SUCCESS}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke={COLORS.PRIMARY}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="value3"
                stroke={COLORS.WARNING}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-xl p-6">
          <Table
            data={loanData}
            columns={TABLE_COLUMNS.FINANCIAL}
          />
        </div>
      </div>
    </div>
  );
}; 