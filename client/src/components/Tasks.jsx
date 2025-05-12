import React from "react";
import Calendar from "../assets/Calendar.svg"
import James_Doe from "../assets/james_doe.png"
import Jane_Doe from "../assets/jane-doe.png"
import AaronSmith from "../assets/AaronSmith.png"
import CheckBox from "../assets/Checkbox_Check_white.png"
const tasks = [
    {
      id: "3",
      title: "Prepare Quarterly Report",
      description: "Compile Q3 metrics and create presentation for executive meeting",
      receiver: "David Rodriguez",
      sender: "Aaron Smith",
      assignedDate: "10/15/2023",
      dueDate: "10/30/2023",
      completionDate: null  // Not completed yet
    },
    {
      id: "4",
      title: "Fix Navigation Bug",
      description: "Address issue #452: menu dropdown not working on mobile devices",
      receiver: "James Lee",
      sender: "Aaron Smith",
      assignedDate: "10/25/2023",
      dueDate: "10/28/2023",
      completionDate: "10/27/2023"  // Completed on 10/27/2023
    },
    {
      id: "5",
      title: "Send Resume for Feedback",
      description: "Submit updated resume to HR for review and feedback",
      receiver: "Taylor Williams",
      sender: "Aaron Smith",
      assignedDate: "10/29/2023",
      dueDate: "11/02/2023",
      completionDate: "11/01/2023"  // Completed on 11/01/2023
    },
    {
      id: "TASK-2025-101",
      title: "Quarterly Performance Reviews",
      description: "Schedule and prepare quarterly performance reviews for team members",
      receiver: "Sarah Johnson",
      sender: "Aaron Smith",
      assignedDate: "5/5/2025",
      dueDate: "5/25/2025",
      daysUntilDue: 14,
      isToday: false,
      completionDate: null
    },
    {
      id: "TASK-2025-102",
      title: "Update Project Documentation",
      description: "Review and update all project documentation to reflect recent changes",
      receiver: "Michael Chen",
      sender: "Aaron Smith",
      assignedDate: "5/7/2025",
      dueDate: "5/15/2025",
      daysUntilDue: 4,
      isToday: false,
      completionDate: null
    }
];

function getDaysDifference(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
  
  // Check if two dates are the same day
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

function categorizeTasks(taskList) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const categorized = {
      upcoming: [],
      overdue: [],
      completed: []
    };
    
    taskList.forEach(task => {
      // Parse the due date
      const [month, day, year] = task.dueDate.split('/');
      const dueDate = new Date(year, month - 1, day);
      dueDate.setHours(0, 0, 0, 0);
      
      if (task.completionDate) {
        // Task is completed
        categorized.completed.push(task);
      } else if (dueDate < today) {
        // Task is overdue
        const daysOverdue = getDaysDifference(dueDate, today);
        categorized.overdue.push({
          ...task,
          daysOverdue
        });
      } else {
        // Task is upcoming
        const daysUntilDue = getDaysDifference(today, dueDate);
        const isToday = isSameDay(today, dueDate);
        
        categorized.upcoming.push({
          ...task,
          daysUntilDue,
          isToday
        });
      }
    });
    
    return categorized;
}

const categorizedTasks = categorizeTasks(tasks);

