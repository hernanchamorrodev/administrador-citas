import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';

import { APP_NAME, COMPANY_NAME } from './constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>{APP_NAME}</Text>
        <Text style={styles.companyName}>{COMPANY_NAME}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  header: {
    width: "97%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252456",
    borderRadius: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  companyName: {
    fontSize: 16,
    color: "#FFFFFF",
  }
});
