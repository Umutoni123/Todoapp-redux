import './App.css';
import Registration from './component/Registration';
import { useState } from 'react';

function App() {
  const [name,useName]=useState("Noella")
  const[email,useEmail]=useState("noellaumutoni@gmail.com")
  // const[email,useEmail]=useState("noellaumutoni@gmail.com")
  return (
    <div>
      <Registration name={name} email={email}/>
    </div>
  );
}

export default App;
