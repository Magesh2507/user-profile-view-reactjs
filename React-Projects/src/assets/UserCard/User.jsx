import React from 'react'
import './userCard.css'


const User = ({user}) => {
    console.log(user)
  return (
    <div className='card-container'>
            <span className = {user.status?"status online":"status offline"}>{user.status ? "ONLINE":"OFFLINE"}</span>
                <img src={user.profile} alt="user-image" className='img'></img>           
                    <h3>{user.name}</h3>
                    <h3>{user.city}</h3>
                    <p>{user.description}</p>
                <div className='buttons'>
                    <button className='primary'>Message</button>
                    <button className='primary outline'>Following</button>
                </div>
        <div className='skills'>
            <p>SKILLS</p>
            <ul>{user.skills.map((skill,index)=>(                
                <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default User