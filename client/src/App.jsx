import React from 'react'
 import { useState } from 'react';

function App() {
  const [user ,setuser] =useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/api/users").then((response)=>{
      setuser(response.data.data);
    }).catch((error)=>{
      console.error("There was an error!",error);
    })
  },[])

  return (
    <div>
      <h1>users</h1>

      <div>
        {user.map((user,index) =>(
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default App
