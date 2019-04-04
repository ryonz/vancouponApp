import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modalbox';

const HEIGHT = Dimensions.get('window').height;

class HelpModalAboutRegulation extends React.Component {
  render() {
    const {
      isVisible,
      onBackdropPress,
      children,
    } = this.props;

    return (
      <View style={styles.container}>
        <Modal
          isVisible={isVisible}
          onBackdropPress={onBackdropPress}
          style={styles.generalModalBox}
        >
          <View style={styles.helpModalHeaderTitleBox}>
            <Text style={styles.helpModalHeaderTitle}>
              {children}
            </Text>
          </View>
          <ScrollView style={styles.generalModalViewBox}>
            <Text>cccc</Text>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  generalModalBox: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    marginTop: HEIGHT * 0.07,
    marginBottom: HEIGHT * 0.07,
    borderRadius: 15,
  },
  generalModalViewBox: {
    width: '100%',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  helpModalHeaderTitleBox: {
    width: '100%',
    height: '5%',
    backgroundColor: '#F9F9F9',
    borderBottomWidth: 0.2,
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

export default HelpModalAboutRegulation;
