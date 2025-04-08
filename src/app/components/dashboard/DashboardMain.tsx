const DashboardMain = () => {
  return (
    <main className="flex-1 bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Paul Dumartin</h3>
              <p className="text-gray-600 text-sm">14 rue du Louvre</p>
              <p className="text-gray-600 text-sm">75002 Paris</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Segment</h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold">RET</span>
                <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Risques faible
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Score risque</h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold">B</span>
                <div className="ml-4 w-32 h-2 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Informations financières</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Market Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Market Risk Free Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change %
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7 DAYS</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30 DAYS</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.0000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Transactions */}
        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <button className="text-green-600 font-medium">Actifs</button>
            <button className="text-gray-600 font-medium">En attente (1)</button>
            <button className="text-gray-600 font-medium">Clos</button>
          </div>

          {/* Transaction Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Prêt Société</h3>
                  <p className="text-gray-600">39 234€</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Validé
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Montant du prêt en cours : 39 234€
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Prêt HotDogos</h3>
                  <p className="text-gray-600">12 300€</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    En attente
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Montant demandé : 12 300€
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain; 