import { Link } from "react-router-dom";
import React from 'react'
import {useEffect, useState} from 'react'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api/contact/';
function ContactUs() {
  const [ContactData,setContactData] = useState({
    'full_name':'',
    'email':'',
    'query':'',
    'status':''
  });

  // Change Element value
  const handleChange=(event)=>{
    setContactData({
      ...ContactData,
      [event.target.name]:event.target.value
    });
  }
  // End

  // Submit Form
  const submitForm=()=>{
      const contactFormData=new FormData();
      contactFormData.append("full_name", ContactData.full_name)
      contactFormData.append("email", ContactData.email)
      contactFormData.append("query", ContactData.query)
      try{
          axios.post(baseUrl, contactFormData).then((response)=>{
            setContactData({
              'full_name':'',
              'email':'',
              'query':'',
              'status':'success'
            });
      });
      }catch(error){
        console.log(error);
        setContactData({'status':'error'})
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
    <section className='contact'>

      <h1 className='heading-title'>Contact Us</h1>

      {ContactData.status=='success' && <p class="text-success"> Thanks for contacting us</p>}
      {ContactData.status=='error' && <p class="text-danger"> Something wrong happened</p>}

      <div className='row'>

        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9552385.313786251!2d-13.436131743479352!3d54.23097067294436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sng!4v1661724954591!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className='form'>
          <h3>Get In Touch</h3>
          <input value={ContactData.full_name} onChange={handleChange} name="full_name" type="full_name" placeholder='Full name' className='box' />
          <input value={ContactData.email} onChange={handleChange} name="email" type="email" placeholder='E-mail' className='box' />
          <textarea rows='10' cols='30' value={ContactData.query} onChange={handleChange} name="query" placeholder="Message" className='box'></textarea>

          <input type='submit' value='Message' onClick={submitForm} className='btn' />
        </div>

      </div>

      <div className='staff-profile'>

        <h1 className='heading-title'>Get Support from our staff</h1>

        <div className='box-container'>

          <div className='box'>
            <h1>United Kingdom</h1>
            <h3>Frank Ukofia</h3>
            <p>124 City Road,
              London.
              EC1V 2NX
              United Kingdom.</p>
            <p>Tel: +447950469909</p>
            <p>E-mail: fukofia@myasw.co.uk</p>
          </div>

          <div className='box'>
            <h1>Abuja, Nigeria</h1>
            <h3>Erhlton Udosen</h3>
            <p>Suite 2, First Floor, House 797.
              (Opposite White House)
              Ademola Adetokunbo Crescent
              Wuse 2, Abuja - Nigeria</p>
            <p>Tel: +234 8081760351</p>
          </div>

          <div className='box'>
            <h1>Lagos, Nigeria</h1>
            <h3>Ruth Eduok</h3>
            <p>10 Udi street, 
              Osborne estate, 
              Ikoyi, Lagos state</p>
            <p>Tel: +234 7036922221</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactUs