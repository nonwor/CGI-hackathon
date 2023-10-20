import React from 'react'
import "./UserCard.css"

function UserCard({ userResponse }) {
  return (
    <div className='card-container'>
        <div className="card-header">
            {userResponse.name}
        </div>
        <div className='card-content'>
            {userResponse.email}
        </div>
        <div className='recommendedCourse'>
            {userResponse.recommendedCourse}
        </div>
    </div>
  )
}

export default UserCard