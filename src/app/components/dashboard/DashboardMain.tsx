import { PencilIcon } from '@heroicons/react/24/solid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Label, Tooltip } from 'recharts';
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

        {/* Section Transactions */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Transactions</h2>
          
          {/* Filtres */}
          <div className="flex gap-0 mb-6">
            <button className="px-8 py-2 bg-green-500 text-white rounded-l-lg font-medium hover:bg-white hover:text-green-500 transition-colors duration-200">
              Actifs
            </button>
            <button className="px-8 py-2 text-gray-500 bg-gray-100 hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium">
              En attente (1)
            </button>
            <button className="px-8 py-2 text-gray-500 bg-gray-100 rounded-r-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium">
              Clos
            </button>
          </div>

          {/* Grille de transactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* État */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">État</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prêt Société</span>
                  <span className="text-green-500 flex items-center">
                    Validé
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <div className="h-4 bg-green-500 rounded-full w-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prêt HotDoggs</span>
                  <span className="text-blue-900 flex items-center">
                    En attente
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 8a1 1 0 011 1v3h2a1 1 0 110 2h-3a1 1 0 01-1-1V9a1 1 0 011-1z" clipRule="evenodd" transform="translate(0, 0.5)" />
                    </svg>
                  </span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full">
                  <div className="h-4 bg-blue-900 rounded-full w-1/2"></div>
                </div>
                <div className="pt-4 text-center">
                  <button className="text-gray-600 hover:text-gray-900 text-sm font-medium underline">
                    Créer un nouveau dossier
                  </button>
                </div>
              </div>
            </div>

            {/* Prêt Société */}
            <div className="bg-white rounded-xl p-6 flex flex-col">
              <h3 className="text-lg font-medium text-gray-900 mb-4 text-left">Prêt Société</h3>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">39 234€</div>
                <div className="text-sm text-gray-500 mb-4">Montant du prêt en cours</div>
                <div className="flex items-center text-green-500 mt-12">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Prêt validé
                </div>
              </div>
            </div>

            {/* En attente */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">En attente</h3>
                <h3 className="text-lg font-medium text-gray-400">Prêt HotDoggs</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="12"/>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#4ADE80" strokeWidth="12" strokeDasharray="100 220" strokeDashoffset="0"/>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F97316" strokeWidth="12" strokeDasharray="60 220" strokeDashoffset="100"/>
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#60A5FA" strokeWidth="12" strokeDasharray="40 220" strokeDashoffset="160"/>
                  </svg>
                </div>
                <div className="space-y-1 ml-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">Accord ouverture</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">Accord demande</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">Évaluation des risques</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400">Pour déclencher la prochaine étape de validation, veuillez nous joindre :</p>
                <div className="flex items-center mt-2 text-sm text-gray-400">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 1a1 1 0 00-1 1v5H7a1 1 0 100 2h3a1 1 0 001-1V5a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Dossier super important.pdf
                </div>
              </div>
            </div>

            {/* Cloturé */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Clôturé</h3>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/trophy.png"
                  alt="Trophy"
                  width={96}
                  height={96}
                  className="mb-1"
                  priority
                />
                <h3 className="text-lg font-medium text-gray-900 text-left">Prêt Société</h3>
                <p className="mt-1 text-sm text-gray-500 text-left">Estimation de clôture du dossier au :</p>
                <p className="text-sm font-bold text-gray-400 text-left">13/06/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain; 