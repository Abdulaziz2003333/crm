import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';






function HomePage() {

const [user,setUsers]=useState([])
const [totalCount, setTotalCount] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.27:4478/addpost');
      setUsers(response.data);
      const data= response.data
      const count = data.length;
      setTotalCount(count);
      console.log(totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  return (
  <div>
    <h1>Home Page </h1>
    <table>
       <thead>
        <tr>
          <th>Full Name </th>
  
          <th>Unique ID</th>
          <th>cardnumber</th>
         
        </tr>
       </thead>
       <tbody>
       {
  user?.data?.map((i)=>(
    <tr key={i.id}>
     <td>{i.name}  {i.surname} </td>
    
     <td>{i.uniqueid}</td>
     <td>{i.cardnum}</td>
    
    </tr>
  ))
}
       </tbody>
      </table>
<h3>{totalCount} aloooo</h3>

    </div>
  )
}

export default HomePage