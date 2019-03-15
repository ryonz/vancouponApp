import React from 'react';
//import { MapView } from 'expo';
import MapView from 'react-native-maps';

class Map extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <MapView
        style={style}
        initialRegion={{
          latitude: 49.286352,
          longitude: -123.127898,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 49.286352,
            longitude: -123.127898,
          }}
        />
      </MapView>
    );
  }
}

export default Map;
