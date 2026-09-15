import cover1 from '../assets/playlist/1.jpeg';
import cover2 from '../assets/playlist/2.png';
import cover3 from '../assets/playlist/3.jpeg';
import cover4 from '../assets/playlist/4.jpeg';
import cover5 from '../assets/playlist/5.jpeg';
import cover6 from '../assets/playlist/6.jpeg';
import cover7 from '../assets/playlist/7.jpeg';
import cover8 from '../assets/playlist/8.jpeg';
import cover9 from '../assets/playlist/9.jpeg';
import cover10 from '../assets/playlist/10.jpeg';
import cover11 from '../assets/playlist/11.jpeg';
import cover12 from '../assets/playlist/12.jpeg';
import cover13 from '../assets/playlist/13.jpeg';
import cover14 from '../assets/playlist/14.jpeg';
import cover15 from '../assets/playlist/15.jpeg';

// Cada card tinha seu próprio bloco de JSX duplicado no Main.
// Aqui os dados ficam separados da apresentação: o Main só itera.
// A classe `colorClass` preserva as cores já definidas no Main.css.
const playlists = [
  { id: 1, title: 'Boas festas', colorClass: 'card1', cover: cover1 },
  { id: 2, title: 'Feitos para você', colorClass: 'card2', cover: cover2 },
  { id: 3, title: 'Lançamentos', colorClass: 'card3', cover: cover3 },
  { id: 4, title: 'Creators', colorClass: 'card4', cover: cover4 },
  { id: 5, title: 'Para treinar', colorClass: 'card5', cover: cover5 },
  { id: 6, title: 'Podcasts', colorClass: 'card6', cover: cover6 },
  { id: 7, title: 'Sertanejo', colorClass: 'card7', cover: cover7 },
  { id: 8, title: 'Samba e pagode', colorClass: 'card8', cover: cover8 },
  { id: 9, title: 'Funk', colorClass: 'card9', cover: cover9 },
  { id: 10, title: 'MPB', colorClass: 'card10', cover: cover10 },
  { id: 11, title: 'Rock', colorClass: 'card11', cover: cover11 },
  { id: 12, title: 'Hip Hop', colorClass: 'card12', cover: cover12 },
  { id: 13, title: 'Indie', colorClass: 'card13', cover: cover13 },
  { id: 14, title: 'Relax', colorClass: 'card14', cover: cover14 },
  { id: 15, title: 'Música Latina', colorClass: 'card15', cover: cover15 },
];

export default playlists;
