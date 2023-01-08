
import './App.css';
import Main from "./Main"
import Temp from './Temp'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/weather" element={<Temp/>}/>
    
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
