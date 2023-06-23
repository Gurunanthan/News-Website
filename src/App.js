import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponents from './Components/NewsComponents';
import { 
  BrowserRouter as Router,
  Switch,
  Route
      } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar' 
export default class App extends Component {
  state={
    progress:100
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  pagecount=6
  newsapikey="9feaa59ab52f41d2a63d1a5e0340f63d"
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact strict path="/"><NewsComponents setProgress={this.setProgress} pageSize={this.pagecount} country={"in"} category="general" key={"general"} newsApi={this.newsapikey}/></Route>
            <Route exact strict path="/business"><NewsComponents setProgress={this.setProgress} category="business" pageSize={this.pagecount} country="in" key={"business"} newsApi={this.newsapikey}/></Route>
            <Route exact strict path="/entertainment"><NewsComponents setProgress={this.setProgress} category="entertainment" pageSize={this.pagecount} country="in" key={"entertainment"} newsApi={this.newsapikey}/></Route>
            {/* <Route exact strict path="/general"><NewsComponents setProgress={this.setProgress} category="general" pageSize={this.pagecount} country="in" key={"general"} newsApi={this.newsapikey}/></Route> */}
            <Route exact strict path="/health"><NewsComponents setProgress={this.setProgress} category="health" pageSize={this.pagecount} country="in" key={"health"} newsApi={this.newsapikey}/></Route>
            <Route exact strict path="/science"><NewsComponents setProgress={this.setProgress} category="science" pageSize={this.pagecount} country="in" key={"science"} newsApi={this.newsapikey}/></Route>
            <Route exact strict path="/sports"><NewsComponents setProgress={this.setProgress} category="sports" pageSize={this.pagecount} country="in" key={"sports"} newsApi={this.newsapikey}/></Route>
            <Route exact strict path="/technology"><NewsComponents setProgress={this.setProgress} category="technology" pageSize={this.pagecount} country="in" key={"technology"} newsApi={this.newsapikey}/></Route>
          </Switch>
        
          <LoadingBar
            color='#f11946' progress={this.state.progress}
            // onLoaderFinished={() => setProgress(progress)}
          />
        </div>
      </Router>
    )
  }
}
