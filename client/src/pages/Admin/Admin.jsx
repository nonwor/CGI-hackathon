import React from 'react'
import "./Admin.css"
import UserCard from '../../components/UserCard/UserCard'

function Admin() {
  return (
    <div className='user-cards' >
        <UserCard />
        <UserCard />
    </div>
  )
}

export default Admin