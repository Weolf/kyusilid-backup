
import Topicpanel from '../1general/components/AdminTopicpanel'
import { useContext, useState } from 'react';

import Dropdown from '../1general/formcomponents/Dropdown';
import AdminTopicpanel from '../1general/components/AdminTopicpanel';


function AdminAddModule() {
 
 

  const [tempactivityfilter, settempactivityfilter] = useState([
    {'value' : 'none',
    'label' : 'All activities'
   },
    {'value' : 'Material',
    'label' : 'Material'
   },
   {'value' : 'Assignment',
    'label' : 'Assignment'
   },
   {'value' : 'Activity',
   'label' : 'Activity'
   },
   {'value' : 'Questionnaire',
   'label' : 'Questionnaire'
   },
   {'value' : 'Attendance',
   'label' : 'Attendance'
  }


  ])









  return (
    <div className="tertiary borderradius-md outletcontainer" >
     <div className="flex">
     <h4>Classwork</h4> 

     <div className='marginleftauto relative'>
    

     </div>


     <div className='col-lg-4'>
   

     <Dropdown
           options={tempactivityfilter}
           onChangeHandler= {settempactivityfilter}
           placeholderValue='select filter'
           mainClass= 'dropdownmain primary borderradius-md'
           itemClass= 'dropdownitem'
           controlClass='dropdowncontrol'
           menuClass='dropdownmenu primary'
           controlActiveClass='dropdowncontrolactive'
           mainActiveClass='dropdownmain-active'                         
       />  
                     
     
     
     </div>
     </div>



        <div className='col-md-12 margintop12'>
        
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
        <AdminTopicpanel/>
            
        </div>

     


       
        

      

    </div>
  )
}

export default AdminAddModule








 