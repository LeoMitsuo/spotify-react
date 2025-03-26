import './App.css';
import Head from '../src/Componentes/Head/Head'
import Header from '../src/Componentes/Header/Header';
import Footer from '../src/Componentes/Footer/Footer';
import Main from '../src/Componentes/Main/Main';
import Sidebar from '../src/Componentes/Sidebar/Sidebar';
import Script from '../src/Componentes/Script';

function App() {
  return (
    <div>
    <Head/>
    <Header/>
    <Main/>
    <Sidebar/>
    <Footer/>
    <Script/>
    </div>
  );
}

export default App;
