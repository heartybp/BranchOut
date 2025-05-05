import React from 'react'
import Timer from '../assets/timer.png'
import CheckboxCheck from '../assets/checkbox_check.png'
import Assigner from '../assets/assigner.png'
const Assignment = ({resource, assignedBy, assignedDate, dueIn}) => {
  return (
    <div className='flex justify-center'>
      <div className='pl-1 pt-1 pb-1 bg-white rounded-xl border border-gray-300 w-11/12'>
        <div className="p-2 flex flex-col">
          <div className="flex items-center flex-row justify-between">
            <h4 className="font-bold text-green-900">{resource}</h4>
            <div className="flex items-center ml-auto gap-1 mr-2"> 
              <img src={Timer} alt="Timer Icon" className="w-6 h-6" />
              <img src={CheckboxCheck} alt="Checkbox Icon" className="w-6 h-6" />
            </div>
          </div>
          
          <div className = "flex items-center text-xs">
            <img src={Assigner} alt="Assigner Icon" className="w-4 h-4 mr-1" />
            <p className="text-xs">{assignedBy} assigned on {assignedDate}</p>
            <p className="ml-1 text-gray-600">• Due in {dueIn}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Assignment