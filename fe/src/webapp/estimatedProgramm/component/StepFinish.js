import React,{} from 'react';
import {Link} from 'react-router-dom'

const StepFinish = () => {
    return (<> 
    <div className="finishComment">
        <div className="text-style">
        <h2>수고하셨습니다.</h2>
        </div>
        <h2>선택 프로젝트는 : </h2>
        <h2>견적 가격 : 대략  만원</h2>
        <div className="text-style">
        <h2>입니다.</h2>
        <div>
        <h4>하지만 정확한 견적은 아니예요 :) <br/>
            티릴리와 함께 같이 진단해보고 멋있는 서비스를 만들어보아요</h4>
        </div>
        </div>
           
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/'><button className="pageBtn">다시하기</button></Link>
                <Link to='/'><button className="pageBtn" onClick={""}>신청하기</button></Link>
        </div>
    </div>
    </>);
}
 
export default StepFinish;