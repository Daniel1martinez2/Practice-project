import React, {useState} from 'react';
import Card from '../UI/Card'; 
import classes from './AddUser.module.css'; 
import Button from '../UI/Button'; 
import ErrorModal from '../UI/ErrorModal'; 
const AddUser = (props) =>{
  const [enteredUserName,setEnteredUserName ] = useState('');
  const [enteredUserAge,setEnteredUserAge ] = useState('');
  const [errorData, setErrorData] = useState({title:'something wrong', message: 'sad moment', active: false})
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value)
  }
  const closeModalHandler = () =>{
    setErrorData((prevData)=> {
      return {
        ...prevData, 
        active: false,
      }
    })
  }
  const addUserHandler = (event) =>{
    event.preventDefault(); 
    if(enteredUserName.trim() === '' || enteredUserAge.trim() === '') {
      setErrorData({
        title: 'invalid field info',
        message: 'pls enter some data at first',
        active: true
      });
      return; 
    } ;
    if( parseInt(enteredUserAge) < 1){
      setErrorData({
        title: 'invalid Age',
        message: 'pls enter some valid Age between 1-100',
        active: true
      });
      return; 
    }; 
    
    const newUser ={
      name: enteredUserName,
      age: enteredUserAge,
      id: Math.random().toString(),
    }
    props.onSaveNewUser(newUser); 
    setEnteredUserName(''); 
    setEnteredUserAge(''); 
  }
  return (
    <div>
    {errorData.active && <ErrorModal title={errorData.title} message={errorData.message} onCloseModal={closeModalHandler} />}
    <Card className={classes.input} >
    <form onSubmit={addUserHandler}>
      <label htmlFor="username" >Username</label>
      <input id="username" type="text" name="username" value={enteredUserName} onChange={userNameChangeHandler} />
      <label htmlFor="age" >Age (Years)</label>
      <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
      <Button type="submit">Add user </Button>
    </form>
    </Card>
    </div>
  );
}
export default AddUser; 