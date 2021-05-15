import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import UserList from './components/UserList';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar';

function App() {
  
  const [users,setUsers] = useState([])

  useEffect(() => {
    console.log('i am mounting')
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  }, [])

  const deleteUser = (id) =>{
    setUsers(users.filter(user=>user.id !==id))
  }
  
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <UserList users={users} deleteUser={deleteUser}/>
      </header>
    </div>
  );
}

export default App;
