import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ElectronicsGallery from './components/ElectronicsGallery'
function App() {

  return (
    <Router>
        <Layout>
          <Routes>
          <Route path="/" element={
            <ElectronicsGallery/> 
          }/>
          </Routes>
           
        </Layout>
    </Router>
  )
}

export default App
