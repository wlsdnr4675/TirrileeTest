import React,{} from 'react';
import NavBar from '../container/NavBar';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const ServiceChoice = () => {
    const dispatch = useDispatch();
    const [programm, setProgramm] = useState({
        service:'',
        type:'',
        price:''
    });

    const appClick =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={service: 'app', type: 'Android / IOS', price: '300'}
        setProgramm({...data});
    }
    const webClick =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={service: 'web', type: '반응형웹', price: '400'}
        setProgramm({...data});
    }
    const dispatchEvent = () =>{

    }
    console.log("ttttt", programm)
    return (<>
        <div className="textCenter">
            <div className="main_section2_bg">
                    <h2>0단계, 어떤 서비스를 만들고 싶으신가요?</h2>
            </div>
            <div>
                <button  className="optionBtn" onClick={(e)=>appClick(e)}>
                    <h4 className="App-">App개발</h4>
                    <h3 className="Android-iOS">Android / IOS</h3>
                    <h3 className="price" >300만원</h3>
                </button>
            <div>
                <button className="optionBtn" onClick={(e)=>webClick(e)}>
                    <h3 className="App-" >web개발</h3>
                    <h3 className="Android-iOS">반응형 웹</h3>
                    <h3 className="price">400만원</h3>
                </button>
            </div>
        </div>
            <div>
                <Link to='/'><button className="pageBtn">이전단계</button></Link>
                <Link to='/programm/plan'><button className="pageBtn" onClick={()=>dispatchEvent()}>다음단계</button></Link>
            </div>
        </div>
      </>);
}
 
export default ServiceChoice;
