import * as React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, View, Text } from 'react-native';
import { FontAwesome, SimpleLineIcons, AntDesign, Ionicons, Feather } from '@expo/vector-icons'; 

export default function HeaderScreen() {
  return (
    // Header chính
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container_extra}>
          <View style={styles.header_user}>
            <Image style={{width:30, height:30}} source={require('../assets/images/usser.png')}/>
            
          </View>
          <View style={{left:5, width:100}}>
            <Text>Đăng nhập</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row-reverse'}}>
            {/* Icon thông báo */}
            <View style={styles.header_bell}>
              <View>
                <TouchableOpacity>
                  <SimpleLineIcons name="bell" size={25} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontSize:8}}>Thông báo</Text>
              </View>
            </View>
            {/* Icon scans */}
            <View style={styles.header_scan}>
              <View>
                <TouchableOpacity>
                  <Ionicons name="ios-qr-scanner" size={25} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontSize:8}}>Quét Mã</Text>
              </View>
            </View>
            {/* Icon nạp tiền */}
            <View style={styles.header_wallet}>
              <View>
                <TouchableOpacity>
                  <AntDesign name="wallet" size={25} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontSize:8}}>Nạp tiền</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
//Style
const styles = StyleSheet.create({
  container:{
    height: 70,
    marginTop: 25,
    flexDirection: 'row',
    position:'relative',
    top:0,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  container_extra:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_user:{
    width: 50, 
    height: 50, 
    backgroundColor: '#F0F0F0', 
    borderRadius:25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
  },

  header_bell:{
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_scan:{
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_wallet:{
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});