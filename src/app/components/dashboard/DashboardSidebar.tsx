"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  HomeIcon,
  ArrowPathRoundedSquareIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  BellAlertIcon,
  Cog8ToothIcon
} from '@heroicons/react/24/outline';

const DashboardSidebar = () => {
  const menuItems = [
    { icon: HomeIcon, label: 'Tableau de Bord', active: true },
    { icon: ArrowPathRoundedSquareIcon, label: 'Mes transactions' },
    { icon: UsersIcon, label: 'Mes clients' },
    { icon: QuestionMarkCircleIcon, label: 'Assistance' },
    { type: 'spacer' },
    { icon: BellAlertIcon, label: 'Mes notifications', badge: '1' },
    { icon: Cog8ToothIcon, label: 'Réglages' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      {/* Logo */}
      <div className="pt-12 pb-6 flex justify-center items-center">
        <Link href="/" className="flex justify-center">
          <Image
            src="/images/logoliqtrade.png"
            alt="Liqtrade"
            width={120}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="px-4 mt-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            if (item.type === 'spacer') {
              return <li key={index} className="h-16" />;
            }

            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  href="#"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-gray-50 text-blue-800 font-regular'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50 font-regular'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.active ? 'text-blue-800' : 'text-gray-400'}`} />
                  <span className="text-sm">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 p-4 border-t w-64 bg-white">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-medium">PD</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Paul Dumartin</p>
            <p className="text-xs text-gray-500">Statut Vérification KYC : Validé</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar; 