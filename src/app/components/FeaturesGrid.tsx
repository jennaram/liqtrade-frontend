const FeaturesGrid = () => {
  return (
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
  );
};

export default FeaturesGrid; 