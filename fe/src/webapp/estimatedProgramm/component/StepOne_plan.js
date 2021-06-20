import React,{} from 'react';

const StepOne_plan = () => {
    return (<> 
    <div>
        <div className="main_section2_bg">
                <h2>1단계, 먼저 개발범위를 생각해 보아요</h2>
        <div>
            <h4 className="smallFont">개발범위로 기본금액을 정할 수 있어요</h4>
        </div>
        </div>
        <div className="main_section2_bg_2">
            <h2>01. 상세 계획이 되어 있나요?</h2>
            <div>
            <h4 className="smallFont">아직 상세 게획 없이 아이디어만 있어도 걱정마세요<br/> 티릴리와 함께 더 멋진 기획을 만들 수 있습니다.</h4>
            </div>
            <div style={{marginTop: "50px"}}>
                <button className="optionBtn" onClick={""}>
                    <h3 className="App-" >네! 상세계획이 있어요</h3>
                    <h3 className="Android-iOS">좋아요! 개발을 위한 기획을 함께 진행해요</h3>
                    <h3 className="price">+ 50만원</h3>
                </button>
            </div>
            <div>
                <button className="optionBtn" onClick={""}>
                    <h3 className="App-" >앗.. 아직 상세 계획이 없어요</h3>
                    <h3 className="Android-iOS">괜찮아요 :) 티릴리와 함께 서비스를 기획해보아요</h3>
                    <h3 className="price">+ 100만원</h3>
                </button>
            </div>
        </div>
    </div>
     </>);
}
 
export default StepOne_plan;