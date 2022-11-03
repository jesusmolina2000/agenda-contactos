import logo from "./logo.svg";
import "./App.css";
import CompShowContactos from "./Contactos/showContacto";
import CompCreateContacto from "./Contactos/createContacto";
import CompEditContacto from "./Contactos/editContacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowContactos />} />
          <Route path="/create" element={<CompCreateContacto />} />
          <Route path="/edit/:id" element={<CompEditContacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
