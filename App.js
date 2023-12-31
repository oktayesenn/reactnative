import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

export default function App() {
  return (
  <Provider store={store}>
    <View style={styles.container}>
     <image 
      source={{
        uri: "https://links.papareact.com/gzs",
      }}
      style={styles.logo}
     />
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
