import React from 'react';
import ShopItem from '../ShopItem';
import './main.css'
class App extends React.Component {
  constructor() {
    super()
    this.item = {
      brand: 'Tiger of Sweden',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    }
  }
  render() {
    return (
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItem item={this.item} />
        </div>
      </div>
    )
  }
}
export default App