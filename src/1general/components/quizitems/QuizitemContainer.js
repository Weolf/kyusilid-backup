import React from 'react'
import Multiplechoice from './Multiplechoice'
import SelectMany from './SelectMany'
import Identification from './Identification'

function QuizitemContainer({item , handleOptionChange ,handleaddoption, handleDeleteQuestion }) {


    const quizoption = [
        {"value" : "Multiplechoice",
        "label": "Multiple choice"},
        {"value" : "Identification",
        "label": "Identification"},
        {"value" : "Selectmany",
        "label": "Select Multiple"}
    ]
  return (
    <div className='padding12 borderradius-md col-lg-6'>

    <h1 style={{fontSize:20 }}> {item.questionid}</h1>
         <div className='flex'><input type= "text " className=' commontextbox padding12' placeholder='Enter Question'/>
            <div className='marginleftauto'> 
            <select className='mult commonbutton lighttext secondary' onChange={(e)=>{handleOptionChange( item, e.target.value)}} >
                {quizoption.map((item2,key)=>(
                    <option key={key} value={item2.value} selected={item2.value===item.type }>{item2.label}</option>
                ))}
            </select>
            </div>
         </div>

         <div className='padding12 '>
         {item.type==='Multiplechoice' ? 
        <Multiplechoice content= {item.content} item={item} handleaddoption={handleaddoption}/> :
            item.type ==='Selectmany' ?
            <SelectMany content= {item.content} item={item} handleaddoption={handleaddoption}/>: 
            <Identification/>
        
        }
         
         </div>

         <button onClick={()=>{handleDeleteQuestion(item)}} className='commonbutton lighttext secondary'>Delete Question Item</button>
    </div>
  )
}

export default QuizitemContainer