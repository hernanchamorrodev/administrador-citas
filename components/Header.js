import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';

import { APP_NAME, COMPANY_NAME } from '../constants';

const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.appName}>{APP_NAME}</Text>
        <Text style={styles.companyName}>{COMPANY_NAME}</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
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

export default Header;