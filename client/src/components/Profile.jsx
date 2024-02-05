import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {

  const [admins, setAdmins] = useState([])
  useEffect(() => {
    AdminRecords();
  }, [])


  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
      .then(result => {
        if (result.data.Status) {
          setAdmins(result.data.Result)
        }
        else {
          alert(result.data.Error)
        }
      })
  }

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = ()=>{
     axios.get('http://localhost:3000/auth/logout')
     .then(result=>{
      if(result.data.Status){
        localStorage.removeItem("valid")
        navigate('/')
      }
     })
  }
  
  return (
    <div >{
      admins.map(a => (

        <div className='text-center'>
          <h3 className='profile_name'>Admin Profile</h3>
          <div className='info'>
            <h2 className='email'>{a.email}</h2>
            <button type="button" class="btn btn-primary mt-2" onClick={handleLogout}>LogOut</button>
          </div>
        </div>
      ))
    }</div>
  )
}

export default Profile