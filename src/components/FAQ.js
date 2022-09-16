import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

const baseUrl='https://staff.admissionsupportworldwide.co.uk/api'
function FAQ() {
  const [faqData, setfaqData]=useState([]);
  const {category_slug}=useParams();
    // fetch course when page loads
  useEffect(()=>{
    try{
      axios.get(baseUrl+'/faq/').then((res)=>{
            setfaqData(res.data);
      });
    }catch(error){
      console.log(error)
    }
  },[]);
  return (
    <div className="container mt-3">
        {/* Latest Course */}

        <h3 className="pb-1 mb-4">FAQ</h3>
        <div class="accordion" id="accordionExample">
      {faqData && faqData.map((row, index)=>
      <>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {row.questions}
          </button>
        </h2>
        {index==0 &&
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {row.answers}
          </div>
        </div>
        }
        {index >0 &&
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {row.answers}
          </div>
        </div>
        }
        </div>
        </>
    )}
</div>
    </div>
  );
}

export default FAQ;
