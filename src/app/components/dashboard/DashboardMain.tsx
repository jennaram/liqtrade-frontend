import { PencilIcon } from '@heroicons/react/24/solid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Label } from 'recharts';
import Image from 'next/image';

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

const DashboardMain = () => {
  // Générer un nombre aléatoire entre 1000 et 9999
  const randomAmount = Math.floor(Math.random() * 9000 + 1000);
  
  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        {/* Section Mon compte */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Mon compte</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Carte d'identité */}
            <div className="bg-white rounded-xl p-6 flex flex-col h-full">
              <div className="flex justify-end">
                <button className="p-2 rounded-lg bg-black hover:bg-gray-900">
                  <PencilIcon className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-medium text-gray-900">Paul Dumartin</h3>
                <p className="text-sm text-gray-500">14 rue du Louvre</p>
                <p className="text-sm text-gray-500">PARIS 75001</p>
              </div>
            </div>

            {/* Segment */}
            <div className="bg-white rounded-xl p-6 flex flex-col">
              <div>
                <p className="text-sm text-gray-500">Segment</p>
              </div>
              <div className="flex justify-end mt-auto">
                <span className="text-4xl font-bold text-blue-900">RET</span>
              </div>
            </div>

            {/* Évaluation des risques */}
            <div className="bg-white rounded-xl p-6 flex flex-col">
              <div>
                <p className="text-sm text-gray-500">Évaluation des risques</p>
                <p className="text-sm text-green-500">Risques faible</p>
              </div>
              <div className="flex justify-end mt-auto">
                <span className="text-5xl font-bold text-green-500">B</span>
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
                
              </div>
            </div>

            {/* Montant dernière transaction */}
            <div className="bg-white rounded-xl p-6">
              <div className="mb-2">
                <p className="text-sm text-gray-500">Montant dernière transaction</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-4xl font-bold text-indigo-900">80K</span>
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/piece.png"
                    alt="Euro"
                    fill
                    sizes="48px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Informations financières */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Informations financières</h2>
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
            </div>

            {/* Tableau */}
            <div className="md:col-span-3 bg-white rounded-xl p-6 h-[300px] flex flex-col">
              <div className="grid grid-cols-4 mb-2">
                <button className="bg-gray-100 text-gray-900 rounded-l-lg text-sm font-medium py-2 border-r border-white">
                  Euribor1w
                </button>
                <button className="bg-gray-100 text-gray-500 text-sm font-medium py-2 border-r border-white">
                  Euribor2w
                </button>
                <button className="bg-gray-100 text-gray-500 text-sm font-medium py-2 border-r border-white">
                  Euribor3w
                </button>
                <button className="bg-gray-100 text-gray-500 rounded-r-lg text-sm font-medium py-2">
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
                      <th className="text-left py-1 font-medium text-blue-800">
                        Tenor
                      </th>
                      <th className="text-left py-1 font-medium text-blue-800">
                        Market Place
                      </th>
                      <th className="text-left py-1 font-medium text-blue-800">
                        Market Risk Free<br/>Date
                      </th>
                      <th className="text-left py-1 font-medium text-blue-800">
                        Market Risk Free<br/>Premium
                      </th>
                      <th className="text-left py-1 font-medium text-blue-800">
                        Change %
                      </th>
                      <th className="text-left py-1 font-medium text-blue-800">
                        Variation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b py-2">7 DAYS</td>
                      <td className="border-b py-2">0.0000</td>
                      <td className="border-b py-2">0</td>
                      <td className="border-b py-2">0.0000</td>
                      <td className="border-b py-2">0.0000</td>
                      <td className="border-b py-2">1</td>
                    </tr>
                    <tr>
                      <td className="border-b py-2">30 DAYS</td>
                      <td className="border-b py-2">0.0000</td>
                      <td className="border-b py-2">0</td>
                      <td className="border-b py-2">0.0000</td>
                      <td className="border-b py-2">0.0000</td>
                      <td className="border-b py-2">9</td>
                    </tr>
                    <tr>
                      <td className="border-b py-2">90 DAYS</td>
                      <td className="border-b py-2">0.0300</td>
                      <td className="border-b py-2">0.02345</td>
                      <td className="border-b py-2">0.0300</td>
                      <td className="border-b py-2">0.0300</td>
                      <td className="border-b py-2">0.02345</td>
                    </tr>
                    <tr>
                      <td className="border-b py-2">180 DAYS</td>
                      <td className="border-b py-2">0.03500</td>
                      <td className="border-b py-2">0.03500</td>
                      <td className="border-b py-2">0.03500</td>
                      <td className="border-b py-2">0.03500</td>
                      <td className="border-b py-2">0.03500</td>
                    </tr>
                    <tr>
                      <td className="py-2">360 DAYS</td>
                      <td className="py-2">0.004400</td>
                      <td className="py-2">0.004400</td>
                      <td className="py-2">0.004400</td>
                      <td className="py-2">0.004400</td>
                      <td className="py-2">0.004400</td>
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