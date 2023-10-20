import React from 'react'
import "./UserCard.css"

function UserCard() {
  return (
    <div className='card-container'>
        <div className="card-header">
            Full Name
        </div>
        <div className='card-content'>
            <p>email</p>
            <p>age</p>
            <div className='progress-bar'>
                100%
            </div>
        </div>
    </div>
  )
}

export default UserCard