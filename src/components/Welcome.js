import '../App.css';
import { WelcomeKit } from './style';
import { TitleData } from '../title/Title';
import { useState, createContext, useContext } from "react";
import Timeline from './Timeline';



const Welcome = (props) => {
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
        window.location.href = '/home-work';
    }



    return (
        <div className="App">
            <a href='/'>
            <img alt="logo" src='https://i.postimg.cc/rsV4Bb7F/eden.png'/>
            </a>
            <WelcomeKit>
                <div className="welcomeContainer">

                    <Timeline/>

                    {TitleData.map((dataT) => {
                        return (
                            <div key={dataT.id}>
                                <h2>{dataT.titleHeader}</h2>
                                <p>{dataT.titlePara}</p>
                            </div>
                        )
                    })}
                    <form className="welcomeForm" onSubmit={submitHandler} >
                        <label>Full Name</label>
                        <input type="text" placeholder="Steve Jobs" required onChange={inputNameHandler} />
                        <label>Display Name</label>
                        <input type="text" placeholder="Steve" required onChange={displayNameHandler} />
                        <button type="submit" className="btn btn-primary">Create Workplace</button>
                        {/* <input type="submit" className="btn btn-primary"/> */}
                    </form>
                </div>

            </WelcomeKit>
        </div>

    );

}
export default Welcome;