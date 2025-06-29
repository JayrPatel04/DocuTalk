"use server";
import auth from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generate Embeddings (docId: string) (
    auth().protect(); // Protect this route with Clerk

    // turn a PDF into embeddings (0.8123234, 0.234234, ...1 await generate     
    await generateEmbeddingsInPineconeVectorStore(docId);

    revalidatePath("/dashboard");

    return { completed : true };