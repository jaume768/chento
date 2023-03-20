import Navbar from './components/navbar';
import Inicio from './components/inicio';
import Footer from './components/footer';
import { routes } from './routes';

function App() {

  return (
    <>
      <Navbar/>
      <Inicio/>
      {routes}
      <Footer/>
    </>
  )
}

export default App
