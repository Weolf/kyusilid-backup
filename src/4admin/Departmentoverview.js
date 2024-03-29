import React, { useContext, useEffect, useState } from 'react'
import avatar from '../assets/images/avatar.jpg';
//import AreaChart from '../1general/components/areachart'
import { FaUserGraduate } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { FiUsers } from 'react-icons/fi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';





import { deptInfoContext } from '../Globalcontext';


function Departmentoverview() {

 const {departmentinfo} = useContext(deptInfoContext);
 const [searchTerm, setSearchTerm] = useState('');

 

 useEffect(()=>{
    console.log(departmentinfo);
 },[departmentinfo])

  return (
    departmentinfo != undefined ?

    <div className="row">
    <div className="col-lg-12 displaynone ">
      <div className="tertiary borderradius-md paneladd " >

        </div> 
    </div>

   <div className="col-lg-6">
    <div className="row">
      <div className="col-lg-6 margintop12 ">
        
      <div className="pos tertiary borderradius-md overviewpanel1 padding1" >
          <h4 className='h44 primary'><SiGoogleclassroom/>    Classes</h4>
          {/* <AreaChart></AreaChart> */}
          <p>
          <div className='positionr'>
            <ul>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 4th year : {departmentinfo.fourthyear}</li>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 3rd year  : {departmentinfo.thirdyear}</li>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 2nd year  : {departmentinfo.secondyear}</li>
              <br></br>
              <li><BsFillJournalBookmarkFill/> 1st year  : {departmentinfo.firstyear}</li>
            </ul>
            </div>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12 ">
      <div className="pos tertiary borderradius-md overviewpanel1 padding1" >
          <h4 className='h44 primary'><FiUsers/>  Accounts</h4>
          <p>
            <ul>
            <br></br>
            <div className='positionr'>
              <li><GiTeacher/>  Professors : {departmentinfo.profcount}</li>
              <br></br>
              <li><FaUserGraduate/>  Students : {departmentinfo.studcount}</li>    
              </div>       
            </ul>
            </p>
          </div> 
      </div>
      <div className="col-lg-6 margintop12 displaynone">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Events</h4>
         
          </div> 
      </div>
      <div className="col-lg-6 margintop12 displaynone">
      <div className="tertiary borderradius-md overviewpanel" >
          <h4>Subjects</h4>
         
          </div> 
      </div>
    </div>
  </div>



  <div className="col-lg-6">

    <div className="row">
    <div className="col-lg-12 margintop12">
        <div className="tertiary borderradius-md overviewlist" >
         <div className='searchDept'> 
         <h4>Department Admin</h4>  
         
         <div className='search2'>
         <input
           type="text"
            placeholder='Search by Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/></div>
</div>

          <ul className='margintop12'>


           { departmentinfo.depadminlist != undefined && departmentinfo.depadminlist
            .filter((item) => item.firstname.toLowerCase().includes(searchTerm.toLowerCase())).map((item, key)=>(
                 <li key={key}>
                  <div className="personpanel">
                    <div>
                      <img src={avatar} alt="" /></div>
                    <div className="personpanelcontent">
                      <h5>{item.title} {item.firstname} {item.lastname} {item.suffix}</h5>
                      
                    </div>
                  </div>
               </li>
            ))} 
          
       
           
         
          </ul>  
                       
        </div> 
  </div>

  
    </div>
       
  </div>




    </div>
    :
    <div>loading department overview</div>
   
   
    
  )

}
 
 


  


export default Departmentoverview