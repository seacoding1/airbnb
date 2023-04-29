import Header from "./layout/Header";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Room from "./component/Room";

function App() {
  return (
   
    <Routes>
            <Route element={<Header/>}>
              <Route path="/" element={<Home/>}/>  
              <Route path="/:category" element={<Home/>}/>  
              <Route path="/room/:hostingNumber" element={<Room/>}/> 
            </Route>
    </Routes>

  );
}

export default App;
