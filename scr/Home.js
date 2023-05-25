import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import DownloadPdf from './DownloadPdf';
import CheckNetwork from './CheckNetwork';



const Home = ({navigation}) => {

    const viewPdf = () => {
        return(
            navigation.navigate('ViewPdf')
        );
    }
  return (
    <View style={styles.container}>
      <DownloadPdf  />
      <Pressable onPress={() => navigation.navigate('ViewPdf')} style={{borderRadius: 6, padding: 12, backgroundColor: '#00dd', width: 200, height: 40,  marginBottom: 20}}>
        <Text style={{textAlign: 'center', color: 'white'}}>View Pdf</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('CheckNetwork')} style={{borderRadius: 6, padding: 12, backgroundColor: '#00dd', width: 200, height: 40, }}>
        <Text style={{textAlign: 'center', color: 'white'}}>Check Network</Text>
      </Pressable>
    </View>
  );
};

export default Home;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
 
  });
  
