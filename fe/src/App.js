import './App.css';
import { Route } from 'react-router';
import NavBar from 'webapp/estimatedProgramm/container/NavBar';

import {ProgrammApp, StepZero, StepOne_plan, StepOne_design, StepTow, StepThree_option, StepThree_admin, StepFinish } from 'webapp/estimatedProgramm/index';


const App = () => {
  return (<>
    <NavBar/>
    <Route exact path='/' component={ProgrammApp} />
    <Route exact path='/programm/zero' component={StepZero} />
    <Route exact path='/programm/plan' component={StepOne_plan} />
    <Route exact path='/programm/design' component={StepOne_design} />
    <Route exact path='/programm/two' component={StepTow} />
    <Route exact path='/programm/option' component={StepThree_option} />
    <Route exact path='/programm/admin' component={StepThree_admin} />
    <Route exact path='/programm/finish' component={StepFinish} />

  </>)
}

export default App;
