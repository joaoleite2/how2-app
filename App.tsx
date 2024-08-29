import { StatusBar } from 'expo-status-bar';
import { styles } from './src/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Navigation from './src/components/NavigationHome';
import ViewNews from './src/components/ViewNews';
import ProfessionsView from './src/components/ProfessionsView';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Navigation />
      <ViewNews />
      <ProfessionsView />
    </SafeAreaView>
  );
}

export default App;