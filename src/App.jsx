import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import { supabase } from './createClient'

function App() {

  const [users,setUsers]=useState([])
  const [user,setUser]=useState({name:'',age:''})
  // console.log(users)

  useEffect(()=>{
    fetchUsers()  
  },[])

  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

//Read Operation
  async function fetchUsers(){
    const {data,error}=await supabase.from("users").select('*')
    setUsers(data)
    if(error)console.log(error)
    else{
        console.log(data)
    }
  }

  //Creation Operation

  async function createUsers(){
    const {error}=await supabase.from('users').insert({name:user.name,age:parseInt(user.age)})
    if(error)console.log(error)
    else{
      fetchUsers()
      console.log('User Created Successfully')
    }
  }

  return (
    <>
    <div className='heading'>
      <h1>Learning CRUD Operations</h1>
<div className='creation'>

    <h2>Creation</h2>

    <form onSubmit={createUsers}>
      <h4>Name</h4>
      <input type="text" placeholder='Name' name='name' onChange={handleChange} />
      <h4>Age</h4>
      <input type="number" placeholder='Age' name='age' onChange={handleChange} />
      <button type='submit'>Create</button>
    </form>
</div>

<h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((users)=>
            <tr key={users.id}>
              <td>{users.id}.</td>
              <td>{users.name}</td>
              <td>{users.age}</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>

    </>
  )
}

export default App
