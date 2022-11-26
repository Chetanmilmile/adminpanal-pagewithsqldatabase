import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import './App.css';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <ToastContainer position='top-center'/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/addContact' element={<AddEdit/>}/>
        <Route exact path='/update/:id' element={<AddEdit/>}/>
        <Route exact path='/view/:id' element={<View/>}/>


      </Routes>
      
    </div>
      </BrowserRouter>
  );
}

export default App;
