import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class CouponModalRepetition extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rightSideColorBar} />
        <View style={styles.couponRightSideBox}>
          <View style={styles.rightSideTextBox}>
            <Text style={styles.couponTextLeftLine1}>REPEAT</Text>
            <Text style={styles.couponTextLeftLine2}>何度</Text>
            <Text style={styles.couponTextLeftLine3}>でも</Text>
          </View>
        </View>

        <View style={styles.lineBetweenRightAndLeftBox} />

        <View style={styles.couponLeftSideBox}>
          <Text style={styles.couponTextRightLine1}>
            {this.props.couponMessage}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '97%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  couponRightSideBox: {
    width: '32%',
    height: 120,
  },
  rightSideTextBox: {
    alignItems: 'center',
    marginTop: 23,
  },
  rightSideColorBar: {
    width: 8,
    backgroundColor: '#48D864',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  couponTextLeftLine1: {
    fontSize: 13,
    fontWeight: '500',
  },
  couponTextLeftLine2: {
    fontSize: 35,
    fontWeight: '900',
    marginTop: 5,
  },
  couponTextLeftLine3: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
  },
  lineBetweenRightAndLeftBox: {
    width: 2,
    height: 120,
    backgroundColor: '#B6B6B6',
  },
  couponLeftSideBox: {
    width: '68%',
    height: 120,
    alignItems: 'center',
  },
  couponTextRightLine1: {
    fontSize: 17,
    fontWeight: '900',
    marginTop: 53,
  },
});

export default CouponModalRepetition;