import Nav from "./components/NavBar";
import ListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";
import ItemDetail from "./components/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <CartWidget />
        </Nav>
        <Routes>
          <Route path={"/planes-alimentarios"} element={<ListContainer />} />
          <Route path={"/planes-alimentarios/veganos/:id"} element={<ItemDetail />} />
        </Routes>
        <div className="flex flex-wrap justify-evenly mt-40">
          <ListContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
