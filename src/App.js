
import './App.css';
 import Background from './components/background/Background';
import Music from './components/music/Music';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './components/search/Search';







function App() {

  return (
    
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Background/>
       <Routes>
        <Route path='/music' element={ <Music/>}/>
        <Route path='/search' element={ <Search/>}/>
        {/* <Route path='/' element={ </>}/> */}
       </Routes>
       </BrowserRouter>
       </div>
       )
       }

export default App;
