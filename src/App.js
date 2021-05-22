import React, {useState, Fragment} from 'react';
import AddUser from './Components/Users/AddUser'; 
import UserList from './Components/UsersList/UsersList'; 

const App = () => {

  const [userListData, setUserListData] = useState([]); 
  const saveUserDataHandler = (enteredExpenseData) => {
    setUserListData((prevData)=> {
      return [...prevData, enteredExpenseData]
    })
    console.log(userListData);
  }

  return (
    <Fragment>
      <AddUser onSaveNewUser={saveUserDataHandler} />
      <UserList list={userListData} />
    </Fragment>
  );
}

export default App;
