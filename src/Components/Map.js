import React from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: {
        latitude: this.props.latitude,
        longitude: this.props.longitude,
      },
      markers: [
        {
          coordinates:
            {
              latitude: this.props.latitude,
              longitude: this.props.longitude,
            },
        },
        {
          coordinates:
            {
              latitude: this.props.latitude1,
              longitude: this.props.longitude1,
            },
        },
      ],
    };
  }

  /* eslint no-unused-expressions: "off" */
  renderMapMarker() {
    if (this.props.latitude1) {
      return this.state.markers.map((marker, index) => {
        return (
          <MapView.Marker
            key={index}
            coordinate={marker.coordinates}
          >
            <Icon name="map-marker" size={40} color="red" />
          </MapView.Marker>
        );
      });
    }
    if (!this.props.latitude1) {
      return (
        <MapView.Marker
          coordinate={this.state.marker}
        >
          <Icon name="map-marker" size={40} color="red" />
        </MapView.Marker>
      );
    }
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
