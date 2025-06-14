import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { GluestackUIProvider } from './src/components/ui/gluestack-ui-provider';

export default function App() {
  return (
    <GluestackUIProvider>
        <Text>Hello</Text>
    </GluestackUIProvider>
  );
}
