import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">FINANCEMENT PROFESSIONNEL À COURT TERME.</h1>
          <p className="text-lg mb-6">Notre intérêt, c'est le vôtre.</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded font-medium">Se connecter</button>
            <button className="border border-white px-6 py-2 rounded font-medium">S'inscrire →</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Prêts → Affacturage →</h2>
        <p className="text-gray-700 mb-8">
          Des taux compétitifs en quelques clics. Quel que soit votre projet, nous vous accompagnons de manière bienveillante 
          avec les meilleurs outils en ligne. Oubliez le parcours du combattant, à vous le financement professionnel à court terme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            'Refinancer son entreprise',
            'Ouvrir une nouvelle agence',
            'Faire connaître son entreprise',
            'Se lancer à l\'international',
            'Digitaliser son entreprise',
            'Acquérir une entreprise',
            'Transformer son entreprise',
            'Financer des projets de développement durables'
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* Features Sections */}
        <div className="space-y-12">
          <FeatureSection 
            title="Evaluation du profil de risque de votre client"
            content="Plus de mauvaises surprises lors de la facturation de votre client. Chez Liptrade, nous évaluons son risque débiteur afin de permettre la valorisation et l'acceptation rapide de votre facture."
          />
          
          <FeatureSection 
            title="Meilleur prix de cession de votre créance"
            content="Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu'à 97 % de la valeur nominale de leur facture."
          />
          
          <FeatureSection 
            title="Paiement en un temps record pour vos factures"
            content="Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané."
          />
          
          <FeatureSection 
            title="Financez vos besoins de trésorerie en temps réel"
            content="Faites une demande de financement en ligne via l'envoi électronique de facture et obtenez plus rapidement vos fonds au un traitement automatisé de vos demandes."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureSection({ title, content }: { title: string; content: string }) {
  return (
    <div className="border-t border-gray-200 pt-8">
      <h3 className="text-xl font-bold text-blue-600 mb-4">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}