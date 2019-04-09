import React from 'react';
//import { MapView } from 'expo';
import MapView from 'react-native-maps';

class Map extends React.Component {
  render() {
    const { style, latitude, longitude } = this.props;
    return (
      <MapView
        style={style}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
    );
  }
}

export default Map;
