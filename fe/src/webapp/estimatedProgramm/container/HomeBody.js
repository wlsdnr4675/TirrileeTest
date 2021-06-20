
import React from 'react';
import {Link} from 'react-router-dom'
import service from 'webapp/estimatedProgramm/image/Service_illust.svg'

const HomeBody = () => {
    return (<>
    <div className="main_section1_banner">
        <div className="Tirrilee-Estimate-Program-Beta-Service">
            Tirrilee Estimate <br/> Program (Beta Service)
            <img src ={service}/>
        </div>
    </div>
    <div style={{textAlign: "center"}}>
        <Link to='programm/zero'><button className="startBtn">시작하기</button></Link>
    </div>
    </>)
   ;
}
 
export default HomeBody;