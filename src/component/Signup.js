import React, { useState } from 'react'
import {collection,addDoc} from 'firebase/firestore'
import {db} from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'

function Signup() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[Firstname,setName]=useState('')
    const[Lastname,setLast]=useState('')
    const[mobile,setNumber]=useState(0)
    const[age,setAge]=useState(0)

    const navigate= useNavigate()

    const usersCollectionRef=collection(db,'users')


    const createUser = async(e)=>{

      e.preventDefault()
        await addDoc(usersCollectionRef,{name:Firstname,last:Lastname,mobile:mobile,age:age})

        try{
            const user = await createUserWithEmailAndPassword(auth,email,password)
            navigate('/login')
        }catch(error){
            alert(error.message)
        }

    }
  return (
    <div>
        <input type='text' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
        <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
      <input type='text' placeholder='FirstName' onChange={(e)=>{setName(e.target.value)}}/> <br/>
      <input type='text' placeholder='LastNmae' onChange={(e)=>{setLast(e.target.value)}}/> <br/>
      
      <input type='number' placeholder='mobile number' onChange={(e)=>{setNumber(e.target.value)}}/> <br/>

      <input type='number' placeholder='age' onChange={(e)=>{setAge(e.target.value)}}/> <br/>

      <button type='submit' onClick={createUser}>Submit</button>
    </div>
  )
}

export default Signup
