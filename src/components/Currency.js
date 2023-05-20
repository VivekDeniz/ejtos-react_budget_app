import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type : 'CHG_CURRENCY',
            payload : val,
        });
    }
    const mystyle = {
        color: "white",
        backgroundColor: "LightGreen",

    }
    return (
        <div className='alert alert-dark'>
            <span>Currency: </span>
            <select className="custom-select" name = "currency" id = "currency" style={mystyle} onChange={(event) =>changeCurrency(event.target.value)} >
                <option class="text-bg-secondary p4" value="£">Pound £</option>
                <option class="text-bg-secondary p4" value="$">Dollar $</option>
                <option className="text-bg-secondary p4" value="₹">Rupee ₹</option>
                <option className="text-bg-secondary p4" value="€">Euro €</option>
            </select>
        </div>
    );
}

export default Currency;