import { Link } from "react-router-dom";
import {Carousel, Card, Button, Placeholder} from 'react-bootstrap'

import {useState} from 'react'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function Searchs() {
  const [searchString,setsearchString] = useState({
    'search':''
  });

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

  const listStyle={
    'list-style':'none'
  }

  return (
<>
<div className="container mt-3 ms-3">
  <div className="card">
    <form class='d-flex mt-3'>
          <input name='search' onChange={handleChange} class='form-control me-2' type='search' placeholder='Search by course title' aria-label='Search' />
          <button onClick={searchCourse} class='btn btn-warning' type='button'>Search</button>
        </form>
  </div>
</div>

    </>


  );
}

export default Searchs;
