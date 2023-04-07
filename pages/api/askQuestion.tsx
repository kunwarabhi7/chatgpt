// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt,model,chatid,session} = req.body;

    if(!prompt){
        res.status(400).json({answer:"Please provide a prompt"})
        return;
    }
    if(!chatid){
        res.status(400).json({answer:"Please provide a valid chatid"})
    return;
    }
    //Chat GPT query
const response = await query(prompt, chatid,model)
const message: Message={
    text:response || 'ChatGpt was unable to find the answer get lost now.'
}
  res.status(200).json({ answer: 'John Doe' })
}
