import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { observer } from 'mobx-react/native';
import { BarCodeScanner, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRcode from '../Stores/QRcodeStore';


const { width, height } = Dimensions.get('window');

@observer
class QrcodeReader extends React.Component {
  state = {
    hasCameraPermission: null,
    couponType: this.props.couponType,
    UniqueQrUrl: this.props.qrUrl,
    lastScannedUrl: '',
  }

  //カメラへのアクセス許可
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  //QRコードの読み取り処理
  handleBarCodeScanned = ({ data }) => {
    if (data !== this.state.lastScannedUrl) {
      this.setState({ lastScannedUrl: data });
      this.checkQrUrl(data);
    } else if (data === this.state.lastScannedUrl) {
      return;
    }
  }

  //QRコードがショップに対応したものかどうか判定
  async checkQrUrl(data) {
    // クーポンタイプが１回きりの場合
    if (this.state.couponType === 'once') {
      try {
        if (data === this.state.UniqueQrUrl) {
          await AsyncStorage.setItem(`${data}`, 'false');
          // await QRcode.changeCouponModalStatus();
          Alert.alert('一回切りのクーポンを使用しました');
          console.log(QRcode.couponModalStatus);
        } else if (data !== this.state.UniqueQrUrl) {
          Alert.alert('QRコードが違います');
        } else {
          Alert.alert('予期せぬ障害が発生しました。前画面に戻って再度お試しください');
        }
      } catch (error) {
        console.log(error);
      }
    }
    //クーポンタイプが「何度でも」の場合
    if (this.state.couponType === 'repetition ') {
      if (data === this.state.UniqueQrUrl) {
        Alert.alert('繰り返しクーポンを使用しました');
      } else if (data !== this.state.UniqueQrUrl) {
        Alert.alert('QRコードが違います');
      } else {
        Alert.alert('予期せぬ障害が発生しました。前画面に戻って再度お試しください');
      }
    }
    //クーポンタイプが「Point」の場合
    if (this.state.couponType === 'point') {
      if (data === this.state.UniqueQrUrl) {
        Alert.alert('クーポンを使用しました');
      } else if (data !== this.state.UniqueQrUrl) {
        Alert.alert('QRコードが違います');
      } else {
        Alert.alert('予期せぬ障害が発生しました。前画面に戻って再度お試しください');
      }
    }
  }

  renderQrcodeScannerView() {
    return (
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={styles.barcodeScanner}
      >
        <View style={styles.QrcoderFooter}>
          <TouchableOpacity
            style={styles.backButtonBox}
            onPress={this.props.onPress}
          >
            <View style={styles.backButton}>
              <Icon name="chevron-left" style={styles.backButtonIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </BarCodeScanner>
    );
  }

  render() {
    const {
      hasCameraPermission,
    } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        {this.renderQrcodeScannerView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  QrcoderFooter: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 50,
    height: 50,
  },
  barcodeScannerBox: {
    width: '100%',
    height: '100%',
  },
  barcodeScanner: {
    width: '100%',
    height: '100%',
  },
  barcodeLayerTop: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
  },
  backButtonBox: {
    // position: 'absolute',
    // top: 50,
    // left: 20,
    width: 50,
    height: 50,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(111,111,111,0.2)',

  },
  backButtonIcon: {
    fontSize: 23,
    color: '#fff',
    marginTop: 15,
    marginLeft: 14,
  },
});

export default QrcodeReader;
