import { Link, useParams } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function AddChapter(){
  const [chapterData, setChapterData]=useState({
    title:'',
    description:'',
    video:'',
    remarks:''
  })


  const handleChange=(event)=>{
      setChapterData({
        ...chapterData,
        [event.target.name]:event.target.value
      });
    }

  const handleFileChange=(event)=>{
    setChapterData({
      ...chapterData,
      [event.target.name]:event.target.files[0]
    })
  }

  const {course_id}=useParams()
  const formSubmit=()=>{
    const _formData=new FormData();
    _formData.append('course',course_id);
    _formData.append("title", chapterData.title);
    _formData.append("description", chapterData.description);
    _formData.append("video", chapterData.video,chapterData.video.name);
    _formData.append("remarks", chapterData.remarks);
    
    try{
       axios.post(baseUrl+'/course-chapters/'+course_id, _formData,{
        headers: {
          'content-type': 'multipart/form-data'
        }
       })
      //  .then((res)=>{
      //       // console.log(res.data)
      //       window.location.href='/add-chapter/1';
            
              
      //       });
      .then((res)=>{
            if(res.status==200){
              Swal.fire({
                title: 'Data has been added',
                toast: true,
                icon: 'success',
                timer:3000,
                position:'Top right',
                timerProgressBar: 'true',
                showConfirmButton:false
              })
            window.location.reload()
            }
              
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
                <h5 className="card-header">Add Chapter</h5>
                <div className="card-body">
                    
                    <form>

                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" onChange={handleChange} name='title' id='title' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <textarea onChange={handleChange} name='description' id='description' className="form-control"></textarea>
                        </div>

                      <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Video</label>
                        <input onChange={handleFileChange} name='video' id='video' type="file" className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Remarks</label>
                        <textarea onChange={handleChange} name='remarks' id='remarks' className="form-control" placeholder="This video is focused on basic introduction"></textarea>
                            <div class="form-text"></div>

                      </div>

                      <button onClick={formSubmit} type="button" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  </div>
  )
}

export default AddChapter