import { FC } from 'react';

export const TransactionTablesSection: FC = () => {
  return (
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

      <div className="mt-12 bg-white rounded-xl p-6">
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
  );
}; 