import { ChevronRightIcon } from '@heroicons/react/24/solid';

const DashboardMain = () => {
  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* En-tête avec titre et bouton */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Tableau de bord</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
            Demander un financement
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Grille de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Carte Total des prêts */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Total des prêts</h3>
              <span className="text-sm text-gray-500">Cette année</span>
            </div>
            <p className="text-3xl font-semibold text-gray-900">39 234€</p>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-500 font-medium">+2.5%</span>
              <span className="text-gray-500 ml-2">vs mois dernier</span>
            </div>
          </div>

          {/* Carte Taux moyen */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Taux moyen</h3>
              <span className="text-sm text-gray-500">Cette année</span>
            </div>
            <p className="text-3xl font-semibold text-gray-900">4.5%</p>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-red-500 font-medium">-0.3%</span>
              <span className="text-gray-500 ml-2">vs mois dernier</span>
            </div>
          </div>

          {/* Carte Score de risque */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Score de risque</h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Faible</span>
            </div>
            <p className="text-3xl font-semibold text-gray-900">B+</p>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section des transactions */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Transactions récentes</h2>
          </div>
          
          {/* En-tête des filtres */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex space-x-6">
              <button className="text-indigo-600 font-medium pb-4 border-b-2 border-indigo-600">
                Actifs (2)
              </button>
              <button className="text-gray-500 font-medium pb-4 border-b-2 border-transparent hover:text-gray-700">
                En attente (1)
              </button>
              <button className="text-gray-500 font-medium pb-4 border-b-2 border-transparent hover:text-gray-700">
                Clos
              </button>
            </div>
          </div>

          {/* Liste des transactions */}
          <div className="divide-y divide-gray-200">
            <div className="px-6 py-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Prêt #1234</h3>
                  <p className="text-sm text-gray-500 mt-1">Montant : 39 234€</p>
                </div>
                <div className="flex items-center">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mr-4">
                    Validé
                  </span>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="px-6 py-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Prêt #5678</h3>
                  <p className="text-sm text-gray-500 mt-1">Montant : 12 300€</p>
                </div>
                <div className="flex items-center">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm mr-4">
                    En attente
                  </span>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain; 