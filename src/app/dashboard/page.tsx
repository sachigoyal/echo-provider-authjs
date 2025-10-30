import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { fetchEchoUserData } from "@/lib/echo";
import { SignOutButton } from "@/components/sign-out-button";
import { UserCard } from "@/components/dashboard/user-card";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { InfoCard } from "@/components/dashboard/info-card";
import { ErrorState } from "@/components/dashboard/error-state";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect('/');
  }

  const echoData = await fetchEchoUserData();

  if (!echoData) {
    return <ErrorState title="Error Loading Dashboard" message="Unable to load user information." />;
  }

  const { user, balance, freeTierBalance } = echoData;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Dashboard
          </h1>
          <SignOutButton />
        </header>

        <div className="space-y-4">
          {user && <UserCard user={user} />}

          <div className="grid grid-cols-2 gap-4">
            {balance && <BalanceCard label="Balance" amount={balance.balance} />}
            {freeTierBalance && <BalanceCard label="Free Tier" amount={freeTierBalance.userSpendInfo.amountLeft} />}
          </div>

          {user && <InfoCard label="User ID" value={user.id} monospace />}
        </div>
      </div>
    </div>
  );
}
