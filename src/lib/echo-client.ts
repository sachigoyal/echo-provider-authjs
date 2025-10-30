import { EchoClient } from '@merit-systems/echo-typescript-sdk';
import { auth } from '@/auth';

let echoClientCache: EchoClient | null = null;

export async function getEchoClient(): Promise<EchoClient> {
  if (echoClientCache) {
    return echoClientCache;
  }

  const session = await auth();
  if (!session?.accessToken) {
    throw new Error('No access token found');
  }
  echoClientCache = new EchoClient({ 
    apiKey: session.accessToken 
  });
  return echoClientCache;
}
