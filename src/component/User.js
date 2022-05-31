import React from 'react'
import MyContext from '../App'
export default function User(props) {

   

    
  return (
    <div>
     <MyContext.Consumer>
         {data => <h1>{data.name}</h1>}
     </MyContext.Consumer>
    </div>
  )
}
