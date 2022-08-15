import '../App.css';
import { PlanningKit } from './style';
import { PlanningData } from '../title/Title';
import { useState, createContext, useContext } from "react";



const Planning = () => {
    const UserContext = createContext();
    const [inputName, setInputName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const inputNameHandler = (event) => {
        setInputName(event.target.value);
    }
    const displayNameHandler = (event) => {
        setDisplayName(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log({ inputName });
        console.log({ displayName });
        localStorage.setItem('fullname', inputName);
        localStorage.setItem('displayname', displayName);
        alert('work in progress');
        window.location.href = '/congratulations';
    }

    return (
        <div className="App">
            <a href='/'>
                <img alt="logo" src='./eden.png' />
            </a>
            <PlanningKit>
                <div className="PlanContainer">
                    <ul className="timeline">
                        <li className="active-tl"></li>
                        <li className="active-tl"></li>
                        <li className="active-tl"></li>
                        <li></li>
                    </ul>
                    {PlanningData.map((planT) => {
                        return (
                            <div key={planT.id}>
                                <h2>{planT.planHeader}</h2>
                                <p>{planT.planPara}</p>
                            </div>
                        )
                    })}
                    <form className="planForm" onSubmit={submitHandler} >
                        <div className="plans">
                            <label className="plan basic-plan" for="basic">
                                <input checked type="radio" name="plan" id="basic" />
                                <div className="plan-content">
                                    <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="" />
                                    <div className="plan-details">
                                        <span>For myself</span>
                                        <p>Write better. Think more clearly. Stay organized.</p>
                                    </div>
                                </div>
                            </label>
                            <label className="plan complete-plan" for="complete">
                                <input type="radio" id="complete" name="plan" />
                                <div style={{ marginRight: "0px" }} className="plan-content">
                                    <img loading="lazy" src="https://cdn-icons-png.flaticon.com/512/681/681494.png" alt="" />
                                    <div className="plan-details">
                                        <span>With my team</span>
                                        <p>Wikis, docs, tasks &amp; projects, all in one place.</p>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary">Create Workplace</button>

                    </form>
                </div>

            </PlanningKit>
        </div>

    );

}
export default Planning;