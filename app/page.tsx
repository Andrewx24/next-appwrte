import { getServerSDK } from '@/lib/appwrite'
import { Models } from 'appwrite';

export default async function Home() {
  let documents: Models.Document[] = [];
  
  try {
    const { databases } = getServerSDK();
    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID as string,
      process.env.APPWRITE_COLLECTION_ID as string
    );
    documents = response.documents;
  } catch (error) {
    console.error('Error fetching documents:', error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js with Appwrite</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Documents:</h2>
        {documents.map((doc: Models.Document) => (
          <div key={doc.$id} className="mb-2">
            <p>{JSON.stringify(doc)}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

