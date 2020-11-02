import React from 'react';

function Locate(displays) {
    return(
        <form className="locate">
            <div className="form-group">
                <input className="form-control" 
                    type="text"
                    placeholder="Search for an employee"
                    {...displays}
                    ></input>
            </div>
        </form>
    )
}

export default Locate;
