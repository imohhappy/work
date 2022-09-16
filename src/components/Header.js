import {Link} from 'react-router-dom'
import { useState, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faWhatsapp, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faWhatsapp, faFontAwesome)

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function Header() {
  const [searchString,setsearchString] = useState({
    'search':''
  });
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')

  const handleChange=(event)=>{
    setsearchString({
      ...searchString,
      [event.target.name]:event.target.value
    });
  }

  const searchCourse = () =>{
     if (searchString.search!==''){
      window.location.href='/search/'+searchString.search
     }
  }

  const [navbarMobile, setNavbarMobile] = useState(false);

  return (
    <section className="header">

      <Link to="/" className="logo"><img src={`${process.env.PUBLIC_URL}IMG-20220820-WA0000.jpg`} /> ASW</Link>

      <form class='search-form'>
        <input type='search' onChange={handleChange} placeholder='Search by course title' />
        <button type='button' class='btn' onClick={searchCourse}><FontAwesomeIcon icon={faSearch} /></button>
      </form>

      <nav className={navbarMobile ? 'navbarMobile' : 'navbar'} onClick={() => setNavbarMobile(false)}>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact-us">contact</Link>
          {studentLoginStatus!=='true' &&
            <>
              <Link to="/user-register">register</Link>
              <Link to="/user-login">student login</Link>
            </>
          }
          {studentLoginStatus==='true' &&
            <>
              <Link to="/user-dashboard">dashboard</Link>
              <Link to="/logout">logout</Link>
            </>
          }
          {teacherLoginStatus!=='true' &&
            <>
              <Link to="/teacher-login">Staff Login</Link>
            </>
            }
            {teacherLoginStatus==='true' &&
            <>
              <Link to="/teacher-dashboard">DashBoard</Link>
              <Link to="/teacher-logout">Logout</Link>
            </>
          }
      </nav>

      <FontAwesomeIcon icon={faBars} className='menu-btn' onClick={() => setNavbarMobile(!navbarMobile)} />

    </section>
  );
}

export default Header;
