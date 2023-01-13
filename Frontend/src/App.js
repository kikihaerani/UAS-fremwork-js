import {BrowserRouter, Routes, Route} from "react-router-dom";
import KelasList from "./components/KelasList";
import AddKelas from "./components/AddKelas";
import EditKelas from "./components/EditProduct";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<KelasList/>}/>
          <Route path="/add" element={<AddKelas/>}/>
          <Route path="/edit/:id" element={<EditKelas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
