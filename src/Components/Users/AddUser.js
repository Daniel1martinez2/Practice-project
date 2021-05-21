import React, {useState} from 'react';
import Card from '../UI/Card'; 
import classes from './AddUser.module.css'; 
import Button from '../UI/Button'; 
const AddUser = (props) =>{
  const [enteredUserName,setEnteredUserName ] = useState('');
  const [enteredUserAge,setEnteredUserAge ] = useState('');
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value)
  }
  const addUserHandler = (event) =>{
    event.preventDefault(); 
    console.log(enteredUserName,enteredUserAge);
    //console.log(event.target.username.value);
  }
  return (
    <Card className={classes.input} >
    <form onSubmit={addUserHandler}>
      <label htmlFor="username" >Username</label>
      <input id="username" type="text" name="username" value={enteredUserName} onChange={userNameChangeHandler} />
      <label htmlFor="age" >Age (Years)</label>
      <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
      <Button type="submit">Add user </Button>
    </form>
    </Card>
  );
}
export default AddUser; 