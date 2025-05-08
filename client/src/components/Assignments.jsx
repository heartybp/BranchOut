import React from 'react'
import Assignment from './Assignment'

const Assignments = ({title, assignments}) => {
  return (
    <div className='flex flex-col my-2'>
      <h3 className='pl-4 font-semibold mb-1'>{title}</h3>
      <div className='space-y-2'> 
        {
          assignments.map((assignment, index) => (
            <Assignment
              key={index}
              resource={assignment.resource}
              assignedBy={assignment.assignedBy}
              assignedDate={assignment.assignedDate}
              dueIn={assignment.dueIn}
            />
          ))
        }
      </div>
    </div>
  )
}
export default Assignments