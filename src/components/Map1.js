import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Map1 extends Component {
    state = {
        lat: 37.7749,
        lng: -122.4194,
        zoom: 13,
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
               {
                 this.props.accidents.map(accidents => {
                      const point = [accidents['centerLongitude'],                 accidents['centerLatitude']]
       
       console.log(point);
       return (
           <Marker position={point} key={accidents['Center_Lat']} >
                <Popup>
                   {/* <span>ADDRESS: {accidents['address']}, {incident['city']} - {incident['zip_code']}</span> */}
                 <br/>
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