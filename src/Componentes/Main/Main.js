import './Main.css';
import playlists from '../../data/playlists';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import ArtistCard from '../ArtistCard/ArtistCard';

const Main = ({ isSearching, results, status }) => {
  return (
    <div className="playlist-container">
      {isSearching ? (
        <div id="result-artist">
          {status === 'loading' && <p className="feedback">Carregando artistas...</p>}

          {status === 'error' && (
            <p className="feedback">
              Não foi possível carregar os artistas. Tente novamente mais tarde.
            </p>
          )}

          {status === 'success' && results.length === 0 && (
            <p className="feedback">Nenhum artista encontrado para essa busca.</p>
          )}

          {status === 'success' && results.length > 0 && (
            <div className="grid-container">
              {results.map((artist) => (
                <ArtistCard key={artist.id} name={artist.name} urlImg={artist.urlImg} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div id="result-playlists">
          <div className="playlist">
            <h1 id="greeting">Boas vindas</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>
          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
                {playlists.map((playlist) => (
                  <PlaylistCard
                    key={playlist.id}
                    title={playlist.title}
                    cover={playlist.cover}
                    colorClass={playlist.colorClass}
                  />
                ))}
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
