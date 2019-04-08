import React, { Component } from 'react';
import Home from './components/Home';
import Error from './components/Error'
import Navigation from './components/Navigation'
import Alberta from './components/Alberta';
import BritishColumbia from './components/BritishColumbia';
import Manitoba from './components/Manitoba'
import NewBrunswick from './components/NewBrunswick'
import NewfoundlandAndLabrador from './components/NewfoundlandAndLabrador';
import NovaScotia from './components/NovaScotia';
import Ontario from './components/Ontario'
import PrinceEdwardIsland from './components/PrinceEdwardIsland'
import Quebec from './components/Quebec';
import Saskatchewan from './components/Saskatchewan';
import NorthwestTerritories from './components/NorthwestTerritories'
import Nunavut from './components/Nunavut'
import Yukon from './components/Yukon'
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
        <Switch>
      
        <Route path="/" component={Home} exact />
        <Route path="/alberta" component={Alberta}/>
        <Route path="/britishColumbia" component={BritishColumbia}/>
        <Route path="/manitoba" component={Manitoba}/>
        <Route path="/newbrunswick" component={NewBrunswick}/>
        <Route path="/newfoundlandAndlabrador" component={NewfoundlandAndLabrador}/>
        <Route path="/novascotia" component={NovaScotia}/>
        <Route path="/ontario" component={Ontario}/>
        <Route path="/princeedwardisland" component={PrinceEdwardIsland}/>
        <Route path="/quebec" component={Quebec}/>
        <Route path="/saskatchewan" component={Saskatchewan}/>
        <Route path="/northwestterritories" component={NorthwestTerritories}/>
        <Route path="/nunavut" component={Nunavut}/>
        <Route path="/yukon" component={Yukon}/>
        <Route component={Error} />
        
        
      </Switch>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
