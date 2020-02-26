import React, {useState} from 'react';
import Counter from "./Counter";
import TotalCount from "./TotalCount";
import AddCounter from "./AddCounter";

function App() {
    const initialCounts = [{id:1, name: 'Counter 1', count: 10},
                          {id:2, name: 'Counter 2', count: 15}];
    const [counts, setCounts] = useState(initialCounts);

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

    function deleteCounter(id) {
        const newCounts = counts.filter(e=>e.id!==id);
        setCounts(newCounts);
    }

    function addCounter(name, count) {
        const newCounts = [...counts];
        const el = {name: name, count: count, id: Date.now()};
        newCounts.push(el);
        setCounts(newCounts);
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
            name={el.name}
            id={el.id}
            count={el.count}
            decrement = {decrement}
            increment = {increment}
            reset = {resetCount}
            deleteC = {deleteCounter}
        />)}

        <AddCounter
            onSubmit = {addCounter}
        />



    </div>
  );
}

export default App;
