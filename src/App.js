import './App.css';
import navBar from './Navbar/navBar';
import LeftComponent from './ProductPreview/LeftCompnent';
import RightComponent from './ProductDetails/RightComponent';
import React from 'react';
import ProductData from './ProductData';

class App extends React.Component {
  state = {
    productData : ProductData,
    currentLeftImage:'https://imgur.com/iOeUBV7.png',
    showHeartBit:false
  }

  onColoroptionClick = (pos)=>{
    
    const updatedLeftImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({
      currentLeftImage:updatedLeftImage
    })
    
  }
  onFeatureButtonClick = (pos)=>{
    console.log(this.state.showHeartBit)
    const updatedShowHeartBit = pos===1?true:false;
    this.setState({
      showHeartBit:updatedShowHeartBit
    })
    console.log(this.state.showHeartBit)
  }

  render(){  
    return (
      <div className="App">
        {navBar()}
        <div className="split left">
          <div className="centered">     
            <div className="leftImage"><LeftComponent  currentLeftImage={this.state.currentLeftImage} showHeartBit = {this.state.showHeartBit}/></div>
          </div>
        </div>

        <div className="split right">
          <div className="centered">     
            <RightComponent data={this.state.productData}  onFeatureButtonClick = {this.onFeatureButtonClick} onColoroptionClick = {this.onColoroptionClick} />
          </div>
        </div>
      </div>

    );}
}

export default App;
