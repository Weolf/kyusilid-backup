import React, { useContext, useEffect, useState } from 'react'

import {FaClipboardList} from 'react-icons/fa'
import {RiBookFill} from 'react-icons/ri'
import {MdQuiz ,MdAssignment} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AdminActivityItempanel() {

  const navigate = useNavigate()      
  const navigate2 =(e )=>{

    navigate('/classes/sampleclass/activity/activityId')
  }

  const [commentcount, setcommentcount] = useState();




  return (
     <React.Fragment>
          <div className="row width100" >
                    <div className='col-lg-1 activityiconcontainer'>  
                      <div className='activityicon tertiary '>
                      <RiBookFill />
                       </div>
                    </div>
          
                    <div className="col-lg-7 ">
                      <div className=' activitypanelsub1'>
                      <h5>activity item</h5>
                      <p>Activity title</p>
                    </div>
                    </div>

                    <div className="col-lg-4 ">                   
                      <div className=' activitypanelsub2 marginleftauto'>
                        <p>Date posted : </p>
                        <p>Date due: </p> : <p>&nbsp;</p>
                      </div>
                    </div>
              </div>
           
     </React.Fragment>
  ) 
}

export default AdminActivityItempanel