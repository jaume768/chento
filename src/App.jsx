import Navbar from './components/navbar/navbar';
import Inicio from './components/inicio';
import Footer from './components/footer/footer';
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
