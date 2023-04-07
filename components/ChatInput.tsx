"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { TbSend } from "react-icons/tb";

type Props = { Chatid: string };

const ChatInput = ({ Chatid }: Props) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");
  return (
    <div className="rounded-lg text-sm mb-2">
      <form className="flex bg-[#40414F] flex-row p-2  md:mx-32">
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
