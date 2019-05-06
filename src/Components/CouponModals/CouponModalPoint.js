import React from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  Text,
} from 'react-native';

class CouponModalPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPoint: '0',
    };
  }

  async componentDidMount() {
    const { shopName } = this.props;
    await AsyncStorage.getItem(`${shopName}.currentPoint`)
      .then((currentPoint) => {
        if (currentPoint) {
          this.setState({ currentPoint });
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rightSideColorBar} />
        <View style={styles.couponRightSideBox}>
          <View style={styles.rightSideTextBox}>
            <Text style={styles.couponTextLeftLine1}>
              現在のポイント
            </Text>
            <Text style={styles.couponTextLeftLine2}>
              {`${this.state.currentPoint}pt`}
            </Text>
          </View>
        </View>

        <View style={styles.lineBetweenRightAndLeftBox} />

        <View style={styles.couponLeftSideBox}>
          <Text style={styles.couponTextRightLine1}>2pt: 10% オフ</Text>
          <Text style={styles.couponTextRightLine2}>5pt: ボーナスチャンス</Text>
          <Text style={styles.couponTextRightLine3}>10pt: ボーナスチャンス</Text>
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
    fontWeight: '700',
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
    fontWeight: '500',
    marginTop: 25,
  },
  couponTextRightLine2: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 5,
  },
  couponTextRightLine3: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 5,
  },
});

export default CouponModalPoint;