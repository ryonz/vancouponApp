import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Modal,
  Image,
} from 'react-native';

class ShopModal extends React.Component {
  state = {
    mainImage: require('../../assets/Images/Home/HomeHeaderImage1024_683.jpg'),
    title: 'コンビニ屋',
    genreTag: '#ショッピング',
    couponTag: '#クーポン有り',
    shortDescription: 'みんなが集まり安い空間づくりを目指しています。スタッフは全員日本人！困ったことがあればお気軽に聞いてください。',
    catchCopy: '日本商品のコンビニエンスストア',
    phoneNumber: '604-682-3634',
    time: '11:00~24:00',
    webPage: 'konbiniya.com',
    longDescription: 'ロブソン通りに面したコンビニ屋には「カナダでは手に入らないかも」と思うような日本の食品や日用品がずらり。お菓子屋インスタントフード、調味料、飲料など約1万を超える品揃えで、いわば日本のデパート。他店で取り扱いのない新商品なども毎月入荷し日替わり週替わりセールや特売品があるためウェブでチェック！',
    note1: '・＄10以上のお買い上げでスタンプ一個',
    note2: '・一部対象外の商品（タバコ、テレフォンカードなど）有り',
    note3: '・他の特典とは併用できません',
    note4: '',
    facebook: 'Konbiniya Japan Center',
    twitter: '@konbiniya',
    instagram: '#Konbiniya',
  }

  handleLikeButton() {
    return (
      <Image
        style={styles.likeButton}
        source={require('../../assets/Images/Icons/like.png')}
      />
    );
  }

  render() {
    const {
      mainImage,
      title,
      genreTag,
      couponTag,
      shortDescription,
      catchCopy,
      phoneNumber,
      time,
      webPage,
      longDescription,
      note1,
      note2,
      note3,
      note4,
      facebook,
      twitter,
      instagram,
    } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainImageBox}>
          <Image
            style={styles.mainImage}
            source={mainImage}
          />
        </View>
        <View style={styles.titleBox}>
          <View style={styles.titleBoxFirstLine}>
            <Text style={styles.shopTitle}>{title}</Text>
            <Text style={styles.shopTags}>{genreTag}</Text>
            <Text style={styles.shopTags}>{couponTag}</Text>
          </View>

          <TouchableOpacity
            style={styles.likeButtonBox}
          >
            {this.handleLikeButton()}
          </TouchableOpacity>

          <View style={styles.titleBoxSecondLine}>
            <Text style={styles.shortDescription}>{shortDescription}</Text>
          </View>
        </View>

        <Text style={styles.boxTitle}>詳細</Text>

        <View style={styles.detailBox}>
          <View style={styles.detailEachBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/star.png')} />
            <Text style={styles.detailText}>{catchCopy}</Text>
          </View>

          <View style={styles.detailEachBoxUnderBar} />

          <TouchableOpacity style={styles.detailEachBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/auricular-phone-symbol-in-a-circle.png')} />
            <Text style={styles.detailText}>{phoneNumber}</Text>
          </TouchableOpacity>

          <View style={styles.detailEachBoxUnderBar} />

          <View style={styles.detailEachBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/clock-circular-outline.png')} />
            <Text style={styles.detailText}>{time}</Text>
          </View>

          <View style={styles.detailEachBoxUnderBar} />

          <TouchableOpacity style={styles.detailEachBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/led-monitor.png')} />
            <Text style={styles.detailText}>{webPage}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.boxTitle}>お店の紹介</Text>

        <View style={styles.shopDescriptionBox}>
          <Text style={styles.shopDescription}>{longDescription}</Text>
        </View>

        <Text style={styles.boxTitle}>クーポン利用の注意点</Text>

        <View style={styles.noteAboutCouponBox}>
          <Text style={styles.noteAboutCouponText}>{note1}</Text>
          <Text style={styles.noteAboutCouponText}>{note2}</Text>
          <Text style={styles.noteAboutCouponText}>{note3}</Text>
          <Text style={styles.noteAboutCouponText}>{note4}</Text>
        </View>

        <Text style={styles.boxTitle}>SNS</Text>

        <View style={styles.snsBox}>
          <View style={styles.eachSnsBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/facebook.png')} />
            <Text style={styles.snsText}>{facebook}</Text>
          </View>

          <View style={styles.detailEachBoxUnderBar} />

          <View style={styles.eachSnsBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/twitter.png')} />
            <Text style={styles.snsText}>{twitter}</Text>
          </View>

          <View style={styles.detailEachBoxUnderBar} />

          <View style={styles.eachSnsBox}>
            <Image style={styles.iconImage} source={require('../../assets/Images/Icons/instagram.png')} />
            <Text style={styles.snsText}>{instagram}</Text>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    height: 125,
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
  detailEachBoxUnderBar: {
    width: '96%',
    height: 0.5,
    backgroundColor: '#707070',
    marginLeft: 9,
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
});

export default ShopModal;
