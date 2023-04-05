import Link from 'next/link';
import React from 'react'
import {CiChat1} from 'react-icons/ci'
import {FcEmptyTrash} from 'react-icons/fc'
type Props = {
    id:string;
}

const ChatRow = ({id}: Props) => {
  return (
    <Link href={   `chat/${id}`} className='chat space-x-3'>
        <CiChat1 />
       <h1 className='truncate'> ChatRow is my name you got this??</h1>
        <FcEmptyTrash />
        </Link>
  )
}

export default ChatRow