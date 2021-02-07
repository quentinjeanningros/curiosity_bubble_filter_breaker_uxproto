import React from 'react';
import './navbar.css'

function NavBar()
{
    const goTo = (path) => {
        window.location.href = path;
    }

    return (
        <div className={"navbar-container"}>
            <Button text="Curiosity" size={"5vh"} action={() => goTo("/home")}/>
            <Button text="Discover" size={"2vh"} action={() => goTo("/home")}/>
            <Button text="Market" size={"2vh"} action={() => goTo("/home")}/>
            <Button text="Key" size={"2vh"} action={() => goTo("/home")}/>
        </div>
    );
}

function Button(props)
{
    return(
        <button className="font-main navbar-button" style={{fontSize: props.size}} onClick={props.action}>
            {props.text}
        </button>
    );
}

export default NavBar;
