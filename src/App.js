import './App.css'
//import Profile from './component/Profile/Profile/Profile'
import React, { Component } from 'react'
import Count from './Count'



export class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Person : { 
          fullName : "Person name",
          bio : "Person bio", 
          imgSrc: "https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg", 
          
          profession:"Person profession"
        },
        show : true
      }
    this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
      this.setState(function (prevState){
        return{
          show : !prevState.show
        }
      })
    }

  render() {
    if (this.state.show)
      return (
        <div className='container'>
          <div className="card">
            <button onClick={this.clickHandler}>Hide</button>
            <br/>
            <Count info={this.state.Person}/>
          </div>
      </div>
      ); else 
      return (
        <div className='container'>
          <div className="card">
          <button onClick={this.clickHandler}>Show</button>
          </div>
      </div>
      )
  }
}

export default App 