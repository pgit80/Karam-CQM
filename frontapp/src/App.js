import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./mainapp/Home";
import About from "./mainapp/About";
import Registration from "./mainapp/Registration";
import Login from "./mainapp/Login";
import Adlogin from "./mainapp/Adlogin";
import Dash from "./userapp/Dash";
import AddQuery from "./userapp/AddQuery";
import ViewPenQuery from "./userapp/ViewPenQuery";
import Addash from "./adminapp/Addash";
import Viewalluser from "./adminapp/Viewalluser";
import Viewallpenquery from "./adminapp/Viewallpenquery";
import Viewallproquery from "./adminapp/Viewallproquery";
import Viewallcomquery from "./adminapp/Viewallcomquery";
import EditQuery from "./userapp/EditQuery";
import Viewproquery from "./userapp/Viewproquery";
import Viewcomquery from "./userapp/Viewcomquery";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adlogin" element={<Adlogin />} />
            <Route path="/userdash/:id" element={<Dash />} />

            <Route path="/addquery/:id" element={<AddQuery />} />
            <Route path="/editquery/:id" element={<EditQuery />} />
            <Route path="/viewPenQuery/:id" element={<ViewPenQuery />} />
            <Route path="/viewProQuery/:id" element={<Viewproquery />} />
            <Route path="/viewComQuery/:id" element={<Viewcomquery />} />
            <Route path="/addash" element={<Addash />} />
            <Route path="/viewalluser" element={<Viewalluser />} />
            <Route path="/viewallpenquery" element={<Viewallpenquery />} />
            <Route path="/viewallproquery" element={<Viewallproquery />} />
            <Route path="/viewallcomquery" element={<Viewallcomquery />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
