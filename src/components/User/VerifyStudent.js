import {useEffect, useState} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api';
function VerifyStudent() {
  const [studentData, setstudentData]=useState({
    otp_digit:'',
  });

  const [errorMsg, seterrorMsg]=useState('')

  const handleChange=(event)=>{
    setstudentData({
      ...studentData,
      [event.target.name]:event.target.value
    });
  }

  const {student_id}=useParams();

  const submitForm=()=>{
    const studentFormData=new FormData;
    studentFormData.append('otp_digit', studentData.otp_digit)
    try{
        axios.post(baseUrl+'/verify-user/'+student_id+'/', studentFormData)
        .then((res)=>{
          if(res.data.bool==true){
            localStorage.setItem('studentLoginStatus', true);
            localStorage.setItem('studentId',res.data.student_id);
            window.location.href='/user-dashboard';
          }else{
            seterrorMsg(res.data.msg)
          }
        })

    }catch(error){
      console.log(error)
    }
  }



  useEffect(()=>{
    document.title='Verify Student'
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
                  <input value={studentData.otp_digit} onChange={handleChange} name="otp_digit" type="number" className="form-control" />
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

export default VerifyStudent