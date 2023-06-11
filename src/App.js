import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Map from './Component/Map';
import CreateContact from './Component/CreateContact';
import MyData from './Component/MyData';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    
     <Routes>
      <Route path='/createcontact' element={<CreateContact/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/contact/data' element={<MyData/>}/> */}
      <Route path='*' element={<h1>404 Not Found</h1>}/>
     </Routes>

    </BrowserRouter>
  );
};
 
export default App;
