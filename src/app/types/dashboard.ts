export interface UserData {
  name: string;
  id: string;
  kycStatus: 'Validé' | 'En attente' | 'Refusé';
  profileImage?: string;
}

export interface LoanData {
  contractNumber: string;
  borrowerId: string;
  requestedAmount: string;
  loanAmount: string;
  monthly: string;
  duration: string;
  status: 'Validé' | 'En attente';
  interestRate: string;
  commission: string;
  globalRate: string;
  requestDate: string;
  dueDate: string;
}

export interface ChartData {
  name: string;
  value1: number;
  value2: number;
  value3: number;
}

export interface StatusCardProps {
  title: string;
  value: string | number;
  status?: 'success' | 'warning' | 'error';
}

export interface TableProps {
  data: any[];
  columns: {
    header: string;
    accessor: string;
    align?: 'left' | 'center' | 'right';
  }[];
} 