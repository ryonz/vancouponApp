import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

class HelpModalAboutThisApp extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.helpModalHeaderTitleBox}>
          <Text style={styles.helpModalHeaderTitle}>
            {children}
          </Text>
        </View>
        <ScrollView style={styles.generalModalViewBox}>
          <View style={styles.modalTextBox}>
            <Text style={styles.modalText}>
              バンクーバー最大規模の留学エージェントであるJPCANADAが運営するクーポンアプリ「Vancoupon（バンクーポン）」です。
              {"\n"}
              {"\n"}
              バンクーバーに滞在している方々が少しでもお得にバンクーバーを楽しめるようにとの思いで運営されています。
              {"\n"}
              {"\n"}
              お店の情報なども随時追加予定ですので、是非楽しみにしていて下さい。
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              JPCANDA留学センター
            </Text>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    //height: '80%',
  },
  modalTextBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 100,
    paddingBottom: 20,
  },
  modalText: {
    width: '80%',
  },
  helpModalHeaderTitleBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#F9F9F9',
    borderBottomWidth: 0.5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
  },
  helpModalHeaderTitle: {
    color: '#707070',
    fontSize: 15,
    fontWeight: '900',
    paddingTop: '4%',
  },
});

export default HelpModalAboutThisApp;
