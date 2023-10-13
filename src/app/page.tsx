"use client";
import React from "react";
import Board from "@/components/Board";
import Login from "@/components/Login";

// types
import {User} from '@/types'

const initialStateUsr = (): User | null => {
  if (typeof window !== "undefined") {
    const user: string | null = localStorage.getItem("user")
    if (user !== null) {
      return JSON.parse(user)
    } else {
      return null
    }
  }
  return null
}

export default function Home(): React.JSX.Element  {
  const [isMounted, setItMounted] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<User | null>(initialStateUsr)

  React.useEffect(() => {
    setItMounted(true)
  },[])
  
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  },[user])

  const getUser = (user: User | null) => setUser(user)

  if(!isMounted) return <p>loading...</p>

  return (
   <section className="w-full h-full">
       {user ? (
          <Board user={user} setUser={getUser} />
        ) : (
          <Login setUser={getUser} />
        )}
   </section>
  )
}
