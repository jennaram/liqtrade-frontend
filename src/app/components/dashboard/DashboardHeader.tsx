const DashboardHeader = () => {
  return (
    <header className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-medium text-gray-900">Bonjour Paul !</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Demander un financement
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-6 flex space-x-8">
          <button className="text-indigo-600 font-medium pb-4 border-b-2 border-indigo-600">
            Mes prêts
          </button>
          <button className="text-gray-500 font-medium pb-4 border-b-2 border-transparent hover:text-gray-700">
            Mes factures
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 