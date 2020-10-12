import React from 'react';
import { TileLayer, FeatureGroup, Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
 
const _onEdited = (e) => {

    let numEdited = 0;
    e.layers.eachLayer( (layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    this._onChange();
  }

 const  _onCreated = (e) => {
    let type = e.layerType;
    let layer = e.layer;
    if (type === 'marker') {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    }
    else {
      console.log("_onCreated: something else created:", type, e);
    }
    // Do whatever else you need to. (save to db; etc)

    this._onChange();
  }

  const _onDeleted = (e) => {

    let numDeleted = 0;
    e.layers.eachLayer( (layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    this._onChange();
  }

  const _onMounted = (drawControl) => {
    console.log('_onMounted', drawControl);
  }

  const _onEditStart = (e) => {
    console.log('_onEditStart', e);
  }

  const _onEditStop = (e) => {
    console.log('_onEditStop', e);
  }

  const _onDeleteStart = (e) => {
    console.log('_onDeleteStart', e);
  }

  const _onDeleteStop = (e) => {
    console.log('_onDeleteStop', e);
  }




const LeafletDraw = (props) => (

  <FeatureGroup>
    <EditControl
      position='topright'
      onEdited={_onEdited}
      onCreated={_onCreated}
      onDeleted={_onDeleted}
      draw={{
        rectangle: false
      }}
    />

{
    props.accidents.map(accidents => {
       
        console.log(accidents.centerLongitude.toString() + ',' + accidents.centerLatitude.toString());
       return (
        <Circle center={[accidents.centerLongitude, accidents.centerLatitude]} radius={accidents.radius * 111} key={accidents.centerLongitude.toString() + ',' + accidents.centerLatitude.toString()}/>

         )
        })
       }
  </FeatureGroup>
);

export default LeafletDraw;