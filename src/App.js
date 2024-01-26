import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Playlist from './components/Playlists/Playlist';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Sidebar />
      <main>
        <div className='main-container'>
          <Header onSearchChange={handleSearchChange} />
          <Playlist searchTerm={searchTerm} />
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
