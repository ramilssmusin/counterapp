import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap';

function Counter(props) {

    return (
        <div className='card'>
            <div className="card-body mb-1">
                <a className='mr-1'>{props.counter.name} </a>
                <button className='btn btn-primary mr-1' onClick={() => props.decrement(props.counter.id)}>-</button>
                <a className='mr-1'>{props.counter.count}</a>
                <button className='btn btn-primary mr-1' onClick={() => props.increment(props.counter.id)}>+</button>
                <button className='btn btn-secondary mr-1' onClick={() => props.reset(props.counter.id)}>Reset</button>
                <button className='btn btn-danger mr-1'
                        onClick={() => props.remove(props.counter)}

                        // data-toggle="modal" data-target="#exampleModal2"


                >Delete</button>

                {/*<button className='btn btn-primary' onClick={Example}>Test</button>*/}

            </div>






        </div>
    );

}

export default Counter;