const PlaylistCard = ({ title, cover, colorClass }) => {
  return (
    <article className={`cards ${colorClass}`}>
      {/* A imagem é decorativa: o título já está no texto ao lado,
          então alt vazio evita leitura duplicada por leitor de tela. */}
      <img src={cover} alt="" />
      <span>{title}</span>
    </article>
  );
};

export default PlaylistCard;
