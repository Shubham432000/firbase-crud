import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate= useNavigate()
    const login =async(e)=>{
        e.preventDefault()
        try{
            const user= await signInWithEmailAndPassword(auth,email,password)
            navigate('/user')
        }catch(error){
            alert(error.message)
        }
    }
  return (
    <div>
        <input type='text' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
        <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/> <br/>

        <button type='submit' onClick={login}>Submit</button>
      
    </div>
  )
}
