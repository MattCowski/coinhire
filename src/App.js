import React, { Component } from 'react';
import logo from './bitcoin.png';
import './App.css';
import {connect} from 'react-redux'


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: (e)=> dispatch({type: 'SEARCH', value: e.target.value})
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hire Freelancers and Contractors directly with Bitcoin and the Blockchain.</h2>
        </div>
        <p className="App-intro">
          <input type="text" placeholder="What do you need done?" onChange={this.props.onSearch}/>
          <code>{JSON.stringify(this.props.providers)}</code>
          <h2>{this.props.providers[0] && "Found "+this.props.providers[0].providers.length+" results for: "+this.props.providers[0].category}</h2>
          {this.props.providers[0] && this.props.providers[0].providers.map(pro=><div>{pro}</div>)}
        </p>
      </div>
    );
  }
}

export default connect(state=>state, mapDispatchToProps)(App)
