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
    const {data,error}=await supabase.from("users").select('*').order('id')
    setUsers(data)
    if(error)console.log(error)
    else{
        console.log(data)
    }
  }

  //Creation Operation

  async function createUsers(e){
    e.preventDefault()
    const {error}=await supabase.from('users').insert([{name:user.name,age:user.age}])
    if(error)console.log(error)
    else{
      console.log('User Created Successfully')
      fetchUsers()
      window.location.reload(); 
    }
  }

  //Delete Operation

  async function deleteUser(userId){
    const {error}=await supabase.from('users').delete().eq('id',userId)
    if(error)console.log(error)
    else{
      fetchUsers()
      console.log('User Deleted Successfully')
    }
  }

  return (
    <>
    <div className='container'>
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

<h1 className='table'>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user)=>
            <tr key={user.id}>
              <td>{user.id}.</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td><button onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
            </tr>
            )}
        </tbody>
      </table>
    </div>

    </>
  )
}

export default App
