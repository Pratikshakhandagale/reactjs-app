import './App.css';
import Login from './components/function-components/Login';
import Header from  './components/primitive-components/Header';

import {useState} from 'react';

function App() {

let isLogged =   localStorage.getItem('isLogged');
let [isLoggedIn, setLoggedIn] = useState(isLogged)

  return (
    <div className=" p-4" >
      <header>
        <Header></Header>
      </header>
      { !isLoggedIn ?  '' : ''}

    </div>
  );
  
}


export default App;
