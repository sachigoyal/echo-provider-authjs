interface BalanceCardProps {
  label: string;
  amount: number;
}

export function BalanceCard({ label, amount }: BalanceCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
        {label}
      </p>
      <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100 tabular-nums">
        ${amount.toFixed(2)}
      </p>
    </div>
  );
}

