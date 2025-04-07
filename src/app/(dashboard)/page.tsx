export default function Dashboard() {
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Bonjour Paul !</h1>
          
          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 mb-8 border-b pb-4">
            {['Tableau de Bord', 'Mes prêts', 'Mon compte', 'RET'].map((item) => (
              <button 
                key={item} 
                className={`font-medium ${item === 'Tableau de Bord' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
              >
                {item}
              </button>
            ))}
          </nav>
  
          {/* Financial Table */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">Informations financières</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Trover', 'Market Price', 'Market Risk Free Rate', 'Market Risk Free Permits', 'Change %', 'Variation'].map((header) => (
                    <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { duration: '7 DAYS', values: ['0.0000', '0', '0.0000', '0.0000', '1'] },
                  { duration: '30 DAYS', values: ['0.0000', '0', '0.0000', '0.0000', '9'] },
                  { duration: '90 DAYS', values: ['0.0000', '0.02545', '0.0000', '0.0300', '0.02545'] },
                  { duration: '180 DAYS', values: ['0.03500', '0.03500', '0.03500', '0.03500', '0.03500'] },
                  { duration: '360 DAYS', values: ['0.004400', '0.004400', '0.004400', '0.004400', '0.004400'] },
                ].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{row.duration}</td>
                    {row.values.map((value, colIndex) => (
                      <td key={colIndex} className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Transactions */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['Actifs', 'En attente (1)', 'Clos'].map((item) => (
              <div key={item} className={`font-medium ${item === 'En attente (1)' ? 'text-blue-600' : 'text-gray-600'}`}>
                {item}
              </div>
            ))}
          </div>
  
          {/* Loan Cards */}
          <div className="space-y-4">
            {/* First Loan Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-bold">Prêt Société</h3>
                  <p className="text-gray-600 text-sm">Valeur: 39 234€</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <p className="text-sm text-gray-600">
                    Pour déclencher la prochaine étape de validation, veuillez nous transmettre les documents suivants :
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Estimation en clôture du dossier au : 13/06/2022
                </p>
              </div>
            </div>
  
            {/* Second Loan Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold">Prêt Hothogas</h4>
                  <p className="text-sm text-gray-600">En attente</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Montant du prêt en cours</p>
                  <p className="font-medium">12 300€</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Durée souhaitée</p>
                  <p className="font-medium">14 mois</p>
                </div>
                <div className="flex items-end">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                    Créer un nouveau dossier
                  </button>
                </div>
              </div>
            </div>
  
            {/* Detailed Loan Table */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['Prêt Société', 'Référence', 'Montant', 'Montant restant', 'Commission', 'Durée'].map((header) => (
                      <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Prêt Société</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">13452789</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">39 234€</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">39 234€</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">700€</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">18 mois</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Prêt Hothogas</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">67547800</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">12 300€</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">En attente</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">En attente</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">14 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }