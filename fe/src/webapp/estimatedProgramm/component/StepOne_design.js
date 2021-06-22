import React,{} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { addProgramm } from 'webapp/estimatedProgramm/reducer/programm.reducer'

const StepOne_design = () => {
    const current = useSelector(state => state.programms.current)
    console.log("design redux state: ",current)

    const history = useHistory();
    const dispatch = useDispatch();
    
    const [programm, setProgramm] = useState({
        design: false,
        price: 0,
    });
    const yesDesign =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={design: true, price: 50}
        setProgramm({...data});
    }
    const noDesign =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={design: false, price: 100}
        setProgramm({...data});
    }
    console.log("prgramm: ", programm)
    const dispatchEvent = async (e) =>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(addProgramm(programm))
        await history.push("/programm/two")
    }
    return (<> 
    <div>
        <div className="main_section2_bg">
                <h2>1단계, 먼저 개발범위를 생각해 보아요</h2>
        <div>
            <h4 className="smallFont">개발범위로 기본금액을 정할 수 있어요</h4>
        </div>
        </div>
        <div className="main_section3_bg">
            <h2>02. 디자인이 되어 있나요?</h2>
            <div>
            <h4 className="smallFont">아직 구체적인 디자인이 진행되지 않아도 돼요!<br/> 티릴리 디자이너들과 함께 멋진 디자인을 만들어봐요!</h4>
            </div>
            <div style={{marginTop: "50px"}}>
                <button className="optionBtn" onClick={(e) => yesDesign(e)}>
                    <h3 className="App-" >네! 디자인이 되어있어요</h3>
                    <h3 className="Android-iOS">멋져요! 개발을 할 수 있도록 디자인을 함께 보완해요</h3>
                    <h3 className="price">+ 50만원</h3>
                </button>
            </div>
            <div>
                <button className="optionBtn" onClick={(e) => noDesign(e)}>
                    <h3 className="App-" >앗.. 디자인은 없어요</h3>
                    <h3 className="Android-iOS">괜찮아요 :) 티릴리와 함께 디자인을 진행해봐요</h3>
                    <h3 className="price">+ 100만원</h3>
                </button>
                
            </div>
            
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                    <Link to='/programm/plan'><button className="pageBtn">이전단계</button></Link>
                <button className="pageBtn" style={{marginLeft: "20px"}} onClick={(e) => dispatchEvent(e)}>다음단계</button>
            </div>
    </div>
     </>);
}
 
export default StepOne_design;