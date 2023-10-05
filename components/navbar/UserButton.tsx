import React from 'react'
import { useContext } from 'react'
import { userContext } from '@/app/context/ContextAPI'

export default function UserButton() {
    const { user, setUser } = useContext(userContext);
  return (
    <div>
        Welcome, {user.FirstName} {user.LastName}
    </div>
  )
}
