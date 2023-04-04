'use client'
import React from 'react'
import { useSession,signOut } from 'next-auth/react'
import NewChat from './NewChat'
type Props = {}

const SideBar = (props: Props) => {
   const {data:session} = useSession()
  return (
    <div className='bg-[#202123] text-white  p-2 md:block md:w-[260px]'>
        <div className='flex items-center  border p-2 rounded-md border-gray-600'>
               <NewChat />

        </div>
        
        {session && <img className='rounded-full h-12 w-12 mt-20 cursor-pointer mx-auto hover:opacity-50 ' onClick={()=>signOut()} src={session.user?.image || ''} alt='userImage' />}
    </div>
  )
}

export default SideBar