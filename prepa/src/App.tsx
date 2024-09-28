import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
      
      <Footer />
    </>
  )
}

export default App
