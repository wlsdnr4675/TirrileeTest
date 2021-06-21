import React,{useState} from 'react';
import NavBar from '../container/NavBar';
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addProgramm} from 'webapp/estimatedProgramm/reducer/programm.reducer'


const ServiceChoice = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [programm, setProgramm] = useState({
        service:'',
        price: 0
    });

    const appClick =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={service: 'app', price: 300}
        setProgramm({...data});
    }
    const webClick =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const data ={service: 'web', price: 400}
        setProgramm({...data});
    }
    const dispatchEvent = (e) =>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(addProgramm(programm))
        history.push("/programm/plan")
    }
    console.log("ttttt", programm)
    return (<>
        <div className="textCenter">
            <div className="main_section2_bg">
                    <h2>0단계, 어떤 서비스를 만들고 싶으신가요?</h2>
            </div>
            <div className="main_section3_bg">
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
        <div style={{marginTop: "50px"}} className="textCenter">
                <Link to='/'><button className="pageBtn">이전단계</button></Link>
                <button className="pageBtn" onClick={(e)=> dispatchEvent(e)}>다음단계</button>
            </div>
        </div>
      </>);
}
 
export default ServiceChoice;
