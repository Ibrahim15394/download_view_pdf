import React from 'react';
import {Pressable, Text, View} from 'react-native';
import DownloadPdf from './DownloadPdf';



const Home = ({navigation}) => {

    const viewPdf = () => {
        return(
            navigation.navigate('ViewPdf')
        );
    }
  return (
    <View>
      <DownloadPdf />
      <Pressable onPress={() => navigation.navigate('ViewPdf')}>
        <Text>View</Text>
      </Pressable>
    </View>
  );
};

export default Home;
