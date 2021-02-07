import React from 'react';
import {services} from './service.js'

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return [minutes, (seconds < 10 ? '0' : '') + seconds];
}

function End()
{
    let datas = window.location.pathname.substring(window.location.pathname.indexOf(":") + 1).split('-');
    let servIndex = -1

    for (let [index, element] of Object.entries(services) )
    {
        if (element.path === datas[0])
        {
            servIndex = index
        }
    }
    if (servIndex === -1)
    {
        window.location.href = "404";
    }

    let time = millisToMinutesAndSeconds(parseInt(datas[2]))

    return (
        <div className="center-horizontal" style={{justifyContent: "center", height: "100vh"}}>
            <div className="font-main service-page--theme-list__text" style={{marginBottom: "5vh", fontSize: "5vh"}}>
                Thank you for your participation
            </div>
            <div className="font-second" style={{fontSize: "1.3vh", display: 'flex'}}>
                <div style={{textAlign: "right", margin: "1.5vh"}}>
                    <div>Service:</div>
                    <div style={{marginTop:"1vh"}}>Themes selected:</div>
                    <div style={{marginTop:"1vh"}}>Chrono:</div>
                </div>
                <div style={{margin: "1vh"}}>
                    <div style={{display: 'flex', alignItems: "center"}}>
                        <span className="font-main" style={{fontSize: "2vh"}}>{services[servIndex].name}</span>
                        <div style={{height: "2.5vh", width: "2.5vh", marginLeft: "1vh"}}>{services[servIndex].icon}</div>
                    </div>
                    <div><span className="font-main" style={{fontSize: "2vh"}}>{datas[1]}</span></div>
                    <div><span className="font-main" style={{fontSize: "2vh"}}>{time[0]}</span>min <span className="font-main" style={{fontSize: "2vh"}}>{time[1]}</span>s</div>
                </div>
            </div>
        </div>
    );
}
export default End;
