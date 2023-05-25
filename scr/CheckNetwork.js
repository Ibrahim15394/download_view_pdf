import { View, Pressable, Text, StyleSheet, Alert } from "react-native";
import {useNetInfo} from '@react-native-community/netinfo';

const CheckNetwork = () => {
    const netInfo = useNetInfo();

  const checkConnection = () => {
    if (netInfo.isConnected && netInfo.isInternetReachable) {
      Alert.alert('You are online!');
    } else {
      Alert.alert('You are offline!');
    }
  };
    return(
        <View style={styles.container}>
        <Pressable
          onPress={() => {
            checkConnection();
          }}>
          <Text>Check Connectivity</Text>
        </Pressable>
        <Text>Type: {netInfo.type}</Text>
        <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
        <Text>
          Is Internet Available? {netInfo.isInternetReachable?.toString()}
        </Text>
      </View>
    );
}


export default CheckNetwork;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });