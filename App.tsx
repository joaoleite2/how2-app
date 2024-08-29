import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './src/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.text}> AfAAAAAAAAA </Text>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default App;