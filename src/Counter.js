import React, {useState} from "react";
import {Button, Modal} from 'react-bootstrap';

function Counter(props) {

     function Example() {
         const [show, setShow] = useState(false);

         const handleClose = () => setShow(false);
         const handleShow = () => setShow(true);

         return (
             <>
                 <Button variant="primary" onClick={handleShow}>
                     Launch demo modal
                 </Button>

                 <Modal show={show} onHide={handleClose} animation={false}>
                     <Modal.Header closeButton>
                         <Modal.Title>Modal heading</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                     <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>
                             Close
                         </Button>
                         <Button variant="primary" onClick={handleClose}>
                             Save Changes
                         </Button>
                     </Modal.Footer>
                 </Modal>
             </>
         );
     }

    return (
        <div className='card'>
            <div className="card-body mb-1">
                <a className='mr-1'>{props.name} </a>
                <button className='btn btn-primary mr-1' onClick={() => props.decrement(props.id)}>-</button>
                <a className='mr-1'>{props.count}</a>
                <button className='btn btn-primary mr-1' onClick={() => props.increment(props.id)}>+</button>
                <button className='btn btn-secondary mr-1' onClick={() => props.reset(props.id)}>Reset</button>
                <button className='btn btn-danger mr-1'
                        onClick={() => props.deleteC(props.id)}

                        // data-toggle="modal" data-target="#exampleModal2"


                >Delete</button>

                {/*<button className='btn btn-primary' onClick={Example}>Test</button>*/}

            </div>






        </div>
    );

}

export default Counter;