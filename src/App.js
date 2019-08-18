import React, { Component } from 'react'
import "./App.css"
import Header from "./Components/Header"
import Memegenerator from "./Components/MemeGenerator"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Memegenerator/>
        
      </div>
    )
  }
}
