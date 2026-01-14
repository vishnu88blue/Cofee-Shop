import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation';

function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, marginTop: 35 }}>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
