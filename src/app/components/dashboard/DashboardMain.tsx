import { PencilIcon } from '@heroicons/react/24/solid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const data = [
  { name: '1', value1: 0, value2: 0, value3: 0 },
  { name: '5', value1: 20, value2: 10, value3: 5 },
  { name: '10', value1: 15, value2: 15, value3: 8 },
  { name: '15', value1: 25, value2: 20, value3: 10 },
  { name: '20', value1: 30, value2: 25, value3: 20 },
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

const DashboardMain = () => {
  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        {/* Section Mon compte */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Mon compte</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Carte d'identité */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Paul Dumartin</h3>
                  <p className="text-sm text-gray-500">14 rue du Louvre</p>
                  <p className="text-sm text-gray-500">PARIS 75001</p>
                </div>
                <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                  <PencilIcon className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="text-sm text-gray-500">
                <p>Segment</p>
              </div>
            </div>

            {/* Segment */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-4xl font-bold text-blue-900">RET</span>
              </div>
            </div>

            {/* Évaluation des risques */}
            <div className="bg-white rounded-xl p-6">
              <div className="mb-2">
                <p className="text-sm text-gray-500">Évaluation des risques</p>
                <p className="text-sm text-green-500">Risques faible</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-6xl font-bold text-green-500">B</span>
              </div>
            </div>

            {/* Score risque */}
            <div className="bg-white rounded-xl p-6">
              <div className="mb-2">
                <p className="text-sm text-gray-500">Score risque</p>
                <p className="text-sm">Lorem Ipsum</p>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>A</span>
                  <span>C</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-blue-900">80K</span>
                  <img src="/images/coins.png" alt="Coins" className="w-8 h-8 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Informations financières */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Informations financières</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Graphique */}
            <div className="bg-white rounded-xl p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#4ADE80" stopOpacity={0.01}/>
                      </linearGradient>
                      <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.01}/>
                      </linearGradient>
                      <linearGradient id="colorValue3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F97316" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#F97316" stopOpacity={0.01}/>
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
                        position="right"
                        fill="#000000"
                      />
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
                      fill="url(#colorValue2)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value3" 
                      stroke="#F97316" 
                      strokeWidth={2} 
                      dot={false}
                      activeDot={{ r: 4, fill: "#F97316" }}
                      fill="url(#colorValue3)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-6 space-x-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-sm text-gray-600">Lorem ipsum</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                  <span className="text-sm text-gray-600">Lorem ipsum</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Lorem ipsum</span>
                </div>
              </div>
            </div>

            {/* Tableau */}
            <div className="bg-white rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2 bg-blue-50 text-blue-800 rounded-l-lg">Euribor1w</th>
                      <th className="text-left px-4 py-2 text-gray-500">Euribor2w</th>
                      <th className="text-left px-4 py-2 text-gray-500">Euribor3w</th>
                      <th className="text-left px-4 py-2 text-gray-500 rounded-r-lg">Average Sector Spread</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border-b px-4 py-3">7 DAYS</td>
                      <td className="border-b px-4 py-3">0.0000</td>
                      <td className="border-b px-4 py-3">0</td>
                      <td className="border-b px-4 py-3">0.0000</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-3">30 DAYS</td>
                      <td className="border-b px-4 py-3">0.0000</td>
                      <td className="border-b px-4 py-3">0</td>
                      <td className="border-b px-4 py-3">0.0000</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-3">90 DAYS</td>
                      <td className="border-b px-4 py-3">0.0300</td>
                      <td className="border-b px-4 py-3">0.02345</td>
                      <td className="border-b px-4 py-3">0.0300</td>
                    </tr>
                    <tr>
                      <td className="border-b px-4 py-3">180 DAYS</td>
                      <td className="border-b px-4 py-3">0.03500</td>
                      <td className="border-b px-4 py-3">0.03500</td>
                      <td className="border-b px-4 py-3">0.03500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">360 DAYS</td>
                      <td className="px-4 py-3">0.004400</td>
                      <td className="px-4 py-3">0.004400</td>
                      <td className="px-4 py-3">0.004400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain; 