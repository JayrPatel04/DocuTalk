'use client'

import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

function PlaceholderDocument() {
    const router=useRouter();

    const handleClick = ()=>{
        router.push("/dashboard/upload") //by pushing we check if the user is pro or not and whether he has reached the file limit and if so, push him to the upgrade page
    }
  return (
    <Button onClick={handleClick} className="flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
        <PlusCircleIcon className="h-16 w-16"/>
        <p>Add a Document</p>
    </Button>
  );
}

export default PlaceholderDocument