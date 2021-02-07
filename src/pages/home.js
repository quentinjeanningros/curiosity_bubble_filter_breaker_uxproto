import React from 'react';
import './home.css';
import NavBar from '../components/navbar.js';
import {services} from './service.js'

function Home()
{
    return (
        <div>
            <NavBar/>
            <div className="font-main center-horizontal" style={{fontSize: "5vh", marginTop: "10vh", marginBottom: "10vh"}}>
                <div><span className="color-main">Discover</span> something <span className="color-second">new</span> on</div>
            </div>
            <ServicesList/>
        </div>
    );
}

function ServicesList()
{

    const goTo = (path) => {
        window.location.href = path;
    }

    return(
        <div className="service-list">
            {services.map((item) =>
                <ServicesCell name={item.name} icon={item.icon} path={item.path} action={() => goTo("/service:" + item.path)} key={item.name}/>
            )}
        </div>
    );
}

function ServicesCell(props)
{

    return(
        <button className="service-cell center-horizontal" onClick={props.action}>
            <div className="service-icon">
                {props.icon}
            </div>
            <div className="font-main service-name">
                {props.name}
            </div>
        </button>
    );
}

export default Home;
