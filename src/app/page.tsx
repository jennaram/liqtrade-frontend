import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 md:py-6 max-w-[1400px] mx-auto">
        {/* Logo et éléments de gauche */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto mb-4 md:mb-0">
          <Image src="/images/logoliqtrade.png" alt="Liqtrade" width={120} height={30} className="object-contain mb-4 md:mb-0" />
          <div className="flex flex-col md:flex-row md:ml-16 space-y-4 md:space-y-0">
            <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:mr-8 text-center">Prêt</span>
            <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 text-center">Affacturage</span>
          </div>
        </div>

        {/* Éléments de droite */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-4 md:mb-0 w-full md:w-auto">
            <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:ml-40 md:mr-8 lg:mr-12 text-center whitespace-nowrap">Simulateur</span>
            <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:mr-8 lg:mr-12 text-center whitespace-nowrap">Contact</span>
            <span className="text-gray-800 text-base font-medium cursor-pointer hover:text-gray-600 md:mr-8 lg:mr-12 text-center whitespace-nowrap">Publications</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto md:ml-8">
            <button 
              className="bg-white text-[#22C55E] hover:bg-gray-50 text-sm font-medium px-6 py-2.5 rounded-md transition-all duration-200 w-full md:w-[120px] border border-[#22C55E] whitespace-nowrap flex items-center justify-center"
            >
              S&apos;inscrire
            </button>
            <button 
              className="bg-[#22C55E] text-white hover:bg-[#16A34A] text-sm font-medium px-6 py-2.5 rounded-md transition-all duration-200 w-full md:w-[120px] whitespace-nowrap flex items-center justify-center"
            >
              Se connecter
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-8 md:py-16">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="md:ml-24">
            <p className="text-blue-800 font-medium mb-2 text-left">FINANCEMENT PROFESSIONNEL À COURT TERME.</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre intérêt,<br />
              c&apos;est le vôtre.
            </h1>
            <p className="text-gray-600 mb-8">
              Simple, efficace et rapide. Profitez du service Liqtrade<br className="hidden md:block" />
              sans garantie personnelle
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <Link href="/connexion" className="bg-[#22C55E] text-white px-6 py-3 rounded-lg hover:bg-[#16A34A] text-center">
                Se connecter
              </Link>
              <Link href="/inscription" className="text-[#22C55E] hover:text-[#16A34A] inline-flex items-center justify-center md:justify-start no-underline group">
                <span className="flex items-center border-b border-[#22C55E] group-hover:border-[#16A34A]">
                  S&apos;inscrire<span className="ml-1 text-xl">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <Image 
            src="/images/app_img.png" 
            alt="Application mobile Liqtrade" 
            width={500} 
            height={600}
            className="object-contain mx-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 px-4 md:px-12 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          <div className="md:ml-24">
            <Link href="/prets" className="text-xl md:text-2xl font-medium flex items-center text-[#22C55E] mb-8 justify-center md:justify-start group">
              Prêts <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/affacturage" className="text-xl md:text-2xl font-medium flex items-center text-gray-400 justify-center md:justify-start group">
              Affacturage <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="md:max-w-xl">
            <p className="text-gray-800 text-lg mb-2 text-center md:text-left">Des taux compétitifs en quelques clics.</p>
            <p className="text-gray-600 mb-12 text-center md:text-left leading-relaxed">
              Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs 
              outils en ligne. Oubliez le parcours du combattant, à vous le financement professionnel à court 
              terme. Chez Liqtrade nous vous aidons à évoluer à travers des solutions de financement simples, 
              efficaces et compétitives en seulement quelques clics.
            </p>
            <p className="font-medium text-gray-800 mb-6 text-center md:text-left">TPE/PME, comptez sur nous pour vous aider à :</p>
            <ul className="space-y-2 text-gray-400 md:pl-0">
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Refinancer son entreprise</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Ouvrir une nouvelle agence</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Faire connaître son entreprise</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Se lancer à l&apos;international</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Digitaliser son entreprise</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Acquérir une entreprise</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Transformer son entreprise</span>
              </li>
              <li className="flex items-center">
                <span className="text-sm">•</span>
                <span className="ml-2">Financer des projets de développements durables</span>
              </li>
            </ul>
            <div className="mt-12 md:text-left">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Vidéo de présentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 md:px-12 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:max-w-[1200px] mx-auto">
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-[#E8F5E9] rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg className="w-7 h-7 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Evaluation du profil de risque de votre client</h3>
            <p className="text-gray-600 text-center md:text-left">
              Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l&apos;acceptation rapide de votre facture.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-[#E5E8F6] rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg className="w-7 h-7 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Meilleur prix de cession de votre créance</h3>
            <p className="text-gray-600 text-center md:text-left">
              Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu&apos;à 97 % de la valeur nominale de leur facture.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-[#E0F7FA] rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg className="w-7 h-7 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Paiement en un temps record pour vos factures</h3>
            <p className="text-gray-600 text-center md:text-left">
              Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-[#FFF3E0] rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
              <svg className="w-7 h-7 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Financez vos besoins de trésorerie en temps réel</h3>
            <p className="text-gray-600 text-center md:text-left">
              Faites une demande de financement en ligne via l&apos;envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé de vos demandes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}