import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#2563EB]">LICTRADE</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Prêt', 'Affacturage', 'Simulateur', 'Contact', 'Publications'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace('é', 'e')}`}
                className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
              >
                {item}
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-8">
              <Link 
                href="/inscription" 
                className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
              >
                S'inscrire
              </Link>
              <Link 
                href="/connexion" 
                className="bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-[#1D4ED8] transition-colors font-medium"
              >
                Se connecter
              </Link>
            </div>
          </nav>

          {/* Menu Mobile (à implémenter) */}
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}