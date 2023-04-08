// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import query from "@/lib/queryApi";
import { adminDb } from "@/utils/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, model, chatid, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" });
    return;
  }
  if (!chatid) {
    res.status(400).json({ answer: "Please provide a valid chatid" });
    return;
  }
  //Chat GPT query
  const response = await query(prompt, chatid, model);
  const message: Message = {
    text: response || "ChatGpt was unable to find the answer get lost now",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "chatGPT",
      name: "chatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatid)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
