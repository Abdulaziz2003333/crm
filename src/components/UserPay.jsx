import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
function UserPay() {
const [pay,setPay]=useState('');
const [userSearch, setUserSearch] = useState('');
const [users, setUsers] = useState([]);
const [userId, setID] = useState([]);
const fetchData= async ()=>{
try{
const response= await axios.get('http://192.168.0.103:4000/addpost');
setUsers(response.data)
}
catch(error){
console.log(error);
}

}
useEffect(()=>{
  fetchData()
},[])
const filteredUsers = users?.data?.filter(user => {
  if (userSearch === '') {
    return true;
  } else {
    return (
      userSearch.toString()
        .split(' ')
        .filter(keyword => keyword !== '')
        .every(keyword =>
          ['uniqueid'].some(field =>
            user[field]?.toString().includes(keyword)
          )
        )
    );
  }
});




const handleSubmit=async (e)=>{
e.preventDefault()
try {
  const resData= await axios.put('http://192.168.0.103:4000/pay',{id:Number(userId),money:Number(pay) })
  console.log(resData);
} catch (error) {
 console.log(error); 
}
}




  return (
    <div>UserPay

<form action="" onSubmit={handleSubmit}>
<input type="number"  value={userSearch} onChange={e => setUserSearch(e.target.value)}  />
<input type="number" value={pay} onChange={e => setPay(e.target.value)} />
<button>Done</button>
</form>




{userSearch !== '' ? filteredUsers?.map(user => (
        <div key={user.id} onClick={() => {
          setID(user.id);
          setUserSearch(user.uniqueid)
        }}>
          <ul >
            <li>{user.name}</li>
            <li>{user.surname}</li>
            <li>{user.uniqueid}</li>
            {/* <Link to={`/edit/${user.id}`} onClick={handleEdit}>edit</Link> */}
          </ul>
        </div>
      )) : ''}

    </div>
  )
}

export default UserPay