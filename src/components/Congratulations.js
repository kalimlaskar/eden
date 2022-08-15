
import { CongrtsKit } from './style';
import { CongratulationsData } from '../title/Title';
import { useState } from "react";


const Congrts = () => {
    const [inputName, setInputName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const inputWorkplaceHandler = (event) => {
        setInputName(event.target.value);
    }
    const inputUrlHandler = (event) => {
        setDisplayName(event.target.value);
    }
    const submitHomeKitHandler = (event) => {
        event.preventDefault();
        console.log({ inputName });
        console.log({ displayName });
        localStorage.setItem('fullname', inputName);
        localStorage.setItem('displayname', displayName);
        window.location.href = '/';
    }


    return (
        <div className="App">
            <a href='/'>
                <img alt="logo" src='./eden.png' />
            </a>
            <CongrtsKit>
                <div className="congrtsContainer">
                    <ul className="timeline">
                        <li className="active-tl"></li>
                        <li className="active-tl"></li>
                        <li className="active-tl"></li>
                        <li className="active-tl"></li>
                    </ul>
                    <span className="congrtsRight">✓</span>
                    {CongratulationsData.map((congrtsT) => {
                        return (
                            <div key={congrtsT.id}>
                                <h2>{congrtsT.congHeader}</h2>
                                <p>{congrtsT.congPara}</p>
                            </div>
                        )
                    })}
                    <form className="homeKitForm" onSubmit={submitHomeKitHandler} >
                        <button type="submit" className="btn btn-primary">Launch Eden</button>
                        {/* <input type="submit" className="btn btn-primary"/> */}
                    </form>
                </div>
            </CongrtsKit>
        </div>

    );

}
export default Congrts;