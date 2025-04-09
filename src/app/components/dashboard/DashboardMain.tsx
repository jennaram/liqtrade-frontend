import Footer from '../Footer';
import { AccountSection } from './sections/AccountSection';
import { FinancialSection } from './sections/FinancialSection';
import { TransactionTablesSection } from './sections/TransactionTablesSection';
import { UserData, LoanData } from '@/app/types/dashboard';

const mockUserData: UserData = {
  name: 'Paul Dumartin',
  id: '123456',
  kycStatus: 'Validé',
  profileImage: '/images/profile.png',
};

const mockLoanData: LoanData[] = [
  {
    contractNumber: "123456",
    borrowerId: "789012",
    requestedAmount: "50000",
    loanAmount: "45000",
    monthly: "1500",
    duration: "36",
    status: "Validé",
    interestRate: "5.5",
    commission: "2",
    globalRate: "7.5",
    requestDate: "2024-01-15",
    dueDate: "2027-01-15"
  }
];

const DashboardMain = () => {
  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <AccountSection userData={mockUserData} />
        <FinancialSection loanData={mockLoanData} />
        <TransactionTablesSection loanData={mockLoanData} />
        <Footer />
      </div>
    </main>
  );
};

export default DashboardMain; 