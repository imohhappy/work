import {useEffect, useState} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function VerifyTeacher() {
  const [teacherData, setteacherData]=useState({
    otp_digit:'',
  });

  const [errorMsg, seterrorMsg]=useState('')

  const handleChange=(event)=>{
    setteacherData({
      ...teacherData,
      [event.target.name]:event.target.value
    });
  }

  const {teacher_id}=useParams();

  const submitForm=()=>{
    const teacherFormData=new FormData;
    teacherFormData.append('otp_digit', teacherData.otp_digit)
    try{
        axios.post(baseUrl+'/verify-teacher/'+teacher_id+'/', teacherFormData)
        .then((res)=>{
          if(res.data.bool==true){
            localStorage.setItem('teacherLoginStatus', true);
            localStorage.setItem('teacherId',res.data.teacher_id);
            window.location.href='/teacher-dashboard';
          }else{
            seterrorMsg(res.data.msg)
          }
        })

    }catch(error){
      console.log(error)
    }
  }

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  if(teacherLoginStatus=='true'){
    window.location.href='/teacher-dashboard';
  }



  useEffect(()=>{
    document.title='Verify Teacher'
  })
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">Enter 6 Digit OTP</h5>
            <div className="card-body">
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
             <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">OTP</label>
                  <input value={teacherData.otp_digit} onChange={handleChange} name="otp_digit" type="number" className="form-control" />
                </div>
                <button type="submit" onClick={submitForm} className="btn btn-primary">Verify</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyTeacher