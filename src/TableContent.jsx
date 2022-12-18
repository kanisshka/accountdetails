import React from 'react'

export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

const TableContent = ({ curr, deleteTableRows, handleChange }) => {
  const gettotaldebit = () => {
    return curr.reduce((total, item) => {
      return total + Number(item.debit);
    }, 0);
  };
  const gettotalcredit = () => {
    return curr.reduce((total, item) => {
      return total + Number(item.credit);
    }, 0);
  };
  return (
    <>
      <div className="body">
        {curr.map((item, i) => (
          <div className="row" key={i}>
            <div className="data">
              <input
                name="name"
                data-id={i}
                type="text"
                value={item.name}
                onChange={handleChange} />
            </div>
            <div className="data">
              <input
                name="debit"
                data-id={i}
                type="number"
                value={item.debit}
                onChange={handleChange}
              />

            </div>
            <div className="data">
              <input
                name="credit"
                data-id={i}
                type="number"
                value={item.credit}
                onChange={handleChange} />
            </div>
            <div className='data'>
              <button className="delete" onClick={() => deleteTableRows(i)}>x</button>
            </div>
          </div>
        ))}
        <div className="table-footer">
          <div className="row">
            <div className="data">
              <div>Total</div>
            </div>
            <div className="data">
              <div>{numberFormat(gettotaldebit())}</div>
            </div>
            <div className="data">
              <div>{numberFormat(gettotalcredit())}</div>
            </div>
            <div className="data">
              <div></div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default TableContent