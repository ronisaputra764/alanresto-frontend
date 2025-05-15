import Navbar from './components/Navbar'
import Transaction from './pages/Transaction'
import { Route, Routes } from 'react-router'
import FoodList from './pages/FoodList'
import { useParams } from 'react-router'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Transaction />} />
        <Route path='/food' element={<FoodList />} />
      </Routes>

    </>
  )
}

export default App
