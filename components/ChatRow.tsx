import { db } from "@/utils/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { CiChat1 } from "react-icons/ci";
import { FcEmptyTrash } from "react-icons/fc";
type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async() => {
    await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
    router.replace("/")
  }

  return (
    <Link
      href={`chat/${id}`}
      className={`chat space-x-3 ${active && "bg-gray-400/50 w-32 md:w-64"}`}
    >
      <CiChat1 />
      <h1 className="truncate">
        {" "}
        {messages?.docs[messages.docs.length]?.data().text ||
          "New Chat Message Here"}
      </h1>
      <FcEmptyTrash className="cursor-pointer hover:text-red-700 hover:bg-red-600" onClick={removeChat} />
    </Link>
  );
};

export default ChatRow;
