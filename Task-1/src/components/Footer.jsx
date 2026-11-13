import facebookIcon from '../assets/facebook-icon.png';
import instagramIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
      <p className="copyright">Copyright © 2026</p>
      <div className="footer-social">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;