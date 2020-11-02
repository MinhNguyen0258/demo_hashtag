import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Image, Alert, View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native'; 
//import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SliderBox } from "react-native-image-slider-box";
//import DemoScreen from '../screens/DemoScreen';
export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
            ]
        };
    }
    render() {
        return (
        <SafeAreaView>
            <ScrollView>
                
                <View style={styles.container}>
                    <View style={{flexDirection:'column',flex:1, width:'100%'}}>
                        <View style={{flexDirection:'row',width:'100%', paddingRight:'3%', flex:1}}>
                            <View style={{flexDirection:'row', width:'80%', flex:1}}>
                                <View style={{width:'8%'}}>
                                    <SvgUri height="20" width="30" source={require('../assets/images/map.svg')}/>
                                </View>
                                <View style={{flexDirection:'row', width:'100%'}}>
                                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                                        <View style={{width:'50%'}}>
                                            <Text numberOfLines={1} style={{fontSize: RFPercentage(1.8)}}>HashTag Cafe Q.Phú Nhuận</Text>
                                        </View>
                                        <View style={{width:'45%'}}>
                                            <Text numberOfLines={1} style={{fontSize: RFPercentage(1.5), marginLeft:5}}>Số 03 đường 104 Q.2</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row-reverse', width:'20%'}}>
                                <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
                                    <View style={{flexDirection:'row', marginLeft:'12%'}}>
                                        <View style={styles.home_boder}>
                                            <Text style={{ color:'red', fontSize:RFPercentage(1)}}>90km</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity onPress={() => { Alert.alert('Hello maps');}}>
                                            <SvgUri height="20" width="30" source={require('../assets/images/pen.svg')}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Lịch sử đơn hàng */}
                    <View style={{paddingTop:15}}><Text style={{fontSize:20,color:'#ED1C24'}}>Lịch sử đơn hàng</Text></View>
                    <ScrollView horizontal>
                        <View style={styles.history_Order}>
                            <View style={{marginRight:10}}>
                                <View style={styles.boder_history}> 
                                    <View style={styles.history_order}>
                                        <View style={{flexDirection:'row', marginTop:3}}>
                                            <Text style={{marginLeft:10, flex:5}}>Ngồi tại quán</Text>
                                            <Text style={{marginRight:10, color:'#18B52D'}}>Đang sử dụng</Text>
                                        </View>
                                        <View style={{margin:10, flexDirection:'row', flex:1}}>
                                            <Image style={{width:undefined, resizeMode:'stretch', height:90, flex:5}} source={require('../assets/images/hinhweb.png')} />
                                            <View style={{flexDirection:'column', marginLeft:5, flex:5}}>
                                                <Text style={{color:'#ED1C24', }}>620.000 đ</Text>
                                                <Text>Số lượng : 02</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row'}}>
                                    {/* <DemoScreen/> */}
                                    <View  style={{flex:1}}></View>
                                    <TouchableOpacity>
                                        <View style={styles.add_Order}>
                                            <Text style={{color:'#fff', fontSize:18}}>Thêm món</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginRight:10}}>
                                <View style={styles.history_order}>
                                    <View style={{flexDirection:'row', marginTop:3}}>
                                        <Text style={{marginLeft:10, flex:5}}>Mang đi</Text>
                                        <Text style={{marginRight:10, color:'#18B52D'}}>Đang sử dụng</Text>
                                    </View>
                                    <View style={{margin:10, flexDirection:'row',flex:1}}>
                                        <Image style={{maxWidth:undefined, resizeMode:'stretch', height: 90, flex:5}} source={require('../assets/images/cafe.png')} />
                                        <View style={{flexDirection:'column', marginLeft:5, flex:5}}>
                                            <Text style={{color:'#ED1C24', }}>620.000 đ</Text>
                                            <Text>Số lượng : 02</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginTop:10, flexDirection:'row'}}>
                                    {/* <DemoScreen/> */}
                                    <View  style={{flex:1}}></View>
                                    <TouchableOpacity>
                                        <View style={styles.add_Order}>
                                            <Text style={{color:'#fff', fontSize:18}}>Thêm món</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    {/* End lịch sử đơn hàng */}
                    {/* Icon phong cách phục vụ */}
                    <View style={{flexDirection: 'row', top: 15, alignItems:'center', flex:1, width:'100%'}}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'98%', paddingLeft:'2%'}}>
                            <View style={{width: '25%', alignItems:'center'}}>
                                <Image style={{ width:85, height: 60}} source={require('../assets/images/car.png')}/>
                            </View>
    
                            <View style={{width: '25%', alignItems:'center', top:-10, left:10}}>
                                <SvgUri height="80" width="50" source={require('../assets/images/lycafe.svg')} />
                            </View>
    
                            <View style={{width: '25%', alignItems:'center', height: 60}}>
                                <Image style={{ width: '60%', height: 60}} source={require('../assets/images/bancafe.png')}/>
                            </View>
    
                            <View style={{width: '25%', alignItems:'center'}}>
                                <Image style={{ width:85, height: 60}} source={require('../assets/images/room.png')}/>
                            </View>
                        </View>
                    </View>
                    {/* End icon phong cách phục vụ */}
    
                     {/* Endow */}
                    <View style={{ paddingTop:20 }}>
                        <View style={{flex:1}}>
                            <View>
                                <Text style={styles.text_title}>Ưu đãi</Text>
                            </View>
    
                            <View style={{paddingTop: 10}}>
                                <View style={{alignItems:'center'}}>
                                        <SliderBox
                                            images={this.state.images}
                                            sliderBoxHeight={200}
                                            //onCurrentImagePressed={index => console.warn(``)}
                                            dotColor="#999999"
                                            inactiveDotColor="#90A4AE"
                                            paginationBoxVerticalPadding={20}
                                            autoplay
                                            circleLoop
                                            resizeMethod={'resize'}
                                            resizeMode={'cover'}
                                            paginationBoxStyle={{
                                                position: "absolute",
                                                bottom: 0,
                                                padding: 0,
                                                alignItems: "center",
                                                alignSelf: "center",
                                                justifyContent: "center",
                                                paddingVertical: 10
                                            }}
                                            dotStyle={{
                                                width: 5,
                                                height: 5,
                                                borderRadius: 5,    
                                                }}
                                            ImageComponentStyle={{borderRadius: 5, width: '93%', marginTop: 5}}
                                            imageLoadingColor="#2196F3"
                                        />
                                </View>
                            </View>
                        </View>
                        {/* End endow */}
    
                        {/* #Cafe */}
    
                        <View style={{flex:4, paddingTop:20}}>
                            <View>
                                <Text style={styles.text_title}>#Cafe</Text>
                            </View>

                            
                            <View style={{paddingTop:10, flex:1, flexDirection: "column"}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{width:'50%'}}>
                                            <View style={{flexDirection:'row', marginRight:'5%'}}>
                                                <View style={styles.store_image}>
                                                    <TouchableNativeFeedback onPress={() => { Alert.alert('Hello Boy');}}>
                                                        <View>
                                                            <Image style={styles.image_size} source={require('../assets/images/opening.png')} />
                                                            <View style={styles.text_background}>
                                                                <Text numberOfLines={1} style={{paddingTop:5, fontSize:RFPercentage(2)}}>Grand Opening</Text>
                                                                <Text numberOfLines={1} style={{fontSize:RFPercentage(2)}}>Hashtag Cafe Phó Đức Chinh</Text>
                                                                <Text numberOfLines={1} style={{paddingTop:7,fontSize:RFPercentage(1.5), paddingBottom:7}}>Hashtag Cafe xin chào Q1!</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                            </View>
                                        </View>
        
                                        <View style={{width:'50%'}}>
                                            <View style={{flexDirection:'row-reverse', marginLeft:'2%'}}>
                                                <View style={styles.store_image}>
                                                    <TouchableNativeFeedback onPress={() => { Alert.alert('Hello Boy');}}>
                                                        <View>
                                                            <Image style={styles.image_size} source={require('../assets/images/trasua.png')} />
                                                            <View style={styles.text_background}>
                                                                <Text numberOfLines={1} style={{paddingTop:5, fontSize:RFPercentage(2)}}>Trà Sữa</Text>
                                                                <Text numberOfLines={1} style={{fontSize:RFPercentage(2)}}>Đường nâu thạch Cafe</Text>
                                                                <Text numberOfLines={1} style={{paddingTop:7,fontSize:RFPercentage(1.5), paddingBottom:7}}>Hashtag Cafe hân hạnh giới thiệu với quý khách</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                            </View>
                        </View>
                        {/* End #Cafe */}
    
                        {/* Store */}
                        <View style={{flex:4, paddingTop:20}}>
                            <View>
                                <Text style={styles.text_title}>Của hàng</Text>
                            </View>
                            <View style={{paddingTop:10, width:  '100%', flexDirection: "column"}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{width:'50%'}}>
                                            <View style={{flexDirection:'row', marginRight:'5%'}}>
                                                <View style={styles.store_image}>
                                                    <TouchableNativeFeedback onPress={() => { Alert.alert('Hello Boy');}}>
                                                        <View>
                                                            <Image style={styles.image_size} source={require('../assets/images/store2.png')} />
                                                            <View style={styles.text_background}>
                                                                <Text numberOfLines={2} style={styles.text_size}>Hastag Cafe-Plus Thanh Mỹ Lợi</Text>
                                                                <Text numberOfLines={1} style={styles.text_size}>104 Thanh Mỹ Lợi, Q2</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                            </View>
                                        </View>
        
                                        <View style={{width:'50%'}}>
                                            <View style={{flexDirection:'row-reverse', marginLeft:'2%'}}>
                                                <View style={styles.store_image}>
                                                    <TouchableNativeFeedback onPress={() => { Alert.alert('Hello Boy');}}>
                                                        <View>
                                                            <Image style={styles.image_size} source={require('../assets/images/store2.png')} />
                                                            <View style={styles.text_background}>
                                                                <Text numberOfLines={2} style={styles.text_size}>Hastag Cafe-Take Away Phó Đức Chinh</Text>
                                                                <Text numberOfLines={1} style={styles.text_size}>22 Phó Đức Chinh, Q1</Text>
                                                            </View>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                            </View>
                        </View>
                        {/* End Store */}
                    </View>
                </View>
                <View style={{paddingBottom:'55%'}}></View>
            </ScrollView>    
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        top:0,
        paddingTop: 15,
        paddingRight:10,
        paddingLeft: 10,
        backgroundColor: '#E5E5E5',
        fontSize: RFValue(24, 680),
    },

    store_image:{
        marginLeft:'1%', 
        backgroundColor:'#fff', 
        borderRadius:5,
        flex:1
    },

    image_size:{
        width:'100%', 
        height:100, 
        borderRadius: 3,
        resizeMode:'stretch'
    },

    text_size:{
        paddingTop:5,
        fontSize:RFPercentage(2),
        fontWeight: 'normal', 
        color:'#1A2027',
        width: '100%',
        paddingBottom:5
    },

    text_sizze:{
        fontSize: RFPercentage(1.5),
        fontWeight: 'normal', 
        color:'#1A2027',
    },

    text_background:{
        width:'94%', 
        marginLeft:'3%'
    },

    text_title:{
        fontSize:RFPercentage(2.5), 
        color:'#ED1C24', 
        left:5
    },
    
    home_boder:{
        fontWeight: 'bold',
        height: 15,
        width: '65%',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 15,
        alignItems:'center', 
        justifyContent:'center',
        marginLeft: '5%'
    },

    history_Order:{
        flexDirection:'row', 
        paddingTop:10, 
        flex:1,
    },

    history_order:{
        width: 280, 
        backgroundColor:'#fff', 
        borderRadius:5
    },

    boder_history:{
        borderColor: '#18B52D',
        borderWidth: 0.5,
        borderRadius: 5,
    },

    add_Order:{
        width: 135,
        backgroundColor:'#ED1C24', 
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius:5, 
        paddingTop:10, 
        paddingBottom:10
    }
});
