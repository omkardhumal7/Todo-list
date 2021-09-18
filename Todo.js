import React, { useState } from 'react';
import './css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Todo() {

    const [list, setList] = useState("");
    const [items, setItems] = useState([]);

    const handleIt = (event) => {
        setList(event.target.value)
    }

    const clickMe = () => {
        setItems((myValue) => {
            return [...myValue, list]
        })
    }

    const handleDel = (id) => {
        setItems((myValue) => {
            return myValue.filter((arrElem, index) => {
                return index !== id;
            })
        })
    };

    return (
        <div className='container'>
                <div className='name'> 
                    <div className='main'>
                        <input 
                        type='text' 
                        placeholder='Enter the task' 
                        onChange={handleIt}/>
                        <button 
                        style={{marginLeft:'10px', verticalAlign: 'baseline'}} 
                        className="btn btn-success btn-sm" 
                        onClick={clickMe}>Add</button>
                    </div>
                
                    <ul> {items.map((itemval, index) => {
                        return <li 
                        key={index} 
                        id={index}> {itemval} <button 
                        onClick={() => {
                            handleDel(index);
                        }} style={{margin:'3px'}} 
                        className='btn btn-danger btn-sm'>Delete</button> </li>})} 
                    </ul>
                </div>
        </div>
    )
}
