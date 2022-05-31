import React,{useState,useEffect} from 'react'
import Signup from './component/Signup'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Home from './component/Home'
import User from './component/User'
import {  getDocs,collection, doc } from 'firebase/firestore'
import { auth, db } from './firebase'
const MyContext = React.createContext()

export default function App() {
  const [user,setUser]=useState('')

  const usersCollectionRef = collection(db, "users");

  const getUser=async()=>{
    const querySnapshot = await getDocs(usersCollectionRef)
    setUser(querySnapshot.forEach((doc)=>({doc})))
    console.log(doc)

  }
  getUser()

  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<User/>}/>

        </Routes>
        </BrowserRouter>
       <MyContext.Provider value={user}>
            <User/>
       </MyContext.Provider>
      </React.Fragment>
      
    </div>
     
  )
}

