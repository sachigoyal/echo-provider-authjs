import { GetUserResponse } from "@merit-systems/echo-typescript-sdk";

interface UserCardProps {
  user: GetUserResponse
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
      <div className="flex items-start gap-4">
        {user.picture && (
          <img
            src={user.picture}
            alt={user.name ?? ''}
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800"
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-0.5">
            {user.name}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
            {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}

