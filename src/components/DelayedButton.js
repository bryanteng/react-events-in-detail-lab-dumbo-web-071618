// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{


  handleOnClick = (event) => {
    event.persist()
    return setTimeout(this.props.onDelayedClick,this.props.delay, event)
  }


  render(){
    return(
    <button onClick={this.handleOnClick} >delay button</button>
    )
  }
}
