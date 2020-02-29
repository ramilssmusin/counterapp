import React, {useState} from 'react';
import Counter from "./Counter";
import TotalCount from "./TotalCount";
import AddCounter from "./AddCounter";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import ConfirmationDelete from "./ConfirmationDelete";

function App() {
    const initialCounts = [{id:1, name: 'Counter 1', count: 10},
                          {id:2, name: 'Counter 2', count: 15}];
    const [counts, setCounts] = useState(initialCounts);

    const [confirmCounter, setConfirmCounter] = useState({});

    function resetTotalCount() {
        let newCounts = counts.map(cur => ({...cur, count:0}));
        setCounts(newCounts);
    }

    function decrement(id) {
        const newCounts = counts.map(e => {
            if (e.id===id) return {...e, count:e.count-1};
            return e;
        });
        setCounts(newCounts);
    }

    function increment(id) {
        const index = counts.findIndex(e => e.id===id);
        const newCounts = [...counts];
        newCounts[index].count = newCounts[index].count + 1;
        setCounts(newCounts);
    }

    function resetCount(id) {
        const newCounts = counts.map(e => {
            if (e.id===id) return {...e, count:e.count=0};
            return e;
        });
        setCounts(newCounts);
    }

    function addCounter(name, count) {
        const newCounts = [...counts];
        const el = {name: name, count: count, id: Date.now()};
        newCounts.push(el);
        setCounts(newCounts);
    }

    const confirmRemoveCounter = counter => {
        setConfirmCounter(counter);
    }

    const removeConfirmed = (e) => {
        const newCounters = counts.filter(el => el.id !== confirmCounter.id);
        setCounts(newCounters);
        setConfirmCounter({});
    }

    const confirmDeleteCancel = () => {
        setConfirmCounter({});
    }

    return (
    <div className="container">
        <h3>Counter App</h3>

        <TotalCount
            total={counts.reduce((acc, cur) => acc+cur.count, 0)}
            resetTotal = {resetTotalCount}
        />

        {counts.map(el => <Counter
            key={el.id}
            counter={el}
            decrement = {decrement}
            increment = {increment}
            remove = {confirmRemoveCounter}
        />)}

        <AddCounter
            onSubmit = {addCounter}
        />

        <ConfirmationDelete
            name={confirmCounter.name}
            onSuccess={removeConfirmed}
            onCancel={confirmDeleteCancel}
        />


    </div>
  );
}

export default App;
