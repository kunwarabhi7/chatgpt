import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

type Props = {
  params:{
    id:string
  }
}

const page = ({params:{id}}: Props) => {
  
  return (
    <div className='text-white h-screen flex flex-col overflow-hidden'>
      <Chat Chatid={id} />
<ChatInput Chatid={id}/>
      </div>
  )
}

export default page