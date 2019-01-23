import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { expo } from '../../app.json';
import Header from '../Components/Header';
import HelpModalAboutThisApp from '../Elements/Help/HelpModalAboutThisApp';
import HelpModalAboutJpcanada from '../Elements/Help/HelpModalAboutJpcanada';
import HelpModalAboutRegulation from '../Elements/Help/HelpModalAboutRegulation';

const HelpLists = [
  { name: 'アプリについて', navigationLink: '' },
  { name: '運営会社について', navigationLink: '' },
  { name: '利用規約', navigationLink: '' },
  { name: 'アプリのバージョン', navigationLink: '' },
];

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
          <Text style={styles.appVersion}>{expo.version}</Text>
        </View>
      );
    });
  }

  render() {
    const { modalVisible0, modalVisible1, modalVisible2 } = this.state;
    return (
      <View style={styles.container}>
        <Header>ヘルプ</Header>
        {this.renderHelpLists()}
        <HelpModalAboutThisApp
          isVisible={modalVisible0}
          onBackdropPress={() => { this.setState({ modalVisible0: false }); }}
        >
          {HelpLists[0].name}
        </HelpModalAboutThisApp>

        <HelpModalAboutJpcanada
          isVisible={modalVisible1}
          onBackdropPress={() => { this.setState({ modalVisible1: false }); }}
        >
          {HelpLists[1].name}
        </HelpModalAboutJpcanada>

        <HelpModalAboutRegulation
          isVisible={modalVisible2}
          onBackdropPress={() => { this.setState({ modalVisible2: false }); }}
        >
          {HelpLists[2].name}
        </HelpModalAboutRegulation>

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
  },
  helpListText: {
    fontSize: 15,
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
    right: '50%',
    fontSize: 15,
    color: '#707070',
  },
});

export default Help;
