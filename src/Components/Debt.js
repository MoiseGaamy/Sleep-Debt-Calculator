import React, { useState } from 'react'
import Panel from './Panel.js'

const Debt = () => {
    const [week, setWeek] = useState({
        mon: "",
        tues: "",
        wed: "",
        thurs: "",
        fri: "",
        sat: "",
        sun:""
    })
    const [result, setResult] = useState({});
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setWeek((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (week.mon && week.thurs) {
            let mon = Number(e.target.elements.mon.value)
            let tues = Number(e.target.elements.tues.value)
            let wed = Number(e.target.elements.wed.value)
            let thurs = Number(e.target.elements.thurs.value)
            let fri = Number(e.target.elements.fri.value)
            let sat = Number(e.target.elements.sat.value)
            let sun = Number(e.target.elements.sun.value)
            let sum = mon + tues + wed + thurs + fri + sat + sun;
            let idealSleep = 56;
            let MissingHours =  idealSleep - sum;
            setResult({ sum, MissingHours });
        }
        setWeek({
            mon: "",
            tues: "",
            wed: "",
            thurs: "",
            fri: "",
            sat: "",
            sun:""
        })
        setShow(!show)
    }
    return (
        <form className="debtStyle" onSubmit={handleSubmit}>
            <h1>Sleep Debt Calculator</h1>
            <div className="divForm">
                    <div className="control">
                        <label>Last Monday Night</label>
                        <input type="number"  name="mon" placeholder="sleep Hours"  value={week.mon} onChange={handleChange}/>
                </div>
                    <div className="control">
                        <label>Last Tuesday Night</label>
                        <input type="number" name="tues" placeholder="sleep Hours" value={week.tues}  onChange={handleChange}/>
                </div>
                    <div className="control">
                        <label>Last Wednesday Night</label>
                        <input type="number" name="wed" placeholder="sleep Hours"  value={week.wed} onChange={handleChange}/>
                </div>
                    <div className="control">
                        <label>Last Thursday Night</label>
                        <input type="number" name="thurs" placeholder="sleep Hours" value={week.thurs} onChange={handleChange}/>
                </div>
                    <div className="control">
                        <label>Last Friday Night</label>
                        <input type="number" name="fri" placeholder="sleep Hours" value={week.fri} onChange={handleChange}/>
                </div>
                    <div className="control">
                        <label>Last SaturDay Night</label>
                        <input type="number"  name="sat"placeholder="sleep Hours" value={week.sat} onChange={handleChange}/>
                </div>
                    <div className="control">
                        <label>Last Sunday Night</label>
                        <input type="number" name="sun" placeholder="sleep Hours" value={week.sun} onChange={handleChange}/>
                    </div>
            </div>
            <button type="submit" className="bbtn">Proceed</button>
            {show &&<Panel result={result} />}
        </form>
    )
}

export default Debt
