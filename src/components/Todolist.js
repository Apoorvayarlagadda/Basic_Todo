import React from 'react'

function Todolist({ todos }) {
    return (
        <div className='display-6 row row-11 row-sm-10 row-md-7 border-end border-4 '>
            <div className="mb-3 ">
                <label htmlFor="todo " className='display-6 pb-3 text-danger'>View Tasks</label>
                <hr />
                {
                    todos.map((task, index) => <h3 className='text-warning' key={index}>{task}</h3>)
                }
            </div>
        </div>
    )
}

export default Todolist