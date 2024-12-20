import { Client, Account, Databases } from 'appwrite';

// Client-side configuration
const clientConfig = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string,
};

// Server-side configuration
const serverConfig = {
  endpoint: process.env.APPWRITE_ENDPOINT as string,
  projectId: process.env.APPWRITE_PROJECT_ID as string,
  apiKey: process.env.APPWRITE_API_KEY as string,
};

export function getClientSDK() {
  const client = new Client();
  client.setEndpoint(clientConfig.endpoint).setProject(clientConfig.projectId);
  return {
    account: new Account(client),
    databases: new Databases(client),
  };
}

export function getServerSDK() {
  const client = new Client();
  client
    .setEndpoint(serverConfig.endpoint)
    .setProject(serverConfig.projectId)
    .setKey(serverConfig.apiKey);
  return {
    databases: new Databases(client),
  };
}


