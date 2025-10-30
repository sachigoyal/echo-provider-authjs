interface InfoCardProps {
  label: string;
  value: string;
  monospace?: boolean;
}

export function InfoCard({ label, value, monospace = false }: InfoCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
        {label}
      </p>
      <p className={`text-xs text-neutral-700 dark:text-neutral-300 break-all ${monospace ? 'font-mono' : ''}`}>
        {value}
      </p>
    </div>
  );
}

