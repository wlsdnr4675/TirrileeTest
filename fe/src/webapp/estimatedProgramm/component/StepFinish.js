import React,{} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {registerProgramm } from 'webapp/estimatedProgramm/reducer/programm.reducer'

const StepFinish = () => {
    const dispatch = useDispatch();


    const currentOption = useSelector(state => state.programms.currentOption)
    const currentProgramm = useSelector(state => state.programms.current)

    const serviceName = currentProgramm[0]?.serviceName

    const totalOptionPrice = currentOption?.map(option =>{
        return option.optionPrice
    })
    const totalProgrammPrice = currentProgramm?.map(item =>{
        return item.price
    })

    const programmSum = totalProgrammPrice?.reduce((a,b)=> a+b)
    const optionSum = totalOptionPrice?.reduce((a,b)=> a+b)
    const totalSum = programmSum + optionSum
    


    console.log(currentProgramm[2].design)


    const dispatchEvent = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        const data ={
                serviceName: currentProgramm[0].serviceName,
                plan : currentProgramm[1].plan,
                design : currentProgramm[2].design,
                pageNum: currentProgramm[3].pageNum,
                price : totalSum,
            options: currentOption.map(option => option)}
        dispatch(registerProgramm(data))
    }


    return (<> 
    <div className="finishComment">
        <div className="text-style">
        <h2>수고하셨습니다.</h2>
        </div>
        <h2>선택 프로젝트는 : {serviceName} </h2>
        <h2>견적 가격 : 대략 {totalSum} 만원</h2>
        <div className="text-style">
        <h2>입니다.</h2>
        <div>
        <h4>하지만 정확한 견적은 아니예요 :) <br/>
            티릴리와 함께 같이 진단해보고 멋있는 서비스를 만들어보아요</h4>
        </div>
        </div>
           
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/'><button className="pageBtn">다시하기</button></Link>
                <Link to='/'><button className="pageBtn" style={{marginLeft: "20px"}} onClick={(e)=>dispatchEvent(e)}>신청하기</button></Link>
        </div>
    </div>
    </>);
}
 
export default StepFinish;