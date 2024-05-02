import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const User = () => {
  const [users, setusers] = useState([{
    id: 1,
    name: 'John',
    email: '4gUvI@example.com',
    age: 25
  }])

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setusers(res.data))
      .catch(err => console.log(err))
  }, []);

 const  deleteUser = ((id) => {
    axios.delete('http://localhost:5000/deleteUser/' + id)
      .then(res => {
        window.location.reload()
      })
      .catch(err => console.log(err))
  })


  return (
    <>
      <div className="
          d-flex 
          vh-100 
          bg-primary 
          justify-content-center 
          align-items-center"
      >
        <div className="w-50 bg-white rounded p-3">
          <Link to='/create' className='btn btn-success'> Add +</Link>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <Link to={`/update/${user._id}`} className="btn btn-primary">Update</Link>
                        <button className="btn btn-danger" onClick={(e) => deleteUser(user._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default User