const Tasks = () => {
    return (
    <div className="w-full h-full px-20 py-10 space-y-10">
        <div className="flex-1 space-y-5 font-bold">
            <div className="text-2xl font-bold">
                Tasks:
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex-1 bg-[#F5F4E9] border border-gray-200 flex flex-col items-center py-10 px-4 rounded-xl">
                    <div className="text-3xl font-semibold">{categorizedTasks.completed.length}</div>
                    <div className="text-xs text-gray-600">Tasks Completed</div>
                </div>

                <div className="flex-1 bg-[#F5F4E9] border border-gray-200 flex flex-col items-center py-10 px-4 rounded-xl">
                    <div className="text-3xl font-semibold">{categorizedTasks.overdue.length}</div>
                    <div className="text-xs text-gray-600">Overdue Tasks</div>
                </div>

                <div className="flex-1 bg-[#F5F4E9] border border-gray-200 flex flex-col items-center py-10 px-4 rounded-xl">
                    <div className="text-3xl font-semibold">{categorizedTasks.upcoming.length}</div>
                    <div className="text-xs text-gray-600">Upcoming Tasks</div>
                </div>
            </div>
        </div>

        <div className="flex-1 space-y-5">
            <div className="text-2xl font-bold">
                Overdue:
            </div>
            { categorizedTasks.overdue.map(task => (
                <div className="w-full flex items-center justify-between bg-white p-4 rounded-md border border-gray-200 mb-2">
                {/* Left: Title and Description */}
                <div className="flex-1 w-1/2">
                    <div className="font-medium text-gray-800">{task.title}</div>
                    <div className="text-sm text-gray-500">{task.description}</div>
                </div>
            
                {/* Middle: Date Information */}
                <div className="flex w-1/2 justify-end">
                    <div className="flex w-1/4 items-center mx-4">
                        <img className="w-8" src={Calendar} alt="" />
                        <div className="ml-2">
                            <div className="text-xs text-gray-500">Assigned on {task.assignedDate}</div>
                            <div className="text-xs text-red-500">Due {task.daysOverdue} days ago</div>
                        </div>
                    </div>
                
                    {/* Middle-Right: Assigned By Information */}
                    <div className="flex w-1/4 items-center mx-4">
                        <img className="w-8" src={AaronSmith} alt="" />
                        <div className="ml-2">
                            <div className="text-xs text-gray-500">Assigned by:</div>
                            <div className="text-xs font-medium">{task.sender}</div>
                        </div>
                    </div>
                
                    {/* Right: Action Buttons */}
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded">
                            Request Extension
                        </button>
                        
                        <button className="px-3 py-1.5 text-xs font-medium text-white bg-[#3E5742] rounded">
                            Mark as Complete
                        </button>
                    </div>    
                </div>
                
            </div>
            ))}
        </div>

        <div className="flex-1 space-y-5">
            <div className="text-2xl font-bold">
                Upcoming Tasks:
            </div>
            { categorizedTasks.upcoming.map(task => (
                <div className="w-full flex items-center justify-between bg-white p-4 rounded-md border border-gray-200 mb-2">
                    <div className="flex-1 w-1/2">
                        <div className="font-medium text-gray-800">{task.title}</div>
                        <div className="text-sm text-gray-500">{task.description}</div>
                    </div>
                    <div className="flex w-1/2 justify-end"> 
                        <div className="flex w-1/4 items-center mx-4">
                            <img className="w-8" src={Calendar} alt="" />
                            <div className="ml-2">
                                <div className="text-xs text-gray-500">Assigned on {task.assignedDate}</div>
                                {task.isToday ? 
                                <div className="text-xs text-blue-500">Due Today</div> : 
                                <div className="text-xs text-gray-500">Due in {task.daysUntilDue} days</div>
                                }
                            </div>
                        </div>

                        <div className="flex w-1/4 items-center mx-4">
                            <img className="w-8" src={AaronSmith} alt="" />
                            <div className="ml-2">
                                <div className="text-xs text-gray-500">Assigned by:</div>
                                <div className="text-xs font-medium">{task.sender}</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded">
                                Request Extension
                            </button>
                            <button className="px-3 py-1.5 text-xs font-medium text-white bg-[#3E5742] rounded">
                                Mark as Complete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex-1 space-y-5">
            <div className="text-2xl font-bold">
                Completed:
            </div>
            { categorizedTasks.completed.map(task => (
                <div className="w-full flex items-center justify-between bg-white p-4 rounded-md border border-gray-200 mb-2">
                    <div className="flex-1 w-1/2">
                        <div className="font-medium text-gray-800">{task.title}</div>
                        <div className="text-sm text-gray-500">{task.description}</div>
                    </div>
                    <div className="flex w-1/2 justify-end">  
                        <div className="flex w-1/4 items-center mx-4">
                            <img className="w-8" src={AaronSmith} alt="" />
                            <div className="ml-2">
                                <div className="text-xs text-gray-500">Assigned on {task.assignedDate}</div>
                                <div className="text-xs text-green-500">Completed on {task.completionDate}</div>
                            </div>
                        </div>

                        <div className="flex w-1/4 items-center mx-4">
                            <div className="">Profile</div>
                            <div className="ml-2">
                                <div className="text-xs text-gray-500">Assigned by:</div>
                                <div className="text-xs font-medium">{task.sender}</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#3E5742] rounded flex items-center justify-center">
                                <img className="w-5" src={CheckBox} alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  );
};

export default Tasks;