import { Outlet } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import './global.css'



function App() {

  return (
    <div className='AppBackground'>
   <Header/>
   <Outlet/>
   <Footer/>
    </div>
  )
}

export default App
