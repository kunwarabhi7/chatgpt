import React from 'react'
import {HiPlusSm} from 'react-icons/hi'
import {BiComment} from 'react-icons/bi'
type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className='bg-[#202123] text-white hidden p-2 md:block md:w-[260px]'>
        <div className='flex items-center  border p-2 rounded-md border-gray-600'>
            <HiPlusSm size={20}  />
            <p className='text-gray-200'>New Chat</p>

        </div>
        <div className='flex items-center'>
            <BiComment />
            <p>chat</p>
        </div>
    </div>
  )
}

export default SideBar