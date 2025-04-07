import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold">FINANCEMENT PROFESSIONNEL À COURT TERME.</h1>
        <p className="mt-4">Notre intérêt, c'est le vôtre.</p>
        {/* Boutons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-white text-blue-600 px-6 py-2 rounded">Se connecter</button>
          <button className="border border-white px-6 py-2 rounded">S'inscrire →</button>
        </div>
      </section>

      {/* Services */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Prêts → Affacturage →</h2>
        <p className="mb-6">Des taux compétitifs en quelques clics...</p>
        
        {/* Liste des services */}
        <ul className="grid grid-cols-2 gap-4">
          {['Refinancer son entreprise', 'Ouvrir une nouvelle agence', /* autres items */].map((item) => (
            <li key={item} className="flex items-center">
              <span className="mr-2">•</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Autres sections... */}
    </main>
  )
}