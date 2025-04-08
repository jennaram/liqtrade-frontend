import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-4 md:py-6 max-w-[1400px] mx-auto">
        {/* Logo et éléments de gauche */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto mb-4 md:mb-0">
          <Image src="/images/logoliqtrade.png" alt="Liqtrade" width={120} height={30} className="object-contain mb-4 md:mb-0" />
          <div className="flex flex-col md:flex-row md:ml-8 space-y-4 md:space-y-0">
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
              className="bg-white text-[#22C55E] hover:bg-gray-50 text-base font-medium px-6 md:px-10 py-3 md:py-5 rounded-md transition-all duration-200 w-full md:min-w-[160px] border border-[#22C55E]"
            >
              S&apos;inscrire
            </button>
            <button 
              className="bg-[#22C55E] text-white hover:bg-[#16A34A] text-base font-medium px-6 md:px-10 py-3 md:py-5 rounded-md transition-all duration-200 w-full md:min-w-[160px]"
            >
              Se connecter
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-8 md:py-16">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p className="text-blue-800 font-medium mb-4">FINANCEMENT PROFESSIONNEL À COURT TERME.</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre intérêt,<br />
            c&apos;est le vôtre.
          </h1>
          <p className="text-gray-600 mb-8">
            Simple, efficace et rapide. Profitez du service Liqtrade<br className="hidden md:block" />
            sans garantie personnelle
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/connexion" className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 text-center">
              Se connecter
            </Link>
            <Link href="/inscription" className="text-emerald-500 hover:text-emerald-600 flex items-center justify-center md:justify-start">
              S&apos;inscrire <span className="ml-2">→</span>
            </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Link href="/prets" className="text-xl md:text-2xl font-semibold flex items-center text-gray-800 mb-4 justify-center md:justify-start">
              Prêts <span className="ml-2">→</span>
            </Link>
            <Link href="/affacturage" className="text-xl md:text-2xl font-semibold flex items-center text-gray-800 justify-center md:justify-start">
              Affacturage <span className="ml-2">→</span>
            </Link>
          </div>
          <div>
            <p className="text-gray-600 mb-4 text-center md:text-left">Des taux compétitifs en quelques clics.</p>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs 
              outils en ligne. Liqtrade propose du financement à court terme le financement professionnel à court 
              terme. Chez Liqtrade nous vous aidons à évoluer à travers des solutions de financement simples, 
              efficaces et compétitives en seulement quelques clics.
            </p>
            <p className="font-medium mb-4 text-center md:text-left">TPE/PME, comptez sur nous pour vous aider à :</p>
            <ul className="space-y-2 text-gray-600 pl-4 md:pl-0">
              <li>• Refinancer son entreprise</li>
              <li>• Ouvrir une nouvelle agence</li>
              <li>• Faire connaître son entreprise</li>
              <li>• Se lancer à l&apos;international</li>
              <li>• Digitaliser son entreprise</li>
              <li>• Acquérir une entreprise</li>
              <li>• Transformer son entreprise</li>
              <li>• Financer des projets de développements durables</li>
            </ul>
            <div className="text-center md:text-left">
              <button className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg w-full md:w-auto">
                Vidéo de présentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 md:px-12 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="text-emerald-500">✓</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Evaluation du profil de risque de votre client</h3>
          <p className="text-gray-600 text-center md:text-left">
            Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l&apos;acceptation rapide de votre facture.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="text-blue-500">€</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Meilleur prix de cession de votre créance</h3>
          <p className="text-gray-600 text-center md:text-left">
            Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu&apos;à 97 % de la valeur nominale de leur facture.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="text-cyan-500">⌚</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Paiement en un temps record pour vos factures</h3>
          <p className="text-gray-600 text-center md:text-left">
            Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="text-amber-500">?</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Financez vos besoins de trésorerie en temps réel</h3>
          <p className="text-gray-600 text-center md:text-left">
            Faites une demande de financement en ligne via l&apos;envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé de vos demandes.
          </p>
        </div>
      </section>
    </main>
  );
}