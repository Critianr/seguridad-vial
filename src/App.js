import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'
// import { SeguridadVial } from './pageindices/SeguridadVial/SeguridadVial';

function App() {
  return (
    <BrowserRouter>
    <Header />
    {/* <SeguridadVial /> */}

    <AppRouter />
    <Footer />

    </BrowserRouter>
    
    );
}

export default App;
