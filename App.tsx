import { StatusBar } from 'expo-status-bar';
import { styles } from './src/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Navigation from './src/components/NavigationHome';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Navigation />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

export default App;