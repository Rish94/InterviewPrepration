import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage';

import SQL from '../src/ContentPages/SQL'

import Aptitute from '../src/ContentPages/APTITUTE'
import HR from '../src/ContentPages/Hr'
import Reasoning from '../src/ContentPages/Reasoning'
import technical from '../src/ContentPages/technical'
import verbal from '../src/ContentPages/verbal'


import login from '../src/Authentication/Login'
import Signup from '../src/Authentication/SignUp'


import Interviewtip from './Pages/Interviewtip';

import Lastyearquestions from './Pages/Lastyearquestions';

import Mocktest from './Pages/Mocktest';

// import PDF from '../src/ContentPages/Pdf'



export default function MainPage() {

  return (
    <>

      <Router>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/sql" component={SQL} />

          <Route exact path="/aptitute" component={Aptitute} />
          <Route exact path="/verbal" component={verbal} />

          <Route exact path="/hr" component={HR} />
          <Route exact path="/reasoning" component={Reasoning} />
          <Route exact path="/technical" component={technical} />


          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={Signup} />


          <Route exact path="/interviewtip" component={Interviewtip} />

          <Route exact path="/lastyearquestions" component={Lastyearquestions} />
          <Route exact path="/mocktest" component={Mocktest} />

          {/* <Route exact path='/pdf' component={PDF}/> */}


        </Switch>
      </Router>

    </>
  )
}
