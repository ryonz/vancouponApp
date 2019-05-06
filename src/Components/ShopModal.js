import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  Modal,
} from 'react-native';
import { observer } from 'mobx-react/native';
import { Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Map from './Map';
import CouponModalOnce from './CouponModals/CouponModalOnce';
import CouponModalRepetition from './CouponModals/CouponModalRepetition';
import CouponModalPoint from './CouponModals/CouponModalPoint';
import QrcodeReader from './QrcodeReader';
import QRcode from '../Stores/QRcodeStore';

@observer
class ShopModal extends React.Component {
  state = {
    detailTimeModal: false,
    qrcodeReaderModalVisible: false,
    couponModalStatus: QRcode.couponModalStatus,
    asyncStoragevalue: '',
    noImage: require('../../assets/Images/Images/noImage.001.jpeg'),
  }

  async componentDidMount() {
    const { value } = this.props.navigation.state.params;
    const asyncStoragevalue = await AsyncStorage.getItem(`${value.qrcodeUrl}`);
    this.setState({ asyncStoragevalue });
  }

  //営業時間ModalのVisibleの変更
  onPressDetailTime() {
    const { detailTimeModal } = this.state;
    if (!detailTimeModal) {
      this.setState({ detailTimeModal: true });
    } else if (detailTimeModal) {
      this.setState({ detailTimeModal: false });
    }
  }

  //QRコードリーダーModalのVisibleの変更
  handleOpenQrcodeReader() {
    const { qrcodeReaderModalVisible } = this.state;
    if (!qrcodeReaderModalVisible) {
      this.setState({ qrcodeReaderModalVisible: true });
    } else if (qrcodeReaderModalVisible) {
      this.setState({ qrcodeReaderModalVisible: false });
    }
  }

  //お気に入りボタン
  handleLikeButton() {
    return (
      <Image
        style={styles.likeButton}
        source={require('../../assets/Images/Icons/like.png')}
      />
    );
  }

  //クーポンモーダル表示・非表示処理
  handleCouponModal(value) {
    const { couponModalStatus, asyncStoragevalue } = this.state;
    if (value.couponType === 'once') {
      if (couponModalStatus === 'true' && asyncStoragevalue !== 'false') {
        return <CouponModalOnce couponMessage={value.couponMessage} />;
      } if (couponModalStatus === 'false' || asyncStoragevalue === 'false') {
        return;
      }
    }
    if (value.couponType === 'repetition') {
      return <CouponModalRepetition couponMessage={value.couponMessage} />;
    } if (value.couponType === 'point') {
      return <CouponModalPoint couponMessage={value.couponMessage} shopName={value.name} />;
    }
  }

  //前のスクリーンに戻るボタン
  handleBackButton() {
    this.props.navigation.goBack();
  }

  // QRコードリーダーモーダル
  renderQrcodeReaderModal(value) {
    const { qrcodeReaderModalVisible } = this.state;
    if (qrcodeReaderModalVisible) {
      return (
        <Modal
          visible={qrcodeReaderModalVisible}
        >
          <QrcodeReader
            onPress={() => { this.props.navigation.goBack(); }}
            qrUrl={value.qrcodeUrl}
            couponType={value.couponType}
            shopName={value.name}
          />
        </Modal>
      );
    } if (!qrcodeReaderModalVisible) {
      return null;
    }
  }

  //曜日ごとに表示する時間帯を変更
  renderDetailTime(value) {
    const date = new Date();
    const dayOfWeek = date.getDay();
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

  //営業時間表示用モーダル
  renderDetailTimeModal(value) {
    const { detailTimeModal } = this.state;
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

  renderShopTags() {
    const { value } = this.props.navigation.state.params;
    if (value.genreTag && value.couponTag) {
      return (
        <View style={styles.titleBoxFirstLine}>
          {/* お店の名前 */}
          <Text style={styles.shopTitle}>
            {value.name}
          </Text>

          {/* ジャンルタグ */}
          <View style={styles.shopTagsBackground}>
            <Text style={styles.shopTags}>
              {value.genreTag}
            </Text>
          </View>

          {/* クーポンタグ */}
          <View style={styles.shopTagsBackground}>
            <Text style={styles.shopTags}>
              {value.couponTag}
            </Text>
          </View>
        </View>
      );
    } if (value.genreTag && !value.couponTag) {
      return (
        <View style={styles.titleBoxFirstLine}>
          {/* お店の名前 */}
          <Text style={styles.shopTitle}>
            {value.name}
          </Text>

          {/* ジャンルタグ */}
          <View style={styles.shopTagsBackground}>
            <Text style={styles.shopTags}>
              {value.genreTag}
            </Text>
          </View>
        </View>
      );
    } if (!value.genreTag && value.couponTag) {
      return (
        <View style={styles.titleBoxFirstLine}>
          {/* お店の名前 */}
          <Text style={styles.shopTitle}>
            {value.name}
          </Text>

          {/* ジャンルタグ */}
          <View style={styles.shopTagsBackground}>
            <Text style={styles.shopTags}>
              {value.couponTag}
            </Text>
          </View>
        </View>
      );
    }
  }


  render() {
    const { value } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <View style={styles.backgroundBox}>
            <View style={styles.mainImageBox}>
              <Image
                style={styles.mainImage}
                source={!value.mainImageUrl ? this.state.noImage : { uri: value.mainImageUrl }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            <View style={styles.titleBox}>

              {this.renderShopTags()}

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
                {this.renderDetailTime(value)}
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

        {/* クーポンモーダル */}
        <TouchableOpacity
          style={styles.couponModalBox}
          onPress={() => { this.handleOpenQrcodeReader(); }}
        >
          {this.handleCouponModal(value)}
        </TouchableOpacity>

        {/*QRコードリーダーモーダル*/}
 
        {this.renderQrcodeReaderModal(value)}

        {/* バックボタン */}
        <TouchableOpacity
          style={styles.backButtonBox}
          onPress={() => { this.handleBackButton(); }}
        >
          <View style={styles.backButton}>
            <Icon name="chevron-left" style={styles.backButtonIcon} />
          </View>
        </TouchableOpacity>

        {this.renderDetailTimeModal(value)}

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
  backButtonBox: {
    position: 'absolute',
    top: 50,
    left: 20,
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
  shopTagsBackground: {
    backgroundColor: '#BCB8B8',
    borderWidth: 0.1,
    borderRadius: 5,
    marginLeft: 7,
    overflow: 'hidden',
  },
  shopTags: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
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
    height: 'auto',
    borderWidth: 0.4,
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
    paddingBottom: 20,
  },
});

export default ShopModal;
