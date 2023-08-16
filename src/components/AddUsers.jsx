import React, { useEffect, useState } from 'react'

import axios from 'axios'
function AddUsers() {
  const [name,setName]=useState('');
  const [surname,setSurname]=useState('');
  const [cardnum,setCard]=useState('');
  const [uniqueid,setUniqueId]=useState('');
  const [err,setErr]=useState('');
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const obj = {
        name,
        surname,
        cardnum,
        uniqueid
      }
      const response = await axios.post('http://192.168.100.116:3000/addpost',obj );
      console.log(obj);
      console.log(response);
    } catch (error) {
      console.log(error.response.data.errors);
      setErr(error.response.data.errors);
      }
  }

  return (

    <div>AddUsers
<form onSubmit={handleSubmit}> 
<input type="text" value={name} onChange={e => setName(e.target.value)} required/>
<input type="text" value={surname} onChange={e => setSurname(e.target.value)} required/>
<input type="number"value={cardnum} onChange={e => setCard(e.target.value)} required />
<input type="number" value={uniqueid} onChange={e => setUniqueId(e.target.value)} required/>

<button type='submit'>Click</button>



</form>

<h2>{err}</h2>

    </div>
  )
}

export default AddUsers