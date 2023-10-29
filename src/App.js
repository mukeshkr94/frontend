import './App.css';
import {Routes,Route} from 'react-router-dom'
import Analytics from './pages/Analytics';
import Data from './pages/Data';
import Login from './pages/Login'
import PrivateComponent from './components/PrivateCom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Analytics/>} />
          <Route path='/data' element={<Data/>} />
        </Route>
        
        <Route path='/login' element={<Login/>} />
       </Routes>
    </div>
  );
}

export default App;
