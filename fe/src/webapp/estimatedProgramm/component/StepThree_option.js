import React,{} from 'react';
import {Link} from 'react-router-dom'

const StepThree_option = () => {
    return (<>
     <div>
        <div className="main_section2_bg">
                <h2>3단계, 기본 기능 외에 꼭 검증하고 <br/> 싶은 특별한 기능을 알려주세요.</h2>

        </div>
        <div className="main_section2_bg_2">
            <h2>04. 필요한 추가 기능을 선택해보세요!</h2>
            <div>
            <h4 className="smallFont">추가 기능을 통해 진행하시는 서비스가<br/>
            좀 더 다채로워 질 수 있어요!<br/>
            어떤 추가 기능이 필요한지 고민해 보시고 선택해 주세요</h4>
            <div><br/><br/><br/>
            <h4 className="smallFont" style={{color : "blue"}}>(중복 선택 가능합니다.)</h4>
            </div>
            </div>
            
            <div style={{marginTop: "50px"}}>
                <div className="smallBtn" onClick={""}>
                    <p>GPS(내주변)</p>
                    <h3 className="pagePrice">200만원</h3>
                    <input className="checkBox" type="checkbox"/>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>지도(맵 커스텀)</p>
                    <h3 className="pagePrice">200만원</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>카카오톡 푸쉬</p>
                    <h3 className="pagePrice">200만원</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>커뮤니티</p>
                    <h3 className="pagePrice">200만원</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>공유하기</p>
                    <h3 className="pagePrice">200만원</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>유저타입확장</p>
                    <h3 className="pagePrice">200만원</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>채팅(실시간)</p>
                    <h3 className="pagePrice">200만원</h3>
                </div>
            </div>
            <div>
                <div className="smallBtn" onClick={""}>
                    <p>필요 없어요</p>
                    <h3 className="pagePrice">0원</h3>
                </div>
            </div>
            
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/programm/two'><button className="pageBtn">이전단계</button></Link>
                <Link to='/programm/admin'><button className="pageBtn" onClick={""}>다음단계</button></Link>
            </div>
    </div>
     </>);
}
 
export default StepThree_option;