import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
//export let currency;
const Currency1 = () => {
    const [name, setName] = useState('');
    const {dispatch} = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const mystyle = {
        color: "white",
        backgroundColor: "Green",

    }
    const submitEvent1 = (val) => {
        if (name === "dollar") {
            dispatch({
                type: 'CHG_CURRENCY_D',
                payload: val,
            });
        } else if (name === "euro") {
            dispatch({
                type: 'CHG_CURRENCY_E',
                payload: val,
            });
        } else if (name === "pound") {
            dispatch({
                type: 'CHG_CURRENCY_P',
                payload: val,
            });
        } else {
            dispatch({
                type: 'CHG_CURRENCY_R',
                payload: val,
            });
        }
        };


        return (
            <div className="alert alert-secondary">
                <select className="custom-select" id="inputGroupSelect03" style={mystyle}
                        onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Currency{currency}</option>
                    <option value="$" > Dollar</option>
                    <option value="£" > Pound</option>
                    <option value="€" > Euro</option>
                    <option value="₹" >"> Ruppee</option>

                </select>
                <button className="btn btn-primary" onClick={submitEvent1} style={{ marginLeft: '2rem' }}>
                    Save
                </button>
            < /div>
        );
    };

export default Currency1;
