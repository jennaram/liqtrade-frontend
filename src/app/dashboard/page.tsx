import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardMain from '../components/dashboard/DashboardMain';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <DashboardMain />
        </div>
      </div>
    </div>
  );
}