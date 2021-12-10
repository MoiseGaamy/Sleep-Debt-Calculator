import React from 'react'
import { useState } from 'react';

const Panel = ({ result,  }) => {
    const [closeok, setCloseok] = useState(false);
    let Missing = result.sum;
    let note = "";
        if (Missing === 56) {
               note=`Wow you are in shape Keep it up.you have${result.MissingHours} debts. of sleep.`
        } else if (Missing > 56) {
            note = "Oops Got nothing for ya.";
        } else {
            note=`Please get some rest you have ${result.MissingHours} debts of sleep.`
            
        }
    
    return (
        <div className="resultPanel">
            <h3>Note</h3>
            <p>Yours actual sleep for the week is :{result.sum} Hours</p>
            <p>{note}</p>
            <button className="bbtn" onClick={()=> setCloseok(!closeok)}>OK</button>
         </div>
    )
}

export default Panel
