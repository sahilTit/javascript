import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Update from "./components/Update";
import ErrorPage from "./components/ErrorPage";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/update" element={<Update />} />
        <Route path="/error" element={<ErrorPage/>}/>
      </Routes>
      {/* <Form></Form> */}
    </BrowserRouter>
  );
}

export default App;
