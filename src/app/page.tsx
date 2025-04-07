import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Liqtrade" width={120} height={30} />
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/pret" className="text-gray-700">Prêt</Link>
          <Link href="/affacturage" className="text-gray-700">Affacturage</Link>
          <Link href="/simulateur" className="text-gray-700">Simulateur</Link>
          <Link href="/contact" className="text-gray-700">Contact</Link>
          <Link href="/publications" className="text-gray-700">Publications</Link>
          <Link href="/inscription" className="text-emerald-500 hover:text-emerald-600">S'inscrire</Link>
          <Link href="/connexion" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
            Se connecter
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between items-center px-12 py-16">
        <div className="w-1/2">
          <p className="text-blue-800 font-medium mb-4">FINANCEMENT PROFESSIONNEL À COURT TERME.</p>
          <h1 className="text-5xl font-bold mb-6">
            Notre intérêt,<br />
            c'est le vôtre.
          </h1>
          <p className="text-gray-600 mb-8">
            Simple, efficace et rapide. Profitez du service Liqtrade<br />
            sans garantie personnelle
          </p>
          <div className="flex space-x-4">
            <Link href="/connexion" className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600">
              Se connecter
            </Link>
            <Link href="/inscription" className="text-emerald-500 hover:text-emerald-600 flex items-center">
              S'inscrire <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative">
          <Image 
            src="/hero-image.png" 
            alt="Application mobile Liqtrade" 
            width={500} 
            height={600}
            className="object-contain"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 px-12 py-16">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <Link href="/prets" className="text-2xl font-semibold flex items-center text-gray-800 mb-4">
              Prêts <span className="ml-2">→</span>
            </Link>
            <Link href="/affacturage" className="text-2xl font-semibold flex items-center text-gray-800">
              Affacturage <span className="ml-2">→</span>
            </Link>
          </div>
          <div>
            <p className="text-gray-600 mb-4">Des taux compétitifs en quelques clics.</p>
            <p className="text-gray-600 mb-8">
              Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs 
              outils en ligne. Liqtrade propose du financement à court terme le financement professionnel à court 
              terme. Chez Liqtrade nous vous aidons à évoluer à travers des solutions de financement simples, 
              efficaces et compétitives en seulement quelques clics.
            </p>
            <p className="font-medium mb-4">TPE/PME, comptez sur nous pour vous aider à :</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Refinancer son entreprise</li>
              <li>• Ouvrir une nouvelle agence</li>
              <li>• Faire connaître son entreprise</li>
              <li>• Se lancer à l'international</li>
              <li>• Digitaliser son entreprise</li>
              <li>• Acquérir une entreprise</li>
              <li>• Transformer son entreprise</li>
              <li>• Financer des projets de développements durables</li>
            </ul>
            <button className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg">
              Vidéo de présentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-12 py-16 grid grid-cols-2 gap-12">
        <div className="p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-emerald-500">✓</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Evaluation du profil de risque de votre client</h3>
          <p className="text-gray-600">
            Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l'acceptation rapide de votre facture. Notre approche se base sur le profil de risque de votre client et l'échéance de votre facture pour vous proposer le meilleur prix de cession de votre créance.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-blue-500">€</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Meilleur prix de cession de votre créance</h3>
          <p className="text-gray-600">
            Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu'à 97 % de la valeur nominale de leur facture.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-cyan-500">⌚</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Paiement en un temps record pour vos factures</h3>
          <p className="text-gray-600">
            Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané vous permettant un virement rapide vers la Banque de votre choix.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-xl">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-amber-500">?</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Financez vos besoins de trésorerie en temps réel</h3>
          <p className="text-gray-600">
            Faites une demande de financement en ligne via l'envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé de vos demandes. Vos factures sont ainsi valorisées, validées automatiquement et financées sur notre plateforme.
          </p>
        </div>
      </section>
    </main>
  );
}