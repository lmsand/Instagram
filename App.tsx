import {ScrollView, StyleSheet, View} from 'react-native';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1
  },

});
