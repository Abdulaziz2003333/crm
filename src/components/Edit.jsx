import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom'
function Edit() {
const [edit,setEdit]=useState('')
const [name,setName]=useState('');
const [surname,setSurname]=useState('');
const [cardnum,setCard]=useState('');
const [uniqueid,setUniqueId]=useState('');
const [shouldNavigate, setShouldNavigate] = useState(false);
const {id} = useParams();
async function fetched(id) {
    try {
        const response = await axios.get(`http://192.168.1.27:4478/edit/${id}`);
        const data = response.data.data;
        setName(data.name)
        setSurname(data.surname)
        setCard(data.cardnum)
        setUniqueId(data.uniqueid)
        console.log(response); 
    } catch (error) {
        
    }
}
   const handleSubmit = async (e) => {
    e.preventDefault()
            try{
                const obj = {
                    name,
                    surname,
                    cardnum,
                    uniqueid
                  }
               const response= await axios.put(`http://192.168.1.27:4478/edit/${id}`,obj) 
               setEdit(response);
               if(response.status === 201){
                setShouldNavigate(true);
               }

            }
            catch(error){
                console.log(error);
            }
    
   }
   useEffect(() => {
    fetched(id)
   },[id])
    console.log(edit);
  return (
    <div>Edit
<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={e => setName(e.target.value)} required/>
<input type="text" value={surname} onChange={e => setSurname(e.target.value)} required/>
<input type="number"value={cardnum} onChange={e => setCard(e.target.value)} required />
<input type="number" value={uniqueid} onChange={e => setUniqueId(e.target.value)} required/>
<button type='submit'>submit</button>
</form>

{ shouldNavigate && <Navigate to='/userlist'/>}

    </div>
  )
}

export default Edit