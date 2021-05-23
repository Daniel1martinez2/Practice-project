import React, {useState, Fragment, useRef} from 'react';
import Card from '../UI/Card'; 
import classes from './AddUser.module.css'; 
import Button from '../UI/Button'; 
import ErrorModal from '../UI/ErrorModal'; 
const AddUser = (props) =>{
  const nameInputRef =  useRef(); 
  const ageInputRef =  useRef(); 
  const [errorData, setErrorData] = useState({title:'something wrong', message: 'sad moment', active: false})
  
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
    const enteredName =  nameInputRef.current.value;
    const enteredAge =  ageInputRef.current.value;
    if(enteredName.trim() === '' || enteredAge.trim() === '') {
      setErrorData({
        title: 'invalid field info',
        message: 'pls enter some data at first',
        active: true
      });
      return; 
    } ;
    if( parseInt(enteredAge) < 1){
      setErrorData({
        title: 'invalid Age',
        message: 'pls enter some valid Age between 1-100',
        active: true
      });
      return; 
    }; 
    
    const newUser ={
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    }
    props.onSaveNewUser(newUser); 
    //reset the input fields -> manipulating the DOM without REACT, which is "meh solution" 
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }
  return (
    <Fragment>
    {errorData.active && <ErrorModal title={errorData.title} message={errorData.message} onCloseModal={closeModalHandler} />}
    <Card className={classes.input} >
    <form onSubmit={addUserHandler}>
      <label htmlFor="username" >Username</label>
      <input id="username" type="text" ref={nameInputRef} />
      <label htmlFor="age" >Age (Years)</label>
      <input id="age" type="number"  ref={ageInputRef} />
      <Button type="submit">Add user </Button>
    </form>
    </Card>
    </Fragment>
  );
}
export default AddUser; 