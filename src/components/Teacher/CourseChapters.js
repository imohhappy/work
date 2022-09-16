import { Link, useParams } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function CourseChapters() {
  const [chapterData, setchapterData]=useState([]);
  const [totalResult, settotalResult]=useState(0);
  const {course_id}=useParams()
    // fetch course when page loads

   useEffect(()=>{
    try{
      axios.get(baseUrl+'/course-chapters/'+course_id).then((res)=>{
            settotalResult(res.data.length);
            setchapterData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);
// Delete data
  const Swal = require('sweetalert2')
  const handleDeleteClick=(chapter_id)=>{
    Swal.fire({
      title: 'Confirm',
      text: 'Are you sure you want to continue with it',
      icon: 'info',
      confirmButtonText: 'continue',
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        try{
          axios.delete(baseUrl+'/chapter/'+chapter_id)
          .then((res)=>{
            Swal.fire('success','Data has been deleted.')
          try{
            axios.delete(baseUrl+'/chapter/'+chapter_id)
            .then((res)=>{
              settotalResult(res.data.length)
              setchapterData(res.data);
            })
            }catch(error){
              Swal.fire('error','Data has not been deleted.')
          }
          })
        }catch(error){
          Swal.fire('error','Data has not been deleted.')
      }
    }else{
            Swal.fire('success','Data has not been deleted.')
    }
  })
}
    


  return (
     <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
         <TeacherSideBar />
        </aside>
        <section className='col-md-9'>
        <div className="card">
          <h5 className="card-header">All Chapters({totalResult})<Link className="btn btn-success float-end btn-sm" to={'/add-chapter/'+course_id}>Add Chapter</Link></h5>
          <div className="card-body">
            <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Video</th>
                    <th>Remarks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {chapterData.map((chapter, index) =>
                  <tr>
                    <td><Link to={'/edit-chapter/'+chapter.id}>{chapter.title}</Link></td>
                    <td>
                      {chapter.video &&
                      <video width="320" height="240" controls>
                        <source src={chapter.video} 
                        type="video/mp4" />
                      </video>
                      }
                    </td>
                    {/* <td><img src={chapter.video} width='80' className="rounded" alt={chapter.title}/></td> */}
                    <td>{chapter.remarks}</td>
                    <td>
                      <Link to={'/edit-chapter/'+chapter.id} className="btn btn-sm btn-info"><i className='bi bi-pencil-square'></i></Link>
                      <button onClick={()=>handleDeleteClick(chapter.id)} className="btn btn-sm btn-danger ms-1"><i className='bi bi-trash'></i></button>
                    </td>
                  </tr>
                  )}
                </tbody>
    
            </table>
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default CourseChapters;
