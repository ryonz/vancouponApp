import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

class HelpModalAboutJpcanada extends React.Component {
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
              {'\n'}
            JPCANADA留学センターは、このアプリを運営提供しているカナダ・バンクーバーに
            本社を置く留学エージェントです。
              {'\n'}
              {'\n'}
            〓バンクーバー最大手の留学センター
              {'\n'}
              {'\n'}
            JPCANADA留学センターは、カナダの日系最大手の留学センターです。
              {'\n'}
              {'\n'}
            取り扱い留学生も毎年５００～７００人という規模を維持し、
            ますます多くの方からお問い合わせをいただいています。
              {'\n'}
              {'\n'}
            常勤のカウンセラーが５名、受付３名、その他にも経理やアシスタント、
            ビザ専任スタッフ、専属のホームステイコーディネイターや
            ボランティアコーディネーターが在籍しています。
              {'\n'}
              {'\n'}
            インターネット上からはなかなか見えませんが、
            他の留学センターの場合、スタッフ１～３名で運営している小規模ケースがほとんどです。
              {'\n'}
              {'\n'}
            〓カナダに本社があり、日本にも支店があるという強み
              {'\n'}
              {'\n'}
            Jpcanadaの本社はカナダにあります。
              {'\n'}
            日本（東京・大阪）にもそれぞれオフィスがあります。
              {'\n'}
              {'\n'}
            「カナダに本社がある留学会社より、日本に本社がある
            留学会社の方が安心では？」という声も聞こえますが、
            留学で大切なのは、留学前でしょうか？
              {'\n'}
              {'\n'}
            私たちは、留学前で一番大切なことは、留学先のカナダでしっかりと
            みなさんをサポートすることであると考えています。
            本社がカナダ、支店が日本という運用形態で多くの経費を節約しており、
            その分を留学中のサポートに還元しています。
              {'\n'}
              {'\n'}
            〓経験豊かなカウンセラー
              {'\n'}
              {'\n'}
            私たちのカウンセラーは、全員、２年以上の学校カウンセリング経験を持っています。
              {'\n'}
            これは、バンクーバー地区では異例のことです。
              {'\n'}
              {'\n'}
            バンクーバーには、多くの留学センターがありますが、
            その多くは小規模で、なおかつ、日本人カウンセラーは１人しかおりません。
              {'\n'}
            また、カウンセラーが年に何回も入れ替わるのも珍しくありません。
              {'\n'}
              {'\n'}
            私たちは、バンクーバー最大手の日系留学センターとして、
            責任を持って、皆様の留学のお手伝いをさせていただいております。
              {'\n'}
            また、専属カウンセラーが５名います。
            これは、バンクーバー地区で最大規模です。
              {'\n'}

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
export default HelpModalAboutJpcanada;
