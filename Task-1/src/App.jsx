import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import AlbumGrid from './components/AlbumGrid';
import Author from './components/Author';
import Comments from './components/Comments';
import Footer from './components/Footer';
import './App.css';

// Connect React to the root element in index.html
/**
 * Root component. Composes the page in the following order as the wireframe:
 * header + navigation, the white content column (article, gallery,
 * author, comments) and the full-width footer.
 */

function App() {
  return (
  <div className="page">
  <Header />
  <div className="content-box">
  <Hero />
  <ContentSection />
  <AlbumGrid />
  <Author />
  <Comments />
  </div>  <Footer /> </div>
  );
}

export default App;

