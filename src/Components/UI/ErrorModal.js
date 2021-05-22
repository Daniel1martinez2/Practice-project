import React, {Fragment} from 'react'; 
import Card from './Card';
import Button from './Button'; 
import classes from './ErrorModal.module.css'; 
const ErrorModal = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
}
export default ErrorModal; 