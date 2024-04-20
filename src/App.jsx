import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import { supabase } from './createClient'

function App() {

  const [users,setUsers]=useState([])
  console.log(users)

  useEffect(()=>{
    fetchUsers()  
  },[])


  async function fetchUsers(){
    const {data,error}=await supabase.from("users").select('*')
    setUsers(data)
    if(error)console.log(error)
    console.log(data)
  }

  return (
    <>
    <div className='heading'>
      <h1>Learning CRUD Operations</h1>
    </div>

    </>
  )
}

export default App
