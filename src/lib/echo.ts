import { getEchoClient } from './echo-client';

export async function fetchEchoUserData() {
  const appId = process.env.ECHO_APP_ID;
  if (!appId) {
    throw new Error("ECHO_APP_ID environment variable is not set");
  }
  const client = await getEchoClient();

  const [user, balance, freeTierBalance] = await Promise.all([
    client.users.getUserInfo().catch(() => null),
    client.balance.getBalance().catch(() => null),
    client.balance.getFreeBalance(appId).catch(() => null),
  ]);

  return { user, balance, freeTierBalance };
}
