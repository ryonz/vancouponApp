import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox';
import { expo } from '../../app.json';
import Header from '../Components/Header';
import HelpModalAboutThisApp from '../Elements/Help/HelpModalAboutThisApp';
import HelpModalAboutJpcanada from '../Elements/Help/HelpModalAboutJpcanada';
import HelpModalAboutRegulation from '../Elements/Help/HelpModalAboutRegulation';
import { isiPhoneSE } from '../lib/windowsize';

const HelpLists = [
  { name: 'アプリについて', navigationLink: '' },
  { name: '運営会社について', navigationLink: '' },
  { name: '利用規約', navigationLink: '' },
  { name: 'アプリのバージョン', navigationLink: '' },
];

const HEIGHT = Dimensions.get('window').height;

class Help extends React.Component {
  state = {
    modalVisible0: false,
    modalVisible1: false,
    modalVisible2: false,
  }

  renderHelpLists() {
    return HelpLists.map((value, index) => {
      if (index !== 3) {
        return (
          <TouchableOpacity
            key={index}
            style={styles.helpListsBox}
            onPress={() => {
              if (index === 0) {
                this.setState({ modalVisible0: true });
              } else if (index === 1) {
                this.setState({ modalVisible1: true });
              } else if (index === 2) {
                this.setState({ modalVisible2: true });
              }
            }}
          >
            <Text style={styles.helpListText}>
              {value.name}
            </Text>
            <Icon name="chevron-right" style={styles.helpRightIcon} />
          </TouchableOpacity>
        );
      } //以下アプリのバージョン
      return (
        <View
          key={index}
          style={styles.helpListsBox}
        >
          <Text style={styles.helpListText}>
            {value.name}
          </Text>
          <Text style={styles.appVersion}>
            {expo.version}
          </Text>
        </View>
      );
    });
  }

  render() {
    const { modalVisible0, modalVisible1, modalVisible2 } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation}>
          ヘルプ
        </Header>
        {this.renderHelpLists()}

        <Modal
          style={styles.generalModalBox}
          isOpen={modalVisible0}
          swipeArea={100}
          onBackdropPress={() => { this.setState({ modalVisible0: false }); }}
          onClosed={() => { this.setState({ modalVisible0: false }); }}
        >
          <HelpModalAboutThisApp>
            {HelpLists[0].name}
          </HelpModalAboutThisApp>
        </Modal>

        <Modal
          style={styles.generalModalBox}
          isOpen={modalVisible1}
          swipeArea={100}
          onBackdropPress={() => { this.setState({ modalVisible1: false }); }}
          onClosed={() => { this.setState({ modalVisible1: false }); }}

        >
          <HelpModalAboutJpcanada>
            {HelpLists[1].name}
          </HelpModalAboutJpcanada>
        </Modal>

        <Modal
          style={styles.generalModalBox}
          isOpen={modalVisible2}
          swipeArea={100}
          onBackdropPress={() => { this.setState({ modalVisible2: false }); }}
          onClosed={() => { this.setState({ modalVisible2: false }); }}
        >
          <HelpModalAboutRegulation>
            {HelpLists[2].name}
          </HelpModalAboutRegulation>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  helpListsBox: {
    flex: 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070',
    marginTop: 20,
  },
  helpListText: {
    fontSize: isiPhoneSE() ? 12 : 15,
    color: '#707070',
    paddingLeft: '5%',
  },
  helpRightIcon: {
    position: 'absolute',
    right: '6%',
    width: 10,
  },
  appVersion: {
    position: 'absolute',
    right: '45%',
    fontSize: 15,
    color: '#707070',
  },
  generalModalBox: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    marginTop: HEIGHT * 0.07,
    borderRadius: 15,
  },
});

export default Help;
