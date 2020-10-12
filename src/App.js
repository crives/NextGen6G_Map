import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Map from './components/Map1'

class App extends Component {
  state = {
    accidents: []
  }
  
  async componentDidMount() {
    const res = await axios.get('http://localhost:8080/highaccidentzone/all')
  //  const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
    //  params: {
      //  "$limit": 500,
      //  "$$app_token": 'R88KnwGQbocOcO8u6tDmXdbba'
    //  }
    const accidents = res.data;
    this.setState({accidents: accidents });
   

  //  const accidents =
  //  [
  //   {
  //     center_lng: -122.306670773946,
  //     center_lat: 47.5901867011495,
  //     radius: 0.00934518667024792
  //   },
  //   {
  //     center_lng: -122.284728388889,
  //     center_lat: 47.5901612777778,
  //     radius: 0.00869074066690479
  //   },
  //   {
  //     center_lng: -122.319277761905,
  //     center_lat: 47.5760640952381,
  //     radius: 0.00617889594615819
  //   },
  //  ]
  };

  render() {
   return (
  <Map accidents={this.state.accidents}/>
   );
  }
  }
  export default App;