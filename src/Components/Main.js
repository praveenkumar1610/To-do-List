import React from 'react'

function Data(){
    return(
        <div className="rw">
            <h5>Manage Employees</h5>
            <button className="btn">Delete</button>
            <button className="">Add New Employees</button>
        </div>
    )
}

function Main(){
    return(
        <div>
            <Data></Data>
        </div>
    )
}

export default Main;