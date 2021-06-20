
import React from 'react';
import {Link} from 'react-router-dom'

const HomeBody = () => {
    return (<>
    <div> 
    <Link to={'/programm/zero'}><button>시작하기</button></Link>
    </div>
    </>)
   ;
}
 
export default HomeBody;