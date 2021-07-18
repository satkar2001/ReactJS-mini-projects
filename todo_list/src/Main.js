import React from 'react'

export default function Main() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1>TODO LIST</h1>
                    <input type="text" placeholder="enter task" className='form-control'/>
                    <button className="btn btn-success">add tas</button>
                </div>
            </div>
        </div>
    )
}
