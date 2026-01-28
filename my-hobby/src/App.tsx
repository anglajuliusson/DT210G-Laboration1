// Importera sidans huvudkomponenter
import Header from "./components/Header"
import Footer from "./components/Footer"
import Conserts from "./components/Conserts"
import "./assets/css/App.css" // Importera generell CSS för applikationen

function App() {

  return (
    <>
      {/* Header-komponenten får sidans titel skickad som prop */}
      <Header title="Mitt fritidsintresse" />
      {/* Huvudinnehåll med dynamisk genererad lista */}
      <Conserts />
      {/* Footer-komponent */}
      <Footer />
    </>
  )
}

export default App
