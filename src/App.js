import './App.css';
import Header from  './components/primitive-components/Header';

function App() {

let isLoggedIn =   localStorage.getItem('isLogged');

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
