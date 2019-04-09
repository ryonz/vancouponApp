import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  Image,
  Modal,
} from 'react-native';
import { Button } from 'react-native-elements';
import Map from './Map';
import CouponModalOnce from './CouponModals/CouponModalOnce';
import CouponModalRepetition from './CouponModals/CouponModalRepetition';
import CouponModalPoint from './CouponModals/CouponModalPoint';
import QrcodeReader from './QrcodeReader';

class ShopModal extends React.Component {
  state = {
    QRcodeScannerModalStatus: false,
    detailTimeModal: false,
  }

  onPressDetailTime() {
    const { detailTimeModal } = this.state;
    if (!detailTimeModal) {
      this.setState({ detailTimeModal: true });
    } else if (detailTimeModal) {
      this.setState({ detailTimeModal: false });
    }
  }

  handleOpenQRcodeScaner = () => {
    this.setState({ QRcodeScannerModalStatus: true });
  }

  handleLikeButton() {
    return (
      <Image
        style={styles.likeButton}
        source={require('../../assets/Images/Icons/like.png')}
      />
    );
  }

  handleCouponModal() {
    return <CouponModalPoint />;
    // return <CouponModalRepetition />;
    // return <CouponModalOnce />;
  }

  //曜日ごとに表示する時間帯を変更

  renderDetailTime() {
    const { value } = this.props.navigation.state.params;
    const date = new Date();
    const dayOfWeek = date.getDay();
    console.log(dayOfWeek);
    if (dayOfWeek === 0) {
      return <Text style={styles.detailTextTime}>{value.time0}</Text>;
    } if (dayOfWeek === 1) {
      return <Text style={styles.detailTextTime}>{value.time1}</Text>;
    } if (dayOfWeek === 2) {
      return <Text style={styles.detailTextTime}>{value.time2}</Text>;
    } if (dayOfWeek === 3) {
      return <Text style={styles.detailTextTime}>{value.time3}</Text>;
    } if (dayOfWeek === 4) {
      return <Text style={styles.detailTextTime}>{value.time4}</Text>;
    } if (dayOfWeek === 5) {
      return <Text style={styles.detailTextTime}>{value.time5}</Text>;
    } if (dayOfWeek === 6) {
      return <Text style={styles.detailTextTime}>{value.time6}</Text>;
    }
  }

