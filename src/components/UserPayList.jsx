import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
function UserPayList() 





{
  const [users, setUsers] = useState('');



  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.0.103:4000/addpost');
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div >UserPayList
 <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Sur Name</th>
          <th>Unique ID</th>
          <th>cardnumber</th>
          <th>Money</th>
        </tr>
       </thead>
       <tbody>
       {
  users?.data?.map((i)=>(
    <tr key={i.id}>
     <td>{i.name}</td>
     <td>{i.surname}</td>
     <td>{i.uniqueid}</td>
     <td>{i.cardnum}</td>
     <td>{i.money}</td>\n
    </tr>
  ))
}
       </tbody>
      </table>



    </div>
  )
}

export default UserPayList