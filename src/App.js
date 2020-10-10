import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Map from './components/Map1'

class App extends Component {
  state = {
    accidents: [],
  }
  
  async componentDidMount() {
   const res = await axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
     params: {
       "$limit": 500,
       "$$app_token": 'R88KnwGQbocOcO8u6tDmXdbba'
     }
   })
   const incidents = res.data;
   this.setState({incidents: incidents });
  };
  render() {
   return (
  <Map incidents={this.state.incidents}/>
   );
  }
  }
  export default App;