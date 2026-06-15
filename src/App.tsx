import WebIndex from './Web';
import Menu from './Menu/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebIndex/>} />
        <Route path="/select" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
