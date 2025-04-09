import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 px-4 md:px-12 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
        <div className="md:ml-24">
          <Link href="/prets" className="text-xl md:text-2xl font-medium flex items-center text-[#22C55E] mb-8 justify-center md:justify-start group">
            Prêts <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link href="/affacturage" className="text-xl md:text-2xl font-medium flex items-center text-gray-400 justify-center md:justify-start group">
            Affacturage <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <div className="mt-8 flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H0HFlDtmzfc?si=yPLeeQj3cSlyCX97" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
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
            <Link 
              href="https://youtu.be/erHB2HMXhR4?si=3cekOJJVTEH_Bk9F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-block"
            >
              Vidéo de présentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 