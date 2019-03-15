import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

const { width, height } = Dimensions.get('window');

class QrcodeReader extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    Alert.alert(`Bar code with ${type} and data ${data} has been scanned!`);
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>

        <View style={styles.QrcoderHeader}>
          <TouchableOpacity style={styles.QrcodeHeaderBackBottom}>
            <Text>戻る</Text>
          </TouchableOpacity>
        </View>

        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={styles.barcodeScanner}
        >
          <View style={styles.barcodeLayerTop} />
        </BarCodeScanner>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  QrcoderHeader: {
    width: '100%',
    height: height * 0.1,
    alignItems: 'center',
  },
  QrcodeHeaderBackBottom: {

  },
  barcodeScanner: {
    width: '100%',
    height: '80%',
  },
  barcodeLayerTop: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
  },
});

export default QrcodeReader;