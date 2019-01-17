import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { expo } from '../../app.json';
import Header from '../Components/Header';

const HelpLists = [
  { name: 'アプリについて', navigationLink: '' },
  { name: '運営会社について', navigationLink: '' },
  { name: '利用規約', navigationLink: '' },
  { name: 'アプリのバージョン', navigationLink: '' },
];

class Help extends React.Component {
  renderHelpLists() {
    return HelpLists.map((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.helpListsBox}
        >
          <Text style={styles.helpListText}>
            {value.name}
          </Text>
          {
            index !== 3 ? <Icon name="chevron-right" style={styles.helpRightIcon} />
              : <Text style={styles.appVersion}>{expo.version}</Text>
          }
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>ヘルプ</Header>
        {this.renderHelpLists()}
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
