import React from 'react'

import UserCard from './UserCard';

function UserList (props) {
  console.log(props)
    return(
      <>
          
        {
          props.users.map((user)=> <UserCard key={user.id} user={user} deleteUser={props.deleteUser} />)
          
        }
      </>
    )
    
}

export default UserList