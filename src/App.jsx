import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'
import Privacy from './pages/privacy'
import './assets/style.css'

const Notes = () => (
  <div>
    <h2>Notes</h2>
    <p>This is the notes page</p>
  </div>
)

const App = () => {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/rok" element={<Notes />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<Home />} />
        <Route path="/cod" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
