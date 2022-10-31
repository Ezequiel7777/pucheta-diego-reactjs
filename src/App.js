import Nav from "./components/NavBar";
import ListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import Categories from "./components/Categories";
import ItemDetail from "./components/ItemDetailContainer";
import Cart  from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import "./App.css";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Nav props= {CartWidget}>
          <CartWidget />
        </Nav>
        <Routes>
        <Route path={"/"} element={<ListContainer />} />
          <Route path={"/planes-alimentarios/:category"} element={<Categories/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/cart/purchase-form' element={<Form/>} />
          <Route path='/cart/purchase-form/checkout-order' element={<Ticket/>} />
          <Route path={"/planes-alimentarios/:category/:id"} element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
