import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPhone, faEnvelope, faMap, faRegistered } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faWhatsapp, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faWhatsapp, faFontAwesome)

function Footer() {
  return (
    <section className="footer">

      <div className="box-container">

          <div className="box">
              <h3>Quick Links</h3>
              <Link to="/"><FontAwesomeIcon icon={faAngleRight} /> home</Link>
              <Link to="/about"><FontAwesomeIcon icon={faAngleRight} /> about</Link>
              <Link to="/contact-us"><FontAwesomeIcon icon={faAngleRight} /> contact</Link>
              <Link to="/user-register"><FontAwesomeIcon icon={faAngleRight} /> register</Link>
          </div>

          <div className="box">
              <h3>Extra Links</h3>
              <Link to='/faq'><FontAwesomeIcon icon={faAngleRight} /> frequently asked questions</Link>
              <Link to='/about'><FontAwesomeIcon icon={faAngleRight} /> about us</Link>
              {/* <Link to='/li'><FontAwesomeIcon icon={faAngleRight} /> privacy policy</Link>
              <Link to='/tandc'><FontAwesomeIcon icon={faAngleRight} /> terms of use</Link> */}
          </div>

          <div className="box">
              <h3>Contact Info</h3>
              <a href='tel:+447417563015'><FontAwesomeIcon icon={faPhone} /> +44 795 046 9909</a>
              <a href='mailto:admin@asw.co.uk'><FontAwesomeIcon icon={faEnvelope} /> support@myasw.co.uk</a>
              <Link to=''><FontAwesomeIcon icon={faMap} /> United Kingdom</Link>
              <Link to=''><FontAwesomeIcon icon={faRegistered} /> Reg. No. 14238974</Link>
          </div>

          <div className="box">
              <h3>Follow Us</h3>
              <a href="http://twitter.com/@ASW_StudyAbroad" target="_blank"><FontAwesomeIcon icon={faTwitter} /> twitter</a>
              <a href="https://wa.me/message/XBVLO3EXMO5MA1" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /> whatsapp</a>
          </div>

      </div>

      <div className="copyright">
        Copyright 2022 by ASW. All Rights Reserved.
        <p className='developer'>Developer : +234 808 9505 062</p>
      </div>

    </section>
  );
}

export default Footer;
