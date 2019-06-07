import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedImg: 0,
      carouselData
    }
  }
  componentDidMount(){
    // this.setState(carouselData)
  }

  leftClick = () => {
    this.setState(prevState => {
      if(prevState.selectedImg === 0){
        return {
          selectedImg: prevState.carouselData.length - 1
        }
      }
      return {
        selectedImg: prevState.selectedImg - 1
      }
    })
  }

  rightClick = () => {
    this.setState(prevState => {
      if(prevState.selectedImg === prevState.carouselData.length - 1){
        return {
          selectedImg: 0
        }
      }
      return {
        selectedImg: prevState.selectedImg + 1
      }
    })
  }

  selectedImage = () => {
    return <img src={this.state.carouselData[this.state.selectedImg]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}