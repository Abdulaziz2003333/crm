import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
function UserList() {
  const [users, setUsers] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.0.103:4000/addpost');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = users?.data?.filter(user => {
    if (userSearch === '') {
      return true;
    } else {
      return (
        userSearch
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
const handleEdit=()=>{
Navigate('/edit')
}
  return (
    <div>
      <h1>UserList</h1>
      <input type="text" onChange={e => setUserSearch(e.target.value)} />
        {filteredUsers?.map(user => (
          <div key={user.id}>
            <ul>
              <li>{user.name}</li>
              <li>{user.surname}</li>
              <li>{user.cardnum}</li>
              <li>{user.uniqueid}</li>
              <Link to={`/edit/${user.id}`} onClick={handleEdit}>edit</Link>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default UserList;
