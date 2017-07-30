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
          <div className="cover">

            <form className="flex-form">
              <input onChange={this.props.onSearch} type="search" placeholder="What do you need done?"/>
              <label htmlFor="from">From</label>
              <input type="date" name="from"/>

              <label htmlFor="to">To</label>
              <input type="date" name="to"/>

              <select>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
              </select>

              <input type="submit" value="Search"/>

            </form>
          </div>

          <code>{JSON.stringify(this.props.providers)}</code>
          <h2>{this.props.providers[0] && "Found "+this.props.providers[0].providers.length+" results for: "+this.props.providers[0].category}</h2>
          {this.props.providers[0] && this.props.providers[0].providers.map(pro=><div>{pro}</div>)}
        </p>
        <video className="background-video" src="https://coverr.co/s3/mp4/a-working-man.mp4" autoPlay loop/>
      </div>
    );
  }
}

export default connect(state=>state, mapDispatchToProps)(App)
