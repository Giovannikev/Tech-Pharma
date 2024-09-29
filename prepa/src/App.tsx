import './App.css'
import ChatBotPage from './components/chatbot/ChatBot'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import ProductCatalogue from './components/Products/ProductsData'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Login />
        <ChatBotPage />
        <ProductCatalogue />
      </main>
      
      <Footer />
    </>
  )
}

export default App
