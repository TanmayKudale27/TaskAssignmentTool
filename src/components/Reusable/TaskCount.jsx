import React from 'react'
import './TaskCount.css'

function TaskCount({data}) {
  return (
    <div className='count-chart'>
      <div className="count-card">
        <div className="count">{data["taskCount"].assigned}</div>
        <div className="task-type">Assigned Tasks</div>
      </div>

      <div className="count-card">
        <div className="count">{data["taskCount"].accepted}</div>
        <div className="task-type">Accepted Tasks</div>
      </div>

      <div className="count-card">
        <div className="count">{data["taskCount"].completed}</div>
        <div className="task-type">Completed Tasks</div>
      </div>

      <div className="count-card">
        <div className="count">{data["taskCount"].rejected}</div>
        <div className="task-type">Rejected Tasks</div>
      </div>
    </div>
  )
}

export default TaskCount
