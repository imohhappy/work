import { Link } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'


function TeacherAddCourses(){
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <section className='col-md-9'>
            <div className="card">
                <h5 className="card-header">AddCourses</h5>
                <div className="card-body">
                    
                    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="email" className="form-control" />
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Description</label>
    <textarea className="form-control"></textarea>
    </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Upload Courses</label>
    <input type="file" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Technologies</label>
    <textarea className="form-control"></textarea>
        <div id="emailHelp" class="form-text"></div>

  </div>

  <button type="submit" className="btn btn-primary">Register</button>
</form>
        
        </div>
        </div>
        </section>
    </div>
    </div>
  )
}

export default TeacherAddCourses