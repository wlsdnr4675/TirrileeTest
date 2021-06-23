import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {addOption, registerProgramm} from 'webapp/estimatedProgramm/reducer/programm.reducer'

const StepThree_admin = () => {
    
    const dispatch  = useDispatch();
    const [isChecked , setIsChecked] = useState(false);

    const [optionList, setOptionList] = useState([
        { optionName: "서비스 내에서 관리 ", optionPrice: 100 },
        { optionName: "기본 Admin", optionPrice: 150 },
        { optionName: "확장 Admin", optionPrice: 200 },
        { optionName: "필요없어요", optionPrice: 0 },
       
    ]);

    
 
    const handleClick =  (e) =>{
        e.stopPropagation();
        e.preventDefault();
        const option = e.target.getAttribute("data-option")
        const price = e.target.getAttribute("data-price")
        setIsChecked(true)
        dispatch(addOption({optionName: option, optionPrice: Number(price)}))
    }


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
            <div className="btnDiv">
            <div className="adminAlign" >
                <div className="adminBtn" >
                    <input className="admin_checkBox" type="checkbox"data-option={optionList[0].optionName} 
                     data-price={optionList[0].optionPrice} onChange={(e)=>handleClick(e)}/>
                    <h3>{optionList[0].optionName}</h3>
                    <h3 className="admin_second">관리자권한부여</h3>
                    <h3 className="admin_price">{optionList[0].optionPrice}만원

                    </h3>
                </div>
                <div className="adminBtn" >
                    <input className="admin_checkBox" type="checkbox" data-option={optionList[1].optionName} data-price={optionList[1].optionPrice} onChange={(e)=>handleClick(e)}/>
                    <h3>{optionList[1].optionName}</h3>
                    <h3 className="admin_second">관리자페이지운영</h3>
                    <h3 className="admin_price">{optionList[1].optionPrice}만원
                    </h3>
                    


                </div>
            </div>
            <div className="adminAlign" >
            <div className="adminBtn" >
                    <input className="admin_checkBox" type="checkbox" data-option={optionList[2].optionName} data-price={optionList[2].optionPrice} onChange={(e)=>handleClick(e)}/>
                    <h3>{optionList[2].optionName}</h3>
                    <h3 className="admin_second">관리자페이지 + 대쉬보드</h3>
                    <h3 className="admin_price">{optionList[2].optionPrice}만원
                    </h3>

                </div>
                <div className="adminBtn" >
                    <input className="admin_checkBox" type="checkbox" data-option={optionList[3].optionName} data-price={optionList[3].optionPrice} onChange={(e)=>handleClick(e)}/>
                    <h3>{optionList[3].optionName}</h3>
                    <h3 className="admin_second">해당기능이 필요없어요</h3>
                    <h3 className="admin_price">{optionList[3].optionPrice}만원
                    </h3>
                </div>
            </div>
        </div>
        </div>
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/programm/option'><button className="pageBtn">이전단계</button></Link>
                <Link to='/programm/finish'><button className="pageBtn" style={{marginLeft: "10px"}} >다음단계</button></Link>
            </div>
    </div>
    </>);
}
 
export default StepThree_admin;