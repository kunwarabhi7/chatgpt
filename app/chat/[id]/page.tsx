import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='text-white h-screen'>
      <Chat />
<ChatInput />
      Chat Page</div>
  )
}

export default page