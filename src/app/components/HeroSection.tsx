import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection; 