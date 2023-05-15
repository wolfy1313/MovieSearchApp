

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





function App(): JSX.Element {

  return (
    <SafeAreaView className="flex flex-row justify-center bg-green-400" >
      <Text className="flex text-red-500 font-extrabold ">Hi Worl</Text>
    </SafeAreaView>
  );
}


export default App;
