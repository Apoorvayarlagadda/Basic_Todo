import React from 'react'
import { useForm } from 'react-hook-form'



function Addtodo({ onFormSubmit }) {

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='row row-11 row-sm-10 row-md-7 border-end border-4'>
            <form onSubmit={handleSubmit(onFormSubmit)} className='form'>
                <div className="mb-3 ">
                    <label htmlFor="todo " className='display-6 pb-3 text-info font-weight-bold'>Add task</label>
                    <hr />
                    <p className='lead'>Enter a task :</p>
                    <input type="text" id="todo" className="form-control w-75 d-block mx-auto" {...register("todo", { required: true })} ></input>
                    {errors.todo?.type === 'required' && <p className="text-danger">*Task is Required</p>}
                </div>
                <button className="btn btn-info w-50 " type="submit">Add</button>
            </form>
        </div >
    )
}

export default Addtodo;
