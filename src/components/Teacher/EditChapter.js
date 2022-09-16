import { Link, useParams } from "react-router-dom";
import TeacherSideBar from './TeacherSideBar'
import {useState, useEffect} from 'react'
import axios from "axios";
import Swal from 'sweetalert2'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function EditChapter(){
  const [chapterData, setChapterData]=useState({
    course:'',
    title:'',
    description:'',
    prev_video:'',
    video:'',
    remarks:''
  })

  
  useEffect(()=>{
    try{
      axios.get(baseUrl+'/chapter/'+chapter_id).then((res)=>{
            setChapterData({
                course:res.data.course,
                title:res.data.title,
                description:res.data.description,
                prev_video:res.data.video,
                remarks:res.data.remarks,
                video:'',
            });
      });
    }catch(error){
      console.log(error)
    }
  },[]);


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

  const {chapter_id}=useParams()
  const formSubmit=()=>{
    const _formData=new FormData();
    _formData.append('course',chapterData.course);
    _formData.append("title", chapterData.title);
    _formData.append("description", chapterData.description);
    if(chapterData.video!==''){
      _formData.append("video", chapterData.video,chapterData.video.name);
    }
   _formData.append("remarks", chapterData.remarks);
    
    try{
       axios.put(baseUrl+'/chapter/'+chapter_id, _formData,{
        headers: {
          'content-type': 'multipart/form-data'
        }
       })
       .then((res)=>{
            if(res.status==200){
              Swal.fire({
                title: 'Confirm',
                text: 'data has been updated',
                icon: 'success',
                position:'Top right',
                timerProgressBar: 'continue',
                showConfirmButton:false
              })

            }
            // window.location.href='/add-chapter/1';
              
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
                <h5 className="card-header">Update Chapter</h5>
                <div className="card-body">
                    
                    <form>

                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" value={chapterData.title} onChange={handleChange} name='title' id='title' className="form-control" />
                        </div>

                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <textarea value={chapterData.description} onChange={handleChange} name='description' id='description' className="form-control"></textarea>
                        </div>

                      <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Video</label>
                        <input onChange={handleFileChange} name='video' id='video' type="file" className="form-control" />
                        {chapterData.prev_video &&
                        <video width="-100%" height="-100%" className="mt-2" controls>
                          <source src={chapterData.prev_video} 
                          type="video/mp4" />
                          
                      </video>
                    }
                      </div>

                      <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Remarks</label>
                        <textarea value={chapterData.remarks} onChange={handleChange} name='remarks' id='remarks' 
                        className="form-control" placeholder="This video is focused on basic introduction"></textarea>
                            <div class="form-text"></div>

                      </div>

                      <button onClick={formSubmit} type="button" className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  </div>
  )
}

export default EditChapter;