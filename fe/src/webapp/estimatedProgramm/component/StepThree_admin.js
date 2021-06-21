import React,{} from 'react';
import {Link} from 'react-router-dom'

const StepThree_admin = () => {
    return (<>  
    <div>
        <div className="main_section2_bg">
                <h2>이전 단계에서 설명한 기본 금액에서 페이지 수를 곱합니다.</h2>
        <div>
            <h4 className="smallFont">개발범위로 기본금액을 정할 수 있어요</h4>
        </div>
        </div>
        <div className="main_section3_bg">
            <h2>03. 작업하려는 페이지의 양은 어떻게 되나요?</h2>
            <div>
            <h4 className="smallFont">혹시 몇페이지가 나올지에 대해 감이 안잡히시나요?<br/>
            간단한 정보구조도(I.A)를 설계해보시면<br/>
            선택에 많은 도움이 될꺼예요!</h4>
            </div>
            <div style={{marginTop: "50px"}}>
                <div className="smallBtn" onClick={""}>
                    <p>~20P</p>
                    <h3 className="pagePrice">기본금액x1</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>21P~30P</p>
                    <h3 className="pagePrice">기본금액x2</h3>
                </div>
            </div>
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/programm/option'><button className="pageBtn">이전단계</button></Link>
                <Link to='/programm/finish'><button className="pageBtn" onClick={""}>다음단계</button></Link>
            </div>
    </div>
    </>);
}
 
export default StepThree_admin;