"use client";
import { db } from "@/utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { TbSend } from "react-icons/tb";
import toast from "react-hot-toast";

type Props = { Chatid: string };

const ChatInput = ({ Chatid }: Props) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  // useSwr to get Modal
  const model = "text-davinci-modal-003";
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        Chatid,
        "messages"
      ),
      message
    );
    //  Toast loading
    const notification = toast.loading("ChatGPT is thinking....");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        session,
        Chatid,
        model,
      }),
    }).then(() => {
      toast.success("chatGPT is responded", {
        id: notification,
      });
    });
  };

  return (
    <div className="rounded-lg text-sm mb-2">
      <form
        onSubmit={sendMessage}
        className="flex bg-[#40414F] flex-row p-2  md:mx-32"
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed px-3 disabled:text-gray-300"
          disabled={!session}
          placeholder="Send a message...."
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="hover:opacity-50 text-white md:px-2 py-1 rounded  disabled:cursor-not-allowed"
        >
          <TbSend size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
