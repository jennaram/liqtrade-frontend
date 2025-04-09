import { FC } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Label,
} from 'recharts';
import { LoanData } from '@/app/types/dashboard';

const data = [
  { name: '1', value1: 10, value2: 2, value3: 2 },
  { name: '5', value1: 22, value2: 8, value3: 5 },
  { name: '10', value1: 15, value2: 15, value3: 8 },
  { name: '15', value1: 30, value2: 20, value3: 10 },
  { name: '20', value1: 42, value2: 25, value3: 20 },
  { name: '25', value1: 50, value2: 35, value3: 30 },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    stroke: string;
    fill: string;
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
        <p className="text-sm text-gray-600">{`${payload[0].value}€`}</p>
      </div>
    );
  }
  return null;
};

interface FinancialSectionProps {
  loanData: LoanData[];
}

export const FinancialSection: FC<FinancialSectionProps> = ({ loanData }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">
        Informations financières
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Graphique */}
        <div className="md:col-span-2 bg-white rounded-xl p-6 h-[300px] flex flex-col">
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <defs>
                    <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#4ADE80" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                    ticks={[0, 10, 20, 30, 40, 50]}
                    domain={[0, 50]}
                    tickFormatter={(value) => `${value}K`}
                    width={45}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    x="15"
                    y={30}
                    stroke="#6B7280"
                    strokeDasharray="3 3"
                  >
                    <Label
                      value="2973€"
                      position="top"
                      offset={10}
                      fill="white"
                      fontSize={12}
                    >
                      <g>
                        <rect width="50" height="24" x="-25" y="-12" fill="black" rx="4"/>
                        <text x="0" y="4" textAnchor="middle" fill="white">2973€</text>
                      </g>
                    </Label>
                  </ReferenceLine>
                  <Line 
                    type="monotone" 
                    dataKey="value1" 
                    stroke="#4ADE80" 
                    strokeWidth={2} 
                    dot={false}
                    activeDot={{ r: 4, fill: "#4ADE80" }}
                    fill="url(#colorValue1)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value2" 
                    stroke="#60A5FA" 
                    strokeWidth={2} 
                    dot={false}
                    activeDot={{ r: 4, fill: "#60A5FA" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value3" 
                    stroke="#F97316" 
                    strokeWidth={2} 
                    dot={false}
                    activeDot={{ r: 4, fill: "#F97316" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-2 space-x-8">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4ADE80] mr-2"></div>
                <span className="text-sm text-gray-600">Lorem ipsum</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#60A5FA] mr-2"></div>
                <span className="text-sm text-gray-600">Lorem ipsum</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#F97316] mr-2"></div>
                <span className="text-sm text-gray-600">Lorem ipsum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau */}
        <div className="md:col-span-3 bg-white rounded-xl p-6 h-[300px] flex flex-col">
          <div className="grid grid-cols-4 mb-2">
            <button className="bg-gray-100 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200 text-gray-900 rounded-l-lg text-sm font-medium py-2 border-r border-white cursor-pointer">
              Euribor1w
            </button>
            <button className="bg-gray-100 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200 text-gray-500 text-sm font-medium py-2 border-r border-white cursor-pointer">
              Euribor2w
            </button>
            <button className="bg-gray-100 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200 text-gray-500 text-sm font-medium py-2 border-r border-white cursor-pointer">
              Euribor3w
            </button>
            <button className="bg-gray-100 hover:bg-indigo-100 hover:text-indigo-900 transition-colors duration-200 text-gray-500 rounded-r-lg text-sm font-medium py-2 cursor-pointer">
              Average Sector Spread
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full h-full text-xs">
              <colgroup>
                <col className="w-[15%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
              </colgroup>
              <thead>
                <tr className="border-b">
                  <th className="text-left py-1 font-medium text-blue-900 text-xs">
                    Tenor
                  </th>
                  <th className="text-center py-1 font-medium text-blue-900 text-xs">
                    Market Place
                  </th>
                  <th className="text-center py-1 font-medium text-blue-900 text-xs whitespace-nowrap">
                    Market Risk Free<br/>Date
                  </th>
                  <th className="text-center py-1 font-medium text-blue-900 text-xs whitespace-nowrap">
                    Market Risk Free<br/>Premium
                  </th>
                  <th className="text-center py-1 font-medium text-blue-900 text-xs">
                    Change %
                  </th>
                  <th className="text-center py-1 font-medium text-blue-900 text-xs">
                    Variation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2">7 DAYS</td>
                  <td className="border-b py-2 text-center">0.0000</td>
                  <td className="border-b py-2 text-center">0</td>
                  <td className="border-b py-2 text-center">0.0000</td>
                  <td className="border-b py-2 text-center">0.0000</td>
                  <td className="border-b py-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border-b py-2">30 DAYS</td>
                  <td className="border-b py-2 text-center">0.0000</td>
                  <td className="border-b py-2 text-center">0</td>
                  <td className="border-b py-2 text-center">0.0000</td>
                  <td className="border-b py-2 text-center">0.0000</td>
                  <td className="border-b py-2 text-center">9</td>
                </tr>
                <tr>
                  <td className="border-b py-2">90 DAYS</td>
                  <td className="border-b py-2 text-center">0.0300</td>
                  <td className="border-b py-2 text-center">0.02345</td>
                  <td className="border-b py-2 text-center">0.0300</td>
                  <td className="border-b py-2 text-center">0.0300</td>
                  <td className="border-b py-2 text-center">0.02345</td>
                </tr>
                <tr>
                  <td className="border-b py-2">180 DAYS</td>
                  <td className="border-b py-2 text-center">0.03500</td>
                  <td className="border-b py-2 text-center">0.03500</td>
                  <td className="border-b py-2 text-center">0.03500</td>
                  <td className="border-b py-2 text-center">0.03500</td>
                  <td className="border-b py-2 text-center">0.03500</td>
                </tr>
                <tr>
                  <td className="py-2">360 DAYS</td>
                  <td className="py-2 text-center">0.004400</td>
                  <td className="py-2 text-center">0.004400</td>
                  <td className="py-2 text-center">0.004400</td>
                  <td className="py-2 text-center">0.004400</td>
                  <td className="py-2 text-center">0.004400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}; 