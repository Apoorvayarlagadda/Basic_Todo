import React from 'react'

function Todocount({ todos }) {
    return (
        <div className='display-6 row row-11 row-sm-10 row-md-7  '>
            <div className="mb-3 ">
                <label htmlFor="todo " className='display-6 pb-3 text-success'>Tasks Counts</label>
                <hr />
                {
                    <h3 className='text-success display-4'>{todos.length}</h3>
                }
            </div>
        </div>
    )
}

export default Todocount