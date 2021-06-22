import React,{} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {addOption} from 'webapp/estimatedProgramm/reducer/programm.reducer'

const StepThree_option = () => {
    const dispatch = useDispatch();
    const [isChecked , setIsChecked] = useState(false);

    const [optionList, setOptionList] = useState([
        { optionName: "GPS(내주변)", optionPrice: 200 },
        { optionName: "지도(맵커스텀)", optionPrice: 200 },
        { optionName: "카카오톡 푸쉬", optionPrice: 200 },
        { optionName: "커뮤니티", optionPrice: 200 },
        { optionName: "공유하기", optionPrice: 200 },
        { optionName: "유저타입확장", optionPrice: 200 },
        { optionName: "채팅(실시간)", optionPrice: 200 },
        { optionName: "필요없어요", optionPrice: 0},
    ]);
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

    const handleClick =  (e) =>{
        e.stopPropagation();
        e.preventDefault();
        const option = e.target.getAttribute("data-option")
        const price = e.target.getAttribute("data-price")
        if(isChecked){
            dispatch(addOption({option: option, price: Number(price)}))
        }
        else{

        }
        
    }
    console.log("check: ", isChecked)

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
            <h4 className="smallFont" style={{color :"blue"}}>(중복 선택 가능합니다.)</h4>
            </div>
            </div>
            {optionList.map((item, i) =>{
                return (<>
            <div style={{marginTop: "50px"}}>
                <div className="smallBtn" key={i}>
                    <p>{item.optionName}</p>
                    <h3 className="pagePrice">{item.optionPrice}만원
                    <input className="checkBox" type="checkbox" data-option={item.option} data-price={item.price} onChange={(e)=>handleCheck(e)}/>
                    </h3>
                </div>
            </div>
                </>)
            })}
           
            
            
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/programm/two'><button className="pageBtn">이전단계</button></Link>
                <Link to='/programm/admin'><button style={{marginLeft: "20px"}} className="pageBtn">다음단계</button></Link>
            </div>
    </div>
     </>);
}
 
export default StepThree_option;