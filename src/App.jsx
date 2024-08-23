import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Cod from './pages/cod'
import Rok from './pages/rok'
import Detail from './pages/detail'
import Cart from './pages/cart'
import HomeBlogController from './components/home_blog_controller'
import FloatingButton from './components/floatingButton'
import './assets/style.css'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/rok" element={<Rok />} />
        <Route path="/rok/:number" element={<Detail type="rok" />} />
        <Route path="/cod/:number" element={<Detail type="cod" />} />
        <Route path='/blog/:id' element={<HomeBlogController />} />
        <Route path="/cod" element={<Cod />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
      <FloatingButton />
    </Router>
  )
}

export default App
