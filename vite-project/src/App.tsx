import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Airdrop from './components/Airdrop';
import Home from './pages/HomePage'

function App() {
  //return <div><Header/></div>
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aidrop" element={<Airdrop />}></Route>
      </Routes>
    </BrowserRouter>
    
  );

}

export default App
