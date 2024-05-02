import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers/' + id)
      .then(res => {
        setName(res.data.name)
        setEmail(res.data.email)
        setAge(res.data.age)
      })
      .catch(err => console.log(err))
  }, []);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/updateUser/' + id, {
      name,
      email,
      age
    })
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
  }

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
          <form onSubmit={update}>
            <h2>Update User</h2>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder='Enter Name'
                className='form-control'
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder='Enter Email'
                className='form-control'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                placeholder='Enter Age'
                className='form-control'
                value={age}
                onChange={handleAgeChange}
              />
            </div>
            <button className='btn btn-success'>Update</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateUser