import Image from 'next/image';
import Link from 'next/link';

const DashboardSidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Tableau de Bord', active: true },
    { icon: '🔄', label: 'Mes transactions' },
    { icon: '👥', label: 'Mes clients' },
    { icon: '❓', label: 'Assistance' },
    { icon: '🔔', label: 'Mes notifications (1)' },
    { icon: '⚙️', label: 'Réglages' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      {/* Logo */}
      <div className="p-4 border-b">
        <Link href="/">
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
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 p-4 border-t w-64">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">PD</span>
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