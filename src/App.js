import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Map from './components/Map1'

class App extends Component {
  state = {
    accidents: []
  }
  
  async componentDidMount() {
    const res = await axios.get('http://localhost:8080/highaccidentzone/all')

    const accidents = res.data;
    this.setState({accidents: accidents });
  
  };

  render() {
   return (
  <Map accidents={this.state.accidents}/>
   );
  }
  }
  export default App;