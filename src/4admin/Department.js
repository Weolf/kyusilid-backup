import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Outlet , useNavigate , useLocation, useOutletContext} from 'react-router-dom'
import { currentdeptContext , userInfoContext , departmentsContext , deptInfoContext} from '../Globalcontext'
import {BiEdit} from 'react-icons/bi'
import {FaUpload} from 'react-icons/fa'


function Department() {
    const navigate = useNavigate()
    const [subjectnav, setsubjectnav] = useState(false)
    const [classesnav, setclassesnav] = useState(false)
    const [accountsnav, setaccountsnav] = useState(false)
    const [currentpage, setcurrentpage] = useState();
    const [creatclassmodal, setcreateclassmodal] = useState(false);
    const [createstudmodal, setcreatestudmodal] = useState(false);
    const [createproffmodal, setcreateproffmodal] = useState(false);
    const location = useLocation()
    const {currentdept} = useContext(currentdeptContext);
    const [departmentinfo, setdepartmentinfo] = useState({}
    );


    useEffect(()=>{
     if(currentdept != undefined){
      axios.get('https://api.kyusillid.online/api/getdeptinfo/' + currentdept.dep_id ).then(response =>{  
        setdepartmentinfo(response.data)
      
      }).catch(

      );   
     }

    } , [currentdept])
   




    

  


  function isactive(e){

    return e===currentpage ? true : false;

 }




  return (

    currentdept != undefined ?
      <div>
      <div className='col-lg-12 primary borderradius-lg adminheader flex'>
        <div className='lighttext'>
          <h2> {currentdept!== undefined && currentdept.dep_name}</h2>
          <h4 className='margintop12'>School year : 2022 - 2023 , 1st sem</h4>
         
        </div>
      </div>
  
  
      <div className="row">
        <div className="col-lg-3 margintop12">
            <div className="classnav tertiary borderradius-md dbpanelmargin">
              <ul>
                <li className={`classnavitem ${isactive('department') &&' classnav-active' }`} onClick={()=>{navigate('/kyusilidAdmin/department')}}>  Overview </li>
                <li><hr/></li>
                <li className="classnavitem " onClick={()=>{navigate('admin_announcements')}}>  Announcements </li>
                <li><hr/></li>
                <li className="classnavitem " onClick={()=>{navigate('admin_AddModule')}}>  Add Module </li>
                <li><hr/></li>
                <li className={`classnavitem ${isactive('subjects') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false);setclassesnav(false); setsubjectnav(!subjectnav) ;setcurrentpage('subjects')}}>  Subjects</li>
                <li><hr/></li>
                {subjectnav &&
                   <><li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>4th year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>3rd year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>2nd year</li>
                   <li><hr/></li>
                   <li className="classnavsubitem" onClick={()=>{navigate('subjects')}}>1st year</li>
                   <li><hr/></li>
                   </>
                }
               
                <li className={`classnavitem ${isactive('sections') &&' classnav-active' }`} onClick={()=>{setaccountsnav(false); setsubjectnav(false); setclassesnav(!classesnav) ;setcurrentpage('sections')}} >  Classes</li>
                <li><hr/></li> 
              {classesnav&&
                  <><li className="classnavsubitem" onClick={()=>{navigate('sections')}}>4th year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{navigate('sections')}}>3rd year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{navigate('sections')}}>2nd year</li>
                  <li><hr/></li>
                  <li className="classnavsubitem" onClick={()=>{navigate('sections')}}>1st year</li>
                  <li><hr/></li>
                  </>
              }
                <li className={`classnavitem ${isactive('accounts') &&' classnav-active' }`} onClick={()=>{setsubjectnav(false);setclassesnav(false); setaccountsnav(!accountsnav); setcurrentpage('accounts')}}>  Accounts </li>
                <li><hr/></li>
                {accountsnav &&
                 <><li className="classnavsubitem" onClick={()=>{navigate('accounts_prof')}}>Professors</li>
                 <li><hr/></li>
                 <li className="classnavsubitem" onClick={()=>{navigate('accounts_stud')}}>Students</li>
                 <li><hr/></li>                
                  </>
                }
               
                <li className="classnavitem " onClick={()=>{navigate('eventcalendar')}}>  Event calendar </li>
              
         
              </ul>
            </div>
  
            <div className="tertiary flex  margintop12 borderradius-md padding12 adminupdatepanel">
              <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreateclassmodal(true)}}>Update Class list</button>
              <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreatestudmodal(true)}}>Update Student list</button>
              <button className='commonbutton secondary lighttext width100'  onClick={()=>{setcreateproffmodal(true)}}>Update Professor list</button>
            </div>
        </div>
        <div className="col-lg-9 margintop12">
  
          <deptInfoContext.Provider value ={{departmentinfo, setdepartmentinfo}}>
          <Outlet />
          </deptInfoContext.Provider>
             
  
        </div>
      </div>


     {creatclassmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreateclassmodal(false)}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
          <div className='sideoption borderradius-md'onClick={()=>{navigate('createclass') ; setcreateclassmodal(false)}} > <BiEdit/><h2>Manual Adding</h2></div>
          <div className='sideoption borderradius-md'> <FaUpload/><h2>Upload file</h2></div>
      </div>
          
</div>
     }
     
     {createstudmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreatestudmodal(false)}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
          <div className='sideoption borderradius-md'onClick={()=>{navigate('createstud') ; setcreatestudmodal(false)}} > <BiEdit/><h2>Manual Adding</h2></div>
          <div className='sideoption borderradius-md'> <FaUpload/><h2>Upload file</h2></div>
      </div>
          
</div>
     }

     
     {createproffmodal &&
      <div className='adminmodal' > 
      <div className='modalbackground-lgt' onClick={()=>{setcreateproffmodal(false)}}>

      </div>
      <div className='tertiary borderradius-md padding12 modal-body flex'>
          <div className='sideoption borderradius-md'onClick={()=>{navigate('createproff') ; setcreateproffmodal(false)}} > <BiEdit/><h2>Manual Adding</h2></div>
          <div className='sideoption borderradius-md'> <FaUpload/><h2>Upload file</h2></div>
      </div>
          
</div>
     }
   


    </div>

    :
    <div>loading</div>
    
    


)

  
 
}

export default Department