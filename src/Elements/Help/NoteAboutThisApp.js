import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class NoteAboutThisApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.aboutThisAppText}>
          このアプリはクーポンを使って、バンクーバーを楽しむアプリだよ！
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aboutThisAppText: {

  },
});

export default NoteAboutThisApp;