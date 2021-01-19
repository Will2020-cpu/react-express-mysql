import React, { Fragment } from 'react'
import NavBar from './Components/NavBar'
import { Route, Switch } from 'react-router-dom';
import Form from './Components/Form'
import ContianerContactos from './Components/ContianerContactos';
import Sidebar from './Components/Sidebar'


const App = () => {
 
  return (
      <Fragment>
          <NavBar/>
          <div className="mt-8 mb-8">
              <Switch>
                <Route exact path="/" component={ContianerContactos}/>
                <Route path="/add" component={Form}/>
                <Route path="/test" component={Sidebar}/>
              </Switch>
          </div>
      </Fragment>
  )
}


export default App
