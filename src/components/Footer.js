import Link from './Link';
import './Footer.css';

function Footer() {

  return (
    <footer className="Footer">
      <div className="Footer-wrap">

        <div className="Back-to-top">
          <Link to="Home" value="Back to top" /> 
          <br />
          <br />          <br />
          <br />          <br />
          <br />
          <span>Social icons</span><br /><br />
          <span>Created by Joakim Winther</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
