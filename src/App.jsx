import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import './index.css'
import { supabase } from './createClient'

function App() {

  const [users,setUsers]=useState([])
  const [user,setUser]=useState({name:'',age:''})
  const [user2,setUser2]=useState({id:'',name:'',age:''})

  // console.log(users)
  console.log(user2)

  useEffect(()=>{
    fetchUsers()  
  },[])

  function handleChange(e){
    setUser({...user,[e.target.name]:e.target.value})
  }
  function handleChange2(e){
    setUser2({...user2,[e.target.name]:e.target.value})
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


  function displayUser(userId){
    users.map((user)=>{
      if(user.id===userId){
        setUser2({id:user.id,name:user.name,age:user.age})
      }
    })
  }

  //Update Operation  
  async function updateUsers(userId,e){
    e.preventDefault()
    const {data,error}=await supabase.from('users').update({id:user2.id,name:user2.name,age:user2.age}).eq('id',userId)
    if(error)console.log(error)
    else{
      console.log('User Updated Successfully')
      fetchUsers()
      window.location.reload(); 
    }
  }

  return (
    <div>
    <div className='container'>
      <h1>Learning CRUD Operations</h1>
      
      <div className='operation'>

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

{/* Updation Form */}


<div className='updation'>

    <h2>Edit</h2>

    <form onSubmit={(e)=>updateUsers(user2.id,e)}>
      <h4>Name</h4>
      <input type="text" defaultValue={user2.name} name='name' onChange={handleChange2} />
      <h4>Age</h4>
      <input type="number" defaultValue={user2.age} name='age' onChange={handleChange2} />
      <button type='submit'>Save</button>
    </form>
</div>
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
              <td>
                <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                <button onClick={()=>{displayUser(user.id)}}>Edit</button>
              
              </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default App
