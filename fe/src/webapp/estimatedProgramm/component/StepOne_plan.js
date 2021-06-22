import React,{} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { addProgramm } from 'webapp/estimatedProgramm/reducer/programm.reducer'


const StepOne_plan = () => {
    const current = useSelector(state => state.programms.current)
    console.log("plan redux state: ",current)
    const preprice = current.map( item =>{
        return item.price
        })

    console.log("plan redux price: ", ...preprice)
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [programm, setProgramm] = useState({
        plan: false,
        price: 0
    });
    console.log("sssssss", programm)
    const yesPlan =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={plan: true, price: 50}
        setProgramm({data});
    }
    const noPlan =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={plan: false, price: 100}
        setProgramm({...data});
    }
    console.log("prgramm: ", programm)
    const dispatchEvent = async (e) =>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(addProgramm(programm))
        await history.push("/programm/design")
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
            <h2>01. 상세 계획이 되어 있나요?</h2>
            <div>
            <h4 className="smallFont">아직 상세 게획 없이 아이디어만 있어도 걱정마세요<br/> 티릴리와 함께 더 멋진 기획을 만들 수 있습니다.</h4>
            </div>
            <div style={{marginTop: "50px"}}>
                <button className="optionBtn" onClick={(e)=> yesPlan(e)}>
                    <h3 className="App-" >네! 상세계획이 있어요</h3>
                    <h3 className="Android-iOS">좋아요! 개발을 위한 기획을 함께 진행해요</h3>
                    <h3 className="price">+ 50만원</h3>
                </button>
            </div>
            <div>
                <button className="optionBtn" onClick={(e) => noPlan(e)}>
                    <div className="App-" >앗.. 아직 상세 계획이 없어요</div>
                    <h3 className="Android-iOS">괜찮아요 :) 티릴리와 함께 서비스를 기획해보아요</h3>
                    <h3 className="price">+ 100만원</h3>
                </button>
            </div>
            
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/programm/zero'><button className="pageBtn">이전단계</button></Link>
                <button className="pageBtn" style={{marginLeft: "20px"}} onClick={(e)=> dispatchEvent(e)}>다음단계</button>
            </div>
    </div>
     </>);
}
 
export default StepOne_plan;