"use client";

import { storage } from "@/firebase";
import { useUser } from "@clerk/nextjs"; 
import {doc, setDoc } from "firebase/firestore";
import { getDownloadURL,ref, uploadBytesResumable } from "firebase/storage"; 
import { useRouter } from "next/navigation";
import { useState } from "react"; 
import {v4 as uuidv4 } from "uuid"; 

export enum StatusText {
    UPLOADING = "Uploading file...",
    UPLOADED = "File uploaded successfully",
    SAVING = "Saving file to database...",
    GENERATING = "Generating AI Embeddings, This will only take a few seconds...",
}

export type Status = StatusText [keyof StatusText];

function useUpload() {
    const [progress, setProgress] = useState<number | null>(null);
    const [fileId, setFileId] = useState<string | null>(null);
    const [status, setStatus] = useState<Status | null>(null);
    const {user} = useUser();
    const router = useRouter;

    const handleUpload = async (file: File) => {
        if (!file || !user) return;

        // TODO: FREE/PRO limitations...
        const fileIdToUploadTo = uuidv4();

        const storageRef = ref(
            storage,
        );
            const uploadTask = uploadBytesResumable(storageRef,file);      
            
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setStatus (StatusText. UPLOADING);
                setProgress (percent);
                },
                (error) => {
                    console.error("Error uploading file", error);
                }, async () => {
                    setStatus (Status Text. UPLOADED);
                    const downloadUrl = await getDownload URL (uploadTask.snapshot.ref);
                    setStatus (StatusText.SAVING);
                    await setDoc(doc (db, "users", user.id, 'files', fileIdToUpload To), {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        downloadUrl: downloadUrl,
                        ref: uploadTask.snapshot. ref. fullPath,
                        createdAt: new Date(),
                        })
                        setStatus (StatusText. GENERATING);
                        
                        // Generate AI Embeddings...
                        setFileId(fileIdToUploadTo);
                        }
                
             );

        };
        return { progress, status, fileId, handleUpload };
}


export default useUpload;