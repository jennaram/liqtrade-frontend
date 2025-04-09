const DashboardHeader = () => {
  return (
    <header className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Bonjour Paul !</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Demander un financement
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6 flex space-x-4">
          <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg font-normal">
            Mes prêts
          </button>
          <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-lg font-normal hover:bg-gray-200">
            Mes factures
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 