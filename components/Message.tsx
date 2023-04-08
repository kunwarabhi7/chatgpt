import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message:DocumentData
}

const Message = ({message}: Props) => {
  return (
    <div>{message.text}</div>
  )
}

export default Message