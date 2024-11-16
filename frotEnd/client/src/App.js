// import logo from './logo.svg';
import './App.css';
import react from "react";
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsename] = useState("");

  const [listOfUsers, setListOfUsers] = useState([]);
  
  useEffect(() => {
    // const users = await axios.get("http://localhost:3001/users")

    axios.get("http://localhost:3001/users").then((users) => {
      console.log(users)
      setListOfUsers(users.data);
    }).catch((error) => {
      console.log(error);
      console.log(error.message);
    })

  }, [])
  
  const createUser = () => {
    if(name == "" || age == 0 || username == ""){
      alert("Preencha todos os Campos")
    }else{
      axios.post("http://localhost:3001/users", {
        name, // Quando o nome é igual podemos deixar assim "name" em vez de "name: name"
        age: age, 
        username: username
      })
      .then((response) => { // Usando a "Arrow Function";
        console.log(response);
        setListOfUsers([
          ...listOfUsers,
          response.data
        ]);

        console.log(listOfUsers);

        setName("");
        setAge(0);
        setUsename("");
        
      })
      .catch(function (error) { // Não usando a "Arrow Function";
        console.log(error);
      } );

    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type='text'
            placeholder='Digite seu nome...'
            value={name}
            onChange={(event) => { setName(event.target.value) }}
          />
          
          <input
            type='number'
            placeholder='Digite sua idade...'
            value={age}
            onChange={(event) => { setAge(event.target.value) }}
          />
          <input
            type='text'
            placeholder='Digite seu username...'
            value={username}
            onChange={(event) => { setUsename(event.target.value) }}
          />
          
          <button onClick={createUser}> Criar Usuário </button>
        </div>
        <div class="userDisplay">
          {listOfUsers.map((user) => {
            return(
              <div style={{display: "flex", justifyContent: "center" , gap: "20px", border: "5px solid blue", margin: "10px"}}>
                <h3>Name: {user.name}|</h3>
                <h3>Age: {user.age}|</h3>
                <h3>Username: {user.username}|</h3>
                {/* <hr /> */}
              </div>
            )
          })}
        </div>

        
      </header>
    </div>
  );
}

export default App;
