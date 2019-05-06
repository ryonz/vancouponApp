import React from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          coordinates:
            {
              latitude: this.props.latitude,
              longitude: this.props.longitude,
            },
        },
      ],
    };
  }

  /* eslint no-unused-expressions: "off" */
  renderMapMarker() {
    return this.state.markers.map((marker, index) => {
      <MapView.Marker
        index={index}
        coordinate={marker.coordinates}
      >
        <Icon name="map-marker" size={40} color="red" />
      </MapView.Marker>;
    });
  }

  render() {
    const { style } = this.props;
    const { latitude, longitude } = this.props;
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
        {this.renderMapMarker()}
      </MapView>
    );
  }
}

export default Map;
