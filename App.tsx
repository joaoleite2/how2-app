import { styles } from './src/style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CatalogProvider } from './src/contexts/CatalogContext';
import Main from './src/screens/Main';

const App = () => {
  return (
    <CatalogProvider>
      <SafeAreaView style={styles.container}>
        <Main />
      </SafeAreaView>
    </CatalogProvider>
  );
}

export default App;