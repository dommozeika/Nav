import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SlidingPane from 'react-sliding-pane';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

//var ReactMapboxGl = require("react-mapbox-gl");
//var Layer = ReactMapboxGl.Layer;
//var Feature = ReactMapboxGl.Feature;

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZG9tbW96ZWlrYSIsImEiOiJjam80b3o3ZTUwMWNwM2txbW9lYTEyZHoyIn0.hwLOE0H6nZEWLJPzP_yGEg"
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: -0.481747846041145,
      lng: 51.3233379650232,
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      lat: -0.6,
      lng: 51
    }));
  }

  render() {
    return (
      <div className="App">
     
        <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "100vh",
    width: "100%"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[this.state.lat, this.state.lng]}/>
    </Layer>

    <div className="Dom">
       <button onClick={this.handleClick}>Press</button>
       <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
                title='Hey, it is optional pane title.  I can be React component too.'
                subtitle='Optional subtitle.'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <div>And I am pane content. BTW, what rocks?</div>
                <br />
                <img src='img.png' />
            </SlidingPane>
            <SlidingPane
                isOpen={ this.state.isPaneOpenLeft }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='left'
                width='200px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div>And I am pane content on left.</div>
            </SlidingPane>
    </div>
    
</Map>

   </div>
    );
  }
}

export default App;
