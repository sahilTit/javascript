import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet>
        <a href="/sign-in"></a>
      </Outlet>
    </>
  );
}

export default App;
