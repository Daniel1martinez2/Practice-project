import React from 'react'; 

const UserListItem = props => {
  return (
    <li>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </li>
  ); 
}
export default UserListItem; 