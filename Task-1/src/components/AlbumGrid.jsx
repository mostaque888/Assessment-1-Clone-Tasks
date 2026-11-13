import featuredAlbum from '../assets/eulogy-for-evolution.jpg';
import album1 from '../assets/all-encores.jpg';
import album2 from '../assets/articulation.jpg';
import album3 from '../assets/blurred.jpg';
import album4 from '../assets/encores-2.jpg';

function AlbumGrid() {
  return (
    <section className="album-grid">
      <img src={featuredAlbum} alt="Featured album cover" className="featured-album" />
      <div className="small-albums">
        <img src={album1} alt="Album cover" />
        <img src={album2} alt="Album cover" />
        <img src={album3} alt="Album cover" />
        <img src={album4} alt="Album cover" />
      </div>
    </section>
  );
}

export default AlbumGrid;