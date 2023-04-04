import React from "react";
import { db } from "@/utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HiPlusSm } from "react-icons/hi";
type Props = {};

const NewChat = (props: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userID: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div onClick={createNewChat} className="flex items-center px-2 cursor-pointer">
        
        <HiPlusSm size={20}  />
         
            <p className='text-gray-200'>New Chat</p>
    </div>
  );
};

export default NewChat;
