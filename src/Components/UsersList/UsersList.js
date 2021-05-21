import React from 'react'; 
import UserListItem from './UserListItem'; 
import classes from './UsersList.module.css'; 
import Card from '../UI/Card';
const UserList = props => {
  return (
    <Card className={classes.users}>
    <ul >
      {props.list.map(user => <UserListItem name={user.name} age={user.age} key={user.id} />)}
    </ul>
    </Card>
  ); 
}; 
export default UserList; 