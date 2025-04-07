import React from 'react'
const Assignment = ({resource, assignedBy, assignedDate, dueIn}) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-white rounded-lg border border-gray-300 w-11/12'>
        <div className="p-2 flex flex-col">
          <h4 className="font-semibold">{resource}</h4>
          <p className="text-xs">{assignedBy} assigned on {assignedDate} • Due in {dueIn}</p>
        </div>
      </div>
    </div>
  )
}
export default Assignment