import { FC } from 'react';
import Image from 'next/image';
import { PencilIcon } from '@heroicons/react/24/solid';
import { UserData } from '@/app/types/dashboard';

interface AccountSectionProps {
  userData: UserData;
}

export const AccountSection: FC<AccountSectionProps> = ({ userData }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Mon compte</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Carte d'identité */}
        <div className="bg-white rounded-xl p-6 flex flex-col h-full">
          <div className="flex justify-end">
            <button className="p-2 rounded-lg bg-black hover:bg-gray-900">
              <PencilIcon className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="mt-auto">
            <h3 className="text-lg font-medium text-gray-900">{userData.name}</h3>
            <p className="text-sm text-gray-500">14 rue du Louvre</p>
            <p className="text-sm text-gray-500">PARIS 75001</p>
          </div>
        </div>

        {/* Segment */}
        <div className="bg-white rounded-xl p-6 flex flex-col">
          <div>
            <p className="text-sm text-gray-500">Segment</p>
          </div>
          <div className="flex justify-end mt-auto">
            <span className="text-4xl font-bold text-blue-900">RET</span>
          </div>
        </div>

        {/* Évaluation des risques */}
        <div className="bg-white rounded-xl p-6 flex flex-col">
          <div>
            <p className="text-sm text-gray-500">Évaluation des risques</p>
            <p className="text-sm text-green-500">Risques faible</p>
          </div>
          <div className="flex justify-end mt-auto">
            <span className="text-5xl font-bold text-green-500">B</span>
          </div>
        </div>

        {/* Score risque */}
        <div className="bg-white rounded-xl p-6">
          <div className="mb-2">
            <p className="text-sm text-gray-500">Score risque</p>
            <p className="text-sm">Lorem Ipsum</p>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>A</span>
              <span>C</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
          </div>
        </div>

        {/* Montant dernière transaction */}
        <div className="bg-white rounded-xl p-6">
          <div className="mb-2">
            <p className="text-sm text-gray-500">Montant dernière transaction</p>
          </div>
          <div className="flex justify-between items-end mt-4">
            <span className="text-4xl font-bold text-indigo-900">80K</span>
            <div className="relative w-12 h-12">
              <Image
                src="/images/piece.png"
                alt="Euro"
                fill
                sizes="48px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 