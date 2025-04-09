import { FC } from 'react';
import Image from 'next/image';

export const TransactionTablesSection: FC = () => {
  return (
    <>
      {/* Section Transactions */}
      <div className="mb-12">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">Transactions</h2>
        
        {/* Filtres */}
        <div className="flex gap-0 mb-6">
          <button className="px-8 py-2 bg-green-500 text-white rounded-l-lg font-medium hover:bg-white hover:text-green-500 transition-colors duration-200">
            Actifs
          </button>
          <button className="px-8 py-2 text-gray-500 bg-gray-100 hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium">
            En attente (1)
          </button>
          <button className="px-8 py-2 text-gray-500 bg-gray-100 rounded-r-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium">
            Clos
          </button>
        </div>

        {/* Grille de transactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* État */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">État</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Prêt Société</span>
                <span className="text-green-500 flex items-center">
                  Validé
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-green-500 rounded-full w-full"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Prêt HotDoggs</span>
                <span className="text-blue-900 flex items-center">
                  En attente
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 8a1 1 0 011 1v3h2a1 1 0 110 2h-3a1 1 0 01-1-1V9a1 1 0 011-1z" clipRule="evenodd" transform="translate(0, 0.5)" />
                  </svg>
                </span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-blue-900 rounded-full w-1/2"></div>
              </div>
              <div className="pt-4 text-center">
                <button className="text-gray-600 hover:text-gray-900 text-sm font-medium underline">
                  Créer un nouveau dossier
                </button>
              </div>
            </div>
          </div>

          {/* Prêt Société */}
          <div className="bg-white rounded-xl p-6 flex flex-col">
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-left">Prêt Société</h3>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">39 234€</div>
              <div className="text-sm text-gray-500 mb-4">Montant du prêt en cours</div>
              <div className="flex items-center text-green-500 mt-12">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Prêt validé
              </div>
            </div>
          </div>

          {/* En attente */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">En attente</h3>
              <h3 className="text-lg font-medium text-gray-400">Prêt HotDoggs</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="12"/>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#4ADE80" strokeWidth="12" strokeDasharray="100 220" strokeDashoffset="0"/>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#F97316" strokeWidth="12" strokeDasharray="60 220" strokeDashoffset="100"/>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#60A5FA" strokeWidth="12" strokeDasharray="40 220" strokeDashoffset="160"/>
                </svg>
              </div>
              <div className="space-y-1 ml-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600">Accord ouverture</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-orange-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600">Accord demande</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600">Évaluation des risques</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Pour déclencher la prochaine étape de validation, veuillez nous joindre :</p>
              <div className="flex items-center mt-2 text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 1a1 1 0 00-1 1v5H7a1 1 0 100 2h3a1 1 0 001-1V5a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Dossier super important.pdf
              </div>
            </div>
          </div>

          {/* Cloturé */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Clôturé</h3>
            <div className="flex flex-col items-center">
              <Image
                src="/images/trophy.png"
                alt="Trophy"
                width={96}
                height={96}
                className="mb-1"
                priority
              />
              <h3 className="text-lg font-medium text-gray-900 text-left">Prêt Société</h3>
              <p className="mt-1 text-sm text-gray-500 text-left">Estimation de clôture du dossier au :</p>
              <p className="text-sm font-bold text-gray-400 text-left">13/06/2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tableaux */}
      <div className="mb-12">
        <div className="bg-white rounded-xl p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-blue-900">
                <th className="text-left py-2"></th>
                <th className="text-left py-2">Numéro de contrat</th>
                <th className="text-left py-2">Identifiant emprunteur</th>
                <th className="text-left py-2">Montant demandé</th>
                <th className="text-left py-2">Montant du prêt</th>
                <th className="text-left py-2">Mensualité</th>
                <th className="text-left py-2">Durée souhaitée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-900 py-2 text-md font-bold">Prêt Société</td>
                <td className="text-gray-400 text-center py-2 text-sm">13452789</td>
                <td className="text-gray-400 text-center py-2 text-sm">UK567UI8</td>
                <td className="text-gray-400 text-center py-2 text-sm">39 234€</td>
                <td className="text-gray-400 text-center py-2 text-sm">39 234€</td>
                <td className="text-gray-400 text-center py-2 text-sm">700€</td>
                <td className="text-gray-400 text-center py-2 text-sm">18 mois</td>
              </tr>
              <tr>
                <td className="text-gray-900 py-2 text-md font-bold">Prêt HotDoggs</td>
                <td className="text-gray-400 text-center py-2 text-sm">67547800</td>
                <td className="text-gray-400 text-center py-2 text-sm">UK567UI8</td>
                <td className="text-gray-400 text-center py-2 text-sm">12 300€</td>
                <td className="text-gray-400 text-center py-2 text-sm">En attente</td>
                <td className="text-gray-400 text-center py-2 text-sm">En attente</td>
                <td className="text-gray-400 text-center py-2 text-sm">14 mois</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <div className="bg-white rounded-xl p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-blue-900">
                <th className="text-left py-2"></th>
                <th className="text-left py-2">Taux d&apos;intérêt</th>
                <th className="text-left py-2">Commission</th>
                <th className="text-left py-2">Taux Effect Global</th>
                <th className="text-left py-2">Date de la demande</th>
                <th className="text-left py-2">Date dernière échéance</th>
                <th className="text-left py-2">Statut de la demande</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-900 py-2 text-md font-bold">Prêt Société</td>
                <td className="text-gray-400 text-center py-2 text-sm">3%</td>
                <td className="text-gray-400 text-center py-2 text-sm">Lorem Ipsum</td>
                <td className="text-gray-400 text-center py-2 text-sm">3</td>
                <td className="text-gray-400 text-center py-2 text-sm">01/11/2019</td>
                <td className="text-gray-400 text-center py-2 text-sm">01/04/2022</td>
                <td className="text-green-500 text-center py-2">Validé</td>
              </tr>
              <tr>
                <td className="text-gray-900 py-2 text-md font-bold">Prêt HotDoggs</td>
                <td className="text-gray-400 text-center py-2 text-sm">8%</td>
                <td className="text-gray-400 text-center py-2 text-sm">Lorem Ipsum</td>
                <td className="text-gray-400 text-center py-2 text-sm">5</td>
                <td className="text-gray-400 text-center py-2 text-sm">04/09/2021</td>
                <td className="text-gray-400 text-center py-2 text-sm">En attente</td>
                <td className="text-gray-400 text-center py-2 text-sm">En attente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}; 