import Image from 'next/image';

const DashboardHeader = () => {
  return (
    <header className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Bonjour Paul !</h1>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/profile-photo.jpg"
              alt="Photo de profil"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex">
            <button className="px-4 py-2 bg-blue-50 text-blue-800 rounded-l-lg font-normal hover:bg-blue-100 transition-colors">
              Mes prêts
            </button>
            <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-r-lg font-normal hover:bg-gray-200 transition-colors">
              Mes factures
            </button>
          </div>
          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
            Demander un financement
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 