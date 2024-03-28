import React from 'react'
import './userCard.css'
import User from './User'

const userData = [
    {
        name:"James",
        city:"New York",
        description : "Front-end developer",
        skills : ["UI/UX", "Front End Development", "HTML", "CSS", "Javascript", "React", "Node"],
        status : false,
        profile : 'userCardImages/james.jpg'
    },
    {
        name:"Klassen",
        city:"Delhi",
        description : "Back-end developer",
        skills : ["Java","python","vercel", "Ruby", "Javascript", "React", "Node"],
        status : true,
        profile : 'userCardImages/klassen.jpg'
    },
    {
        name:"Queen",
        city:"Tokyo",
        description : "Data Analyst",
        skills : [ "Front End Development", "AWS", "HTML", "CSS", "Javascript", "React", "Node"],
        status : false,
        profile : 'userCardImages/queen.jpg'
    }
]

const UserCard = () => {
  return (<>{userData.map((user, index)=>(
   <User key={index} user={user}/>
    ))}
  </>)
}

export default UserCard