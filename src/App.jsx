import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Privacy from './pages/privacy'
import Rok from './pages/rok'
import Detail from './pages/detail'
import './assets/style.css'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/rok" element={<Rok />} />
        <Route path="/rok/:number" element={<Detail />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
