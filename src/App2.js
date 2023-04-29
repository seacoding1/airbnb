import './App.css';
import { Route, Routes } from 'react-router-dom';
import Room from './component/Room';
import Room1 from './component/Room1';

function App() {
  /* 
    https://firebasestorage.googleapis.com
    /v0/b/deploytest-3f355.appspot.com/o/
    <<이미지이름>>?alt=media
  */
  return (
    <Routes>
      <Route path="/" element={<Room/>}/>
      <Route path="/test" element={<Room1/>}/>

    </Routes>
  );
}

export default App;
