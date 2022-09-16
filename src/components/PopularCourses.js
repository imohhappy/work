import { Link } from "react-router-dom";
function PopularCourses() {
  return (
    <div className="container mt-3">
   {/* Latest Course */}

    <h3 className="pb-1 mb-4">Other Courses</h3>
    <div className="row mb-4">
      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/detail/1" className="btn btn-primary">Details</Link>
          </div>
          <div className="card-footer">
            <div className="title">
              <span>Ratting:4/5</span>
              <span className="float-end">Views: 3443</span></div>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>


      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Details</a>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/detail/1" className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 mt-5">
        <div className="card">
          <img src="IMG_20220701_113851.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title"><a href="#">Course title</a></h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/detail/1" className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    </div>
    {/* End Latest Course */}
    {/* Pagination start */}

    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>

{/* End */}
    </div>
  );
}

export default PopularCourses;
