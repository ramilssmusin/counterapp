import React, {useState} from "react";

function AddCounter(props) {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    const onSubmit =() => {
        props.onSubmit(name, +count);
        setName('');
        setCount(0);
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <input value={name} name='name' placeholder='name' type='text'
                onChange={e => setName(e.target.value)}/>
                <input value={count} name='count' placeholder='count' type='number'
                onChange={e => setCount(e.target.value)}/>
                <button className='btn btn-dark' onClick={() => onSubmit(name, count)}>Add counter</button>
            </div>
        </div>
    );
}

export default AddCounter;