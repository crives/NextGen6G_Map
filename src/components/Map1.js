import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import LeafletDraw from './LeafletDraw';
import '../index.css';

export default class Map1 extends Component {
    state = {
        lat: 47.5846,
        lng: -122.3036,
        zoom: 14,
    }
    render() {
        return (
           this.props.accidents ?
           <Map 
           center={[this.state.lat, this.state.lng]} 
           zoom={this.state.zoom} 
           style={{ width: '100%', height: '900px'}}>
              <TileLayer
                 attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
            <LeafletDraw accidents= {this.props.accidents} />
            <Marker position={[47.58997, -122.307]} key={'driver'}>
              <Popup>
                  <div>Driver!
                      <br/>
                  </div>
                   {/* <span>ADDRESS: {accidents['address']}, {incident['city']} - {incident['zip_code']}</span> */}
                 {/* <br/> */}
                   {/* <span>BATTALION: {incident['battalion']}</span><br/> */}
                </Popup>
              </Marker>
               {
                 this.props.accidents.map(accidents => {
                      const point = [accidents['centerLongitude'],                 accidents['centerLatitude']]
       
       console.log(point);
       
       
       return (
           <Marker position={point} key={point.toString()} >
                <Popup>
                  <div>High Accident Zone!
                      <br/>
                      Severity Index: 3 - 4 / 4
                  </div>
                   {/* <span>ADDRESS: {accidents['address']}, {incident['city']} - {incident['zip_code']}</span> */}
                 {/* <br/> */}
                   {/* <span>BATTALION: {incident['battalion']}</span><br/> */}
                </Popup>
            </Marker>
      
         )
        })
        }
       </Map>
                :
                'Data is loading...'
        )
    }
 }