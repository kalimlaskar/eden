
import { HomeKit } from './style';
import { HomeData } from '../title/Title';
import { useState } from "react";
import Timeline from './Timeline';




const Homework = (...props) => {

    const [workPlaceName, setWorkplaceName] = useState('');
    const [urlName, setUrlName] = useState('');

    const inputWorkplaceHandler = (event) => {
        setWorkplaceName(event.target.value);
    }
    const inputUrlHandler = (event) => {
        setUrlName(event.target.value);
    }
    const submitHomeKitHandler = (event) => {
        event.preventDefault();
        console.log({ workPlaceName });
        console.log({ urlName });
        console.log(localStorage.getItem('Name'));
        window.location.href = '/planning';
    }

    return (
        <div className="App">
            {props.inputName}
            <a href='/'>
            <img alt="logo" src='https://i.postimg.cc/rsV4Bb7F/eden.png'/>
            </a>
            <HomeKit>
                <div className="HomeKitContainer">
                    <ul className="timeline">
                        <li className="active-tl"></li>
                        <li className="active-tl"></li>
                        <li></li>
                        <li></li>
                    </ul>
                    {HomeData.map((homeT) => {
                        return (
                            <div key={homeT.id}>
                                <h2>{homeT.homeHeader}</h2>
                                <p>{homeT.homePara}</p>
                            </div>
                        )
                    })}
                    <form className="homeKitForm" onSubmit={submitHomeKitHandler} >
                        <label>Workplace Name </label>
                        <input type="text" placeholder="Eden" required onChange={inputWorkplaceHandler} />
                        <label>Workplace URL (optional)</label>
                        <div className="homeKitUrl">
                            <input type="text" disabled placeholder="www.eden.com/" />
                            <input type="text" placeholder="Example" required onChange={inputUrlHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Workplace</button>
                        {/* <input type="submit" className="btn btn-primary"/> */}
                    </form>
                </div>
            </HomeKit>
        </div>

    );

}
export default Homework;