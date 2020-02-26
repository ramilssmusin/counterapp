import React from "react";

function TotalCount(props) {
    return (
        <div className="card">
            <div className="cel">
                <a className='ml-3'>Total count</a>
                <a className='ml-1 mr-1'>{props.total}</a>
                <button className='btn btn-danger' onClick={props.resetTotal}>Reset</button>
            </div>
        </div>
    );
}
export default TotalCount;