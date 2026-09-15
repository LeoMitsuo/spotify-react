const ArtistCard = ({ name, urlImg }) => {
  return (
    <article className="artist-card">
      <div className="card-img">
        <img className="artist-img" src={urlImg} alt={`Foto de ${name}`} />
        <div className="play">
          <button type="button" className="fa fa-solid fa-play" aria-label={`Tocar ${name}`} />
        </div>
      </div>
      <div className="card-text">
        <span className="artist-name">{name}</span>
        <span className="artist-categorie">Artista</span>
      </div>
    </article>
  );
};

export default ArtistCard;
