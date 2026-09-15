import { useMemo, useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Main from './Componentes/Main/Main';
import Sidebar from './Componentes/Sidebar/Sidebar';
import useArtists from './hooks/useArtists';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { artists, status } = useArtists();

  const isSearching = searchTerm.trim() !== '';

  // Só recalcula quando o termo ou a lista mudam.
  const results = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return artists.filter((artist) => artist.name.toLowerCase().includes(term));
  }, [searchTerm, artists]);

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Main isSearching={isSearching} results={results} status={status} />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
