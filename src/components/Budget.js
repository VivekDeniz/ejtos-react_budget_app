import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, currency} = useContext(AppContext);
    const [ budget, setBudget ] = useState('');
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const submitEvent = () => {

        if(budget == ""){
            return;
        }

        else if(budget > 20000) {
            alert("The value cannot exceed £20000");
            setBudget("");
            return;
        }
        else if(budget < totalExpenses)
        {
            alert("The value cannot go below £" + totalExpenses);
            setBudget("");
            return;
        }
        else
            return;


    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    //style={size: 10}
                 //   min = 'budget - totalExpenses'
                  //  max = "20000"
                    onClick={submitEvent}
                    onChange={(event) => setBudget(event.target.value)}>

                    </input>
            </span>
        </div>
    );
};
export default Budget;
