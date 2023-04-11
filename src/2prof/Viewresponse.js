import React, { useContext, useEffect, useState } from 'react'
import { responseContext } from '../Globalcontext'
import { SiAeromexico } from 'react-icons/si'
import axios from 'axios'


function Viewresponse() {

    const [score, setscore] = useState()

    const [ifsaved, setsaved] = useState(false)

    const {responseinfo} = useContext(responseContext)

    const tt = async ()=>{

        const temp = {
            "assign_id": responseinfo.assign_id,
            "score" : score
        }
        await  axios.post('https://api.kyusillid.online/api/setGrade').then(

        ()=>{
            alert("Successfully saved");
            setsaved(true)
        }
        ).catch()
      
    }





    useEffect(()=>{
        if(responseinfo !== undefined){
            setscore(responseinfo.grade)
        }

    },[responseinfo])
  return (
    <div>
        <div className="flex"> <h4>Student's Work</h4>  


            <div className="flex marginleftauto">
                <h4>Score</h4>
                <input type="text" className="commontextbox primaryborder col-lg-4" defaultValue={score} onChange={(e)=>{setscore(e.target.value + " /100")}}/>
                {!ifsaved ?
                <button className='commontextbox secondary lighttext col-lg-4' onClick={tt}>Mark response</button>
            :
            <button className='commontextbox secondary lighttext col-lg-4' onClick={tt}>Saved </button>}
            </div>
        </div>

        <h4>{responseinfo.status}</h4>
        


        



    </div>
  )
}

export default Viewresponse