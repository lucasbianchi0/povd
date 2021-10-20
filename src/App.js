
import './App.css';
import Landing from './components/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList/CardList';
import Spinner from './components/Spinner/Spinner';
import Portada from './components/Portada/Portada';


const App = () =>{
  
  return (
   
    <div className="App">
      
        <NavBar/>
        <Portada></Portada>
        <Landing></Landing>
        <Spinner></Spinner>
        <CardList/>

      
     
    </div>
  );
}

export default App;
