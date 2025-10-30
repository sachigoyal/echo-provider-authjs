import { SignOutButton } from "@/components/sign-out-button";

interface ErrorStateProps {
  title: string;
  message?: string;
}

export function ErrorState({ title, message }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center">
          <p className="text-sm text-neutral-900 dark:text-neutral-100 mb-2">
            {title}
          </p>
          {message && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              {message}
            </p>
          )}
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

