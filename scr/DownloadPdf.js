import { View , Text, StyleSheet, TouchableOpacity, PermissionsAndroid} from "react-native";
import RNFetchBlob from 'rn-fetch-blob';


const DownloadPdf = () => {
    const url = "https://www.africau.edu/images/default/sample.pdf";

  const downloadHistory = () => {
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let date = new Date();
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            //Related to the Android only
            useDownloadManager: true,
            notification: true,
            path:
              PictureDir +
              '/Report_Download' +
              Math.floor(date.getTime() + date.getSeconds() / 2),
            description: 'Risk Report Download',
          },
        };
        config(options)
          .fetch('GET', url)
          .then((res) => {
            //Showing alert after successful downloading
            console.log('res -> ', JSON.stringify(res));
            alert('Report Downloaded Successfully.');
          });
      }

   const historyDownload =() => {
        //Function to check the platform
        //If iOS the start downloading
        //If Android then ask for runtime permission
        if (Platform.OS === 'ios') {
          downloadHistory();
        } else {
          try {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title:'storage title',
                message:'storage_permission',
              },
            ).then(granted => {
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //Once user grant the permission start downloading
                console.log('Storage Permission Granted.');
                downloadHistory();
              } else {
                //If permission denied then show alert 'Storage Permission 
               
               Alert.alert('storage_permission');
              }
            });
          } catch (err) {
            //To handle permission related issue
            console.log('error', err);
          }
        }
      }


    return(
        <View>
            <TouchableOpacity onPress={() => {
                // console.log( 'historyDownload>>>>>', historyDownload())
                       historyDownload();
                      }}
                      style={{
                        height:50,
                        shadowOffset: {width: 0, height: 0},
                        shadowOpacity: 1,
                        shadowRadius:8,
                        elevation:8,
                        borderRadius:25,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        paddingLeft:20,
                        paddingRight:20,
                      }}>
                      <Text
                        style={{
                          color: '#00d',
                          fontSize:16,
                        }}>
                      Download Data
                 </Text>
   </TouchableOpacity>
        </View>
    );
}

export default DownloadPdf;

const styles = StyleSheet.create({

});