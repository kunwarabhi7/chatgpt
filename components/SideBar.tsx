"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import ChatRow from "./ChatRow";
type Props = {};

const SideBar = (props: Props) => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="bg-[#202123] text-white  p-2 md:block md:w-[260px]">
      <NewChat />
      {chats?.docs.map((chat) => (
        <ChatRow key={chat.id} id={chat.id} />
      ))}
      {session && (
        <img
          className="rounded-full h-12 w-12 mt-20 cursor-pointer mx-auto hover:opacity-50 "
          onClick={() => signOut()}
          src={session.user?.image || ""}
          alt="userImage"
        />
      )}
    </div>
  );
};

export default SideBar;
