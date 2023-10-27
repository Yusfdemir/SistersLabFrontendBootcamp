import './App.css'
import CoinFlipper from './components/CoinFlipper'
import Dashboard from './components/Dashboard'
import Hamburger from './components/Hamburger'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TodoApp from './components/TodoApp/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='' element={<CoinFlipper/>}/>
          <Route path='/hamburger' element={<Hamburger/>}/>
          <Route path='/todo' element={<TodoApp/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
