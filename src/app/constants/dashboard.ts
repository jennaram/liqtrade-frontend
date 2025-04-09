export const CHART_DATA = [
  { name: '1', value1: 10, value2: 2, value3: 2 },
  { name: '2', value1: 15, value2: 3, value3: 4 },
  { name: '3', value1: 20, value2: 4, value3: 6 },
  { name: '4', value1: 25, value2: 5, value3: 8 },
  { name: '5', value1: 30, value2: 6, value3: 10 }
];

export const LOAN_STATUS = {
  ACTIVE: 'Validé',
  PENDING: 'En attente',
  CLOSED: 'Clôturé'
} as const;

export const COLORS = {
  PRIMARY: '#2563EB',
  SUCCESS: '#22C55E',
  WARNING: '#F97316',
  ERROR: '#EF4444',
  GRAY: '#6B7280'
} as const;

export const TABLE_COLUMNS = {
  LOAN: [
    { header: 'Numéro de contrat', accessor: 'contractNumber', align: 'left' },
    { header: 'Identifiant emprunteur', accessor: 'borrowerId', align: 'center' },
    { header: 'Montant demandé', accessor: 'requestedAmount', align: 'center' },
    { header: 'Montant du prêt', accessor: 'loanAmount', align: 'center' },
    { header: 'Mensualité', accessor: 'monthly', align: 'center' },
    { header: 'Durée souhaitée', accessor: 'duration', align: 'center' }
  ],
  FINANCIAL: [
    { header: "Taux d'intérêt", accessor: 'interestRate', align: 'center' },
    { header: 'Commission', accessor: 'commission', align: 'center' },
    { header: 'Taux Effect Global', accessor: 'globalRate', align: 'center' },
    { header: 'Date de la demande', accessor: 'requestDate', align: 'center' },
    { header: 'Date dernière échéance', accessor: 'dueDate', align: 'center' },
    { header: 'Statut de la demande', accessor: 'status', align: 'center' }
  ]
} as const; 