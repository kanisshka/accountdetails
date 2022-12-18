import React, { useState } from 'react'
import TableContent from './TableContent';

export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

const data = [
    {
        name: "A",
        debit: 20000,
        credit: 0
    },
    {
        name: "B",
        debit: 0,
        credit: 22
    },
    {
        name: "C",
        debit: 90,
        credit: 0
    }
]
const Table = () => {

    const [curr, setCurr] = useState(data);
    const handleChange = event => {
        const temp = [...curr];
        temp[event.target.dataset.id][event.target.name] = event.target.value;
        setCurr(temp);
    };

    const add = () => {
        setCurr(prev => [...prev, { name: "", debit: 0, credit: 0 }]);
    };

   
    const deleteTableRows = (index) => {
        const rows = [...curr];
        rows.splice(index, 1);
        setCurr(rows);
    }

    return (
        <>
            <div className='table'>
                    <div className="dropdown" >
                        <button className="dropbtn">User Details</button>
                        <div className="dropdown-content" >
                            <a href="/">Name: ABC</a>
                            <a href="/">Age: 22</a>
                            <a href="/">Gender: Male</a>
                        </div>
                    </div>
                <div className='table-title'>
                    Table</div>
                <div className="content">
                    <div className="header">
                        <div className="row">
                            <div className="data">
                                <div>Title</div>
                            </div>
                            <div className="data">
                                <div>Debit</div>
                            </div>
                            <div className="data">
                                <div>Credit</div>
                            </div>
                            <div className="data">
                                <button className="add" onClick={add}>+</button>
                            </div>
                        </div>
                    </div>
                    <TableContent curr={curr}
                        deleteTableRows={deleteTableRows}
                        handleChange={handleChange} />
                </div>
            </div>
        </>
    )
}

export default Table


