import { Link } from "react-router-dom";
import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api/replycontact/';
function ReplyContactUs() {
  const [ReplyContactData,setReplyContactData] = useState({
    'full_name':'',
    'email':'',
    'query':'',
    'status':''
  });

  // Change Element value
  const handleChange=(event)=>{
    setReplyContactData({
      ...ReplyContactData,
      [event.target.name]:event.target.value
    });
  }
  // End

  // Submit Form
  const submitForm=()=>{
      const replycontactFormData=new FormData();
      replycontactFormData.append("full_name", ReplyContactData.full_name)
      replycontactFormData.append("email", ReplyContactData.email)
      replycontactFormData.append("query", ReplyContactData.query)
      try{
          axios.post(baseUrl, replycontactFormData).then((response)=>{
            setReplyContactData({
              'full_name':'',
              'email':'',
              'query':'',
              'status':'success'
            });
      });
      }catch(error){
        console.log(error);
        setReplyContactData({'status':'error'})
      }

  };
  // End
  const listStyle={
    'list-style':'none'
  }

  useEffect(()=>{
    document.title='Contact Us'
  })
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          {ReplyContactData.status=='success' && <p class="text-success"> Thanks for contacting us</p>}
          {ReplyContactData.status=='error' && <p class="text-danger"> Something wrong happened</p>}
          <div className="card">
            <h5 className="card-header">Contact Us</h5>
            <div className="card-body">
             {/* <form> */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Fullname</label>
                    <input value={ReplyContactData.full_name} onChange={handleChange} name="full_name" type="full_name" className="form-control" />
                    </div>

                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input value={ReplyContactData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                    </div>

                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Query</label>
                    <textarea rows='10' value={ReplyContactData.query} onChange={handleChange} name="query" className="form-control"></textarea>
                  </div>

                  <button onClick={submitForm} type="submit" className="btn btn-primary">Send</button>
                {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReplyContactUs