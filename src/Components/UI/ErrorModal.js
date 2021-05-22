import React from 'react'; 
import Card from './Card';
import Button from './Button'; 
import classes from './ErrorModal.module.css'; 
import Wrapper from '../Helpers/Wrapper'; 
const ErrorModal = props => {
  return (
    <Wrapper>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal} >
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={classes.content} >{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseModal}>Okay</Button>
        </footer>
      </Card>
    </Wrapper>
  );
}
export default ErrorModal; 