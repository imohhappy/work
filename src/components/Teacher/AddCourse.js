import { Link } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import TeacherLogin from "./TeacherLogin";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function AddCourse(){

  const [cats,setCats] = useState([]);
  const [courseData, setCourseData]=useState({
    category:'',
    title:'',
    description:'',
    f_img:'',
    university:'',
    bird:'',
    deadline:'',
    chick:'',
    eagle:'',
    fowl:'',
    table:'',
    schooldescription:'',
    intake:'',
    duration:'',
    type:'',
    studymode:'',
    tuitionfees:'',
    techs:''
  })

  // fetch category when page loads
   useEffect(()=>{
    try{
      axios.get(baseUrl+'/category').then((res)=>{
            setCats(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);

  const handleChange=(event)=>{
      setCourseData({
        ...courseData,
        [event.target.name]:event.target.value
      });
    }

  const handleFileChange=(event)=>{
    setCourseData({
      ...courseData,
      [event.target.name]:event.target.files[0]
    })
  }
  const teacherId=localStorage.getItem('teacherId')
  const formSubmit=()=>{
    const _formData=new FormData();
    _formData.append("category", courseData.category);
    _formData.append("university", courseData.university);
    _formData.append("intake", courseData.intake);
    _formData.append("schooldescription", courseData.schooldescription);
    _formData.append("duration", courseData.duration);
    _formData.append("deadline", courseData.deadline);
    _formData.append("studymode", courseData.studymode);
    _formData.append("bird", courseData.bird);
    _formData.append("eagle", courseData.eagle);
    _formData.append("chick", courseData.chick);
    _formData.append("fowl", courseData.fowl);
    _formData.append("table", courseData.table);
    _formData.append("tuitionfees", courseData.tuitionfees);
    _formData.append('teacher',teacherId);
    _formData.append('type',courseData.type);
    _formData.append("title", courseData.title);
    _formData.append("description", courseData.description);
    _formData.append("featured_img", courseData.f_img,courseData.f_img.name);
    _formData.append("techs", courseData.techs);
    
    try{
       axios.post(baseUrl+'/course/', _formData,{
        headers: {
          'content-type': 'multipart/form-data'
        }
       })
       .then((res)=>{
            // console.log(res.data)
            window.location.href='/add-course';
              
            });
          }catch(error){
        console.log(error);
    }
  };


  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <section className='col-md-9'>
            <div className="card">
                <h5 className="card-header">Add Courses</h5>
                <div className="card-body">
                    
                    <form>

                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Category</label>
                        <select name="category" onChange={handleChange} className="form-control">
                          {cats.map((category, index)=>{return<option key={index} value={category.id}>{category.title}</option>})}
                        </select>
                        </div>

                      <div className="mb-3">
                        <label for="detail" className="form-label">Title</label>
                        <input type="text" onChange={handleChange} name='title' id='title' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">University</label>
                        <input type="text" onChange={handleChange} name='university' id='university' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Intake</label>
                        <input type="text" onChange={handleChange} name='intake' id='intake' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Document 1</label>
                        <input type="text" onChange={handleChange} name='table' id='table' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Document 2</label>
                        <input type="text" onChange={handleChange} name='fowl' id='fowl' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Document 3</label>
                        <input type="text" onChange={handleChange} name='chick' id='chick' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Document 4</label>
                        <input type="text" onChange={handleChange} name='eagle' id='eagle' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Document 5</label>
                        <input type="text" onChange={handleChange} name='bird' id='bird' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Duration</label>
                        <input type="text" onChange={handleChange} name='duration' id='duration' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="description" className="form-label">School Description</label>
                        <textarea onChange={handleChange} name='schooldescription' className="form-control" id="schooldescription"></textarea>
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Studymode</label>
                        <input type="text" onChange={handleChange} name='studymode' id='studymode' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="detail" className="form-label">Tuitionfees</label>
                        <input type="text" onChange={handleChange} name='tuitionfees' id='tuitionfees' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="techs" className="form-label">Section</label>
                        <textarea onChange={handleChange} name='type' id='type'  className="form-control" placeholder="BSC, MSC, PHD"></textarea>
                            <div id="tech" class="form-text"></div>
                      </div>

                        <div className="mb-3">
                        <label for="description" className="form-label">Description</label>
                        <textarea onChange={handleChange} name='description' className="form-control" id="description"></textarea>
                        </div>

                      <div className="mb-3">
                        <label for="file" className="form-label">Featured Image</label>
                        <input type="file" onChange={handleFileChange} name='f_img'className="form-control" id="video" />
                      </div>

                      <div className="mb-3">
                        <label for="detail" className="form-label">Deadline 2</label>
                        <input type="text" onChange={handleChange} name='deadline' id='deadline' className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label for="techs" className="form-label">Technologies</label>
                        <textarea onChange={handleChange} name='techs' id='techs'  className="form-control" placeholder="Engineering, Science, Art"></textarea>
                            <div id="tech" class="form-text"></div>
                      </div>

                      <button onClick={formSubmit} type="submit" className="btn btn-primary">Register</button>
                  </form>
                </div>
            </div>
        </section>
    </div>
</div>
  )
}

export default AddCourse