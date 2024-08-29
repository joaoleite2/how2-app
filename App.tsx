import { StatusBar } from 'expo-status-bar';
import { styles } from './src/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Navigation from './src/components/NavigationHome';
import SectionImages from './src/components/SectionImages';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Navigation />
      <SectionImages />
    </SafeAreaView>
  );
}

export default App;