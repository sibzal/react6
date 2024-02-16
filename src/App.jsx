import Header  from './components/Header/Header'
import Footer  from './components/Footer/Footer'
import Start  from './pages/Start/Strat'
import CatalogPage from './pages/Catalog/Catalog'
import TovarPage from './pages/TovarPage/TovarPage'
import './App.css'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Start/>} />
        <Route path="/catalog" element = {<CatalogPage/>} />
        <Route path="/catalog/:id" element = {<TovarPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
