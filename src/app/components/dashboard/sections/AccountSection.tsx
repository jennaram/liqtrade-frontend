import { FC } from 'react';
import Image from 'next/image';
import { StatusCard } from '../components/StatusCard';
import { UserData } from '@/app/types/dashboard';

interface AccountSectionProps {
  userData: UserData;
}

export const AccountSection: FC<AccountSectionProps> = ({ userData }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium text-gray-900 mb-6">Mon compte</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Carte d'identité */}
        <div className="bg-white rounded-xl p-6 flex flex-col h-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={userData.profileImage || "/images/profile-photo.jpg"}
                alt="Photo de profil"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{userData.name}</h3>
              <p className="text-sm text-gray-500">
                ID: {userData.id}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Statut Vérification KYC : 
            <span className={`ml-1 ${
              userData.kycStatus === 'Validé' ? 'text-green-500' :
              userData.kycStatus === 'En attente' ? 'text-orange-500' :
              'text-red-500'
            }`}>
              {userData.kycStatus}
            </span>
          </p>
        </div>

        {/* Segment */}
        <StatusCard
          title="Segment"
          value="Premium"
          status="success"
        />

        {/* Évaluation des risques */}
        <StatusCard
          title="Évaluation des risques"
          value="A+"
          status="success"
        />

        {/* Score de risque */}
        <StatusCard
          title="Score de risque"
          value="95/100"
          status="success"
        />
      </div>
    </div>
  );
}; 