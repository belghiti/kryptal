import { Welcome, Navbar, Loader, Transactions, Footer } from "./components"

const App = () => {
  return (
    <div className="main-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