  renderDetailTimeModal() {
    const { detailTimeModal } = this.state;
    const { value } = this.props.navigation.state.params;
    return (
      <Modal
        style={styles.detailTimeModalBox}
        visible={detailTimeModal}
        transparent
      >
        <View style={styles.detailTimeModal}>
          <View style={styles.detailTimeModalTextBox}>
            <Text style={styles.detailTimeModalText}>営業時間</Text>
            <Text style={styles.detailTimeModalText}>{value.time0}</Text>
            <Text style={styles.detailTimeModalText}>{value.time1}</Text>
            <Text style={styles.detailTimeModalText}>{value.time2}</Text>
            <Text style={styles.detailTimeModalText}>{value.time3}</Text>
            <Text style={styles.detailTimeModalText}>{value.time4}</Text>
            <Text style={styles.detailTimeModalText}>{value.time5}</Text>
            <Text style={styles.detailTimeModalText}>{value.time6}</Text>
          </View>

          <View style={styles.detailTimeModalButtonBox}>
            <Button
              title="閉じる"
              onPress={() => { this.setState({ detailTimeModal: false }); }}
            />
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const {
      QRcodeScannerModalStatus,
    } = this.state;

    const { value } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <View style={styles.backgroundBox}>

            <View style={styles.mainImageBox}>
              <Image
                style={styles.mainImage}
                source={{ uri: value.mainImageUrl }}
              />
            </View>
            <View style={styles.titleBox}>
              <View style={styles.titleBoxFirstLine}>
                <Text style={styles.shopTitle}>{value.name}</Text>
                <Text style={styles.shopTags}>{value.genreTag}</Text>
                <Text style={styles.shopTags}>{value.couponTag}</Text>
              </View>

              <TouchableOpacity
                style={styles.likeButtonBox}
              >
                {this.handleLikeButton()}
              </TouchableOpacity>

              <View style={styles.titleBoxSecondLine}>
                <Text style={styles.shortDescription}>{value.shortDescription}</Text>
              </View>
            </View>

            <Text style={styles.boxTitle}>詳細</Text>

            <View style={styles.detailBox}>
              <View style={styles.detailEachBox}>
                <Image style={styles.iconImage} source={require('../../assets/Images/Icons/star.png')} />
                <Text style={styles.detailText}>{value.catchCopy}</Text>
              </View>

              <View style={styles.detailEachBoxUnderBar} />

              <TouchableOpacity style={styles.detailEachBox}>
                <Image style={styles.iconImage} source={require('../../assets/Images/Icons/auricular-phone-symbol-in-a-circle.png')} />
                <Text style={styles.detailText}>{value.phoneNumber}</Text>
              </TouchableOpacity>

              <View style={styles.detailEachBoxUnderBar} />

              <TouchableOpacity
                style={styles.detailEachBox}
                onPress={() => { this.onPressDetailTime(); }}
              >
                <Image
                  style={styles.iconImage}
                  source={require('../../assets/Images/Icons/clock-circular-outline.png')}
                />
                {this.renderDetailTime()}
              </TouchableOpacity>

              <View style={styles.detailEachBoxUnderBar} />

              <TouchableOpacity style={styles.detailEachBox}>
                <Image style={styles.iconImage} source={require('../../assets/Images/Icons/led-monitor.png')} />
                <Text style={styles.detailText}>{value.webPage}</Text>
              </TouchableOpacity>
            </View>

            {/* 地図 */}
            <View style={styles.mapContainerBox}>

              <Map
                style={styles.mapContainer}
                latitude={value.latitude}
                longitude={value.longitude}
                // latitudeDelta={value.map.latitudeDelta}
                // longitudeDelta={value.map.longitudeDelta}
              />

              <View style={styles.addressContainerBox}>
                <View style={styles.iconAndAddressBox}>
                  <Image
                    style={styles.mapIconImage}
                    source={require('../../assets/Images/Icons/placeholder-filled-point.png')}
                  />
                  <Text style={styles.addressText}>{value.address}</Text>
                </View>
              </View>
            </View>


            <Text style={styles.boxTitle}>お店の紹介</Text>


            <View style={styles.shopDescriptionBox}>
              <Text style={styles.shopDescription}>{value.longDescription}</Text>
            </View>

            <Text style={styles.boxTitle}>クーポン利用の注意点</Text>

            <View style={styles.noteAboutCouponBox}>
              <Text style={styles.noteAboutCouponText}>{value.note1}</Text>
              <Text style={styles.noteAboutCouponText}>{value.note2}</Text>
              <Text style={styles.noteAboutCouponText}>{value.note3}</Text>
              <Text style={styles.noteAboutCouponText}>{value.note4}</Text>
            </View>

            <Text style={styles.boxTitle}>SNS</Text>

            <View style={styles.snsBox}>
              <View style={styles.eachSnsBox}>
                <Image style={styles.iconImage} source={require('../../assets/Images/Icons/facebook.png')} />
                <Text style={styles.snsText}>{value.facebook}</Text>
              </View>

              <View style={styles.detailEachBoxUnderBar} />

              <View style={styles.eachSnsBox}>
                <Image style={styles.iconImage} source={require('../../assets/Images/Icons/twitter.png')} />
                <Text style={styles.snsText}>{value.twitter}</Text>
              </View>

              <View style={styles.detailEachBoxUnderBar} />

              <View style={styles.eachSnsBox}>
                <Image style={styles.iconImage} source={require('../../assets/Images/Icons/instagram.png')} />
                <Text style={styles.snsText}>{value.instagram}</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.couponModalBox}
          onPress={this.handleOpenQRcodeScaner}
        >
          {this.handleCouponModal()}
        </TouchableOpacity>

        <Modal
          visible={QRcodeScannerModalStatus}
        >
          <QrcodeReader />
        </Modal>

        {this.renderDetailTimeModal()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  backgroundBox: {
    backgroundColor: '#F0F0F0',
  },
  mainImageBox: {
    width: '100%',
    height: 270,
  },
  mainImage: {
    width: '100%',
    height: 270,
  },
  titleBox: {
    width: '100%',
    height: 105,
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  titleBoxFirstLine: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  shopTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shopTags: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    backgroundColor: '#BCB8B8',
    paddingTop: 5,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 8,
  },
  likeButtonBox: {
    position: 'absolute',
    right: 18,
    width: 18,
    height: 18,
    marginTop: 18,
  },
  likeButton: {
    width: 18,
    height: 18,
  },
  titleBoxSecondLine: {
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  shortDescription: {
    color: '#707070',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 15,
  },
  boxTitle: {
    fontSize: 10,
    color: '#707070',
    marginTop: 9,
    marginLeft: 16,
    marginBottom: 4,
  },
  detailBox: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  detailEachBox: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    paddingTop: 11,
  },
  detailEachBoxTime: {
    width: '100%',
    height: 'auto',
    paddingTop: 11,
  },
  iconImage: {
    width: 10,
    height: 10,
    marginLeft: 9,
  },
  detailText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#707070',
    marginLeft: 4,
  },
  detailTextTime: {
    fontSize: 10,
    fontWeight: '500',
    color: '#1111cc',
    textDecorationLine: 'underline',
    marginLeft: 4,
  },
  detailEachBoxUnderBar: {
    width: '96%',
    height: 0.5,
    backgroundColor: '#707070',
    marginLeft: 9,
  },
  mapContainerBox: {
    alignItems: 'center',
    width: '100%',
    //height: 172,
    marginTop: 8,
    marginBottom: 9,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  mapContainer: {
    width: '93%',
    height: 172,
    borderWidth: 0.3,
    borderColor: '#707070',
    borderRadius: 8,
  },
  addressContainerBox: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '93%',
    height: 34,
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#707070',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  iconAndAddressBox: {
    flexDirection: 'row',
  },
  mapIconImage: {
    width: 10,
    height: 10,
    marginTop: 12,
    marginRight: 4,
  },
  addressText: {
    fontSize: 9,
    color: '#707070',
    fontWeight: 'bold',
    marginTop: 12,
  },
  shopDescriptionBox: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#707070',
    padding: 16,
  },
  shopDescription: {
    fontSize: 9,
    color: '#707070',
    fontWeight: '500',
    lineHeight: 15,
  },
  noteAboutCouponBox: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#707070',
    padding: 16,
  },
  noteAboutCouponText: {
    fontSize: 9,
    color: '#707070',
    fontWeight: '500',
    marginBottom: 5,
  },
  snsBox: {
    width: '100%',
    height: 'auto',
    marginBottom: 200,
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderColor: '#707070',
  },
  eachSnsBox: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    paddingTop: 11,
  },
  snsText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#707070',
    marginLeft: 4,
  },
  couponModalBox: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    height: 120,
    alignItems: 'center',
  },
  detailTimeModal: {
    position: 'absolute',
    alignItems: 'center',
    bottom: Dimensions.get('window').height * 0.4,
    marginLeft: Dimensions.get('window').width * 0.2,
    width: '60%',
    height: Dimensions.get('window').width * 0.8,
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  detailTimeModalTextBox: {
    alignItems: 'center',
    margin: 15,
  },
  detailTimeModalText: {
    fontWeight: '400',
    paddingTop: 5,
  },
  detailTimeModalButtonBox: {
    paddingTop: 20,
  },
});

export default ShopModal;


