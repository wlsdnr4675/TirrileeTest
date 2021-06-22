import React,{} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import { addProgramm } from 'webapp/estimatedProgramm/reducer/programm.reducer'

const StepTow = () => {
    const current = useSelector(state => state.programms.current)
    const priceList = current.map(item => {
        return item.price
    })
    const basicPrice = priceList[0]
    console.log("price List: ", basicPrice)

    const history = useHistory();
    const dispatch = useDispatch();
    
    const [programm, setProgramm] = useState({
        pageNum: "",
        price: basicPrice,
    });
    const under20page =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={pageNum: "under20", price: programm.price * 1}
        setProgramm({...data});
    }
    const over20page =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={pageNum: "over20", price: programm.price * 2}
        setProgramm({...data});
    }
    console.log("prgramm: ", programm)
    const dispatchEvent = async (e) =>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(addProgramm(programm))
        await history.push("/programm/option")
    }
    return (<> 
        <div>
        <div className="main_section2_bg">
                <h2>2단계, 작업페이지를 선정해봅시다</h2>
        <div>
            <h4 className="smallFont">이전 단계에서 설명한 기본 금액에서 페이지 수를 곱합니다.</h4>
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
                <button className="smallBtn" onClick={(e)=>under20page(e)}>
                    <p>~20P</p>
                    <h3 className="pagePrice">기본금액 x1</h3>
                </button>
            </div>
            <div>
                <button className="smallBtn" onClick={(e)=>over20page(e)}>
                    <p>21P~30P</p>
                    <h3 className="pagePrice">기본금액 x2</h3>
                </button>
            </div>
            
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/programm/design'><button className="pageBtn">이전단계</button></Link>
                <button className="pageBtn" style={{marginLeft: "20px"}} onClick={(e)=> dispatchEvent(e)}>다음단계</button>
            </div>
    </div>
     </>);
}
 
export default StepTow;