import React, { useContext, useState , useEffect} from 'react'
import AdminActivityItempanel from './AdminActivityItempanel';
import { activitytypefilterContext, topicfilterContext } from '../../Globalcontext';
import axios from 'axios';




function AdminTopicpanel({topicitem}) {

 
  const [ClassActivitylist , setClassActivitylist] = useState([
  ]);



  return (
    <div className={`topicpanel borderradius-md `}>
      <div className='flex'>
       <h4>Week 1</h4> 
        <div className='marginleftauto relative'>
    

    </div>

   
    <button className="commonbutton primary">Upload File</button> 
   
       <br></br>
      </div>
      <hr />
       <ul className='topiclist'>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
         <AdminActivityItempanel/>
              
       </ul>
       
    </div>
  )
}

export default AdminTopicpanel