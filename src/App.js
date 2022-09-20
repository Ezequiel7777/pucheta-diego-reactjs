import Nav from './components/NavBar'
import ListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import './App.css'

function App() {
  return (
    <>
      <Nav>
        <CartWidget />
      </Nav>
      <div className='flex flex-wrap justify-evenly mt-40'>
      <ListContainer greeting = 'Mi primera pre entrega de proyecto'/>
      </div>
    </>
  );
}

export default App;
