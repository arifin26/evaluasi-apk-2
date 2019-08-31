import React from 'react'
import {View,Image} from 'react-native'

export default class Mobil5 extends React.Component{
    render(){
        return(
<View style={{paddingLeft:15,paddingTop:10,flexDirection:'row'}}>
<Image source={require('../image/ford_mustang_silver_sea_111796_1152x864.jpg')} style={{height:110,width:"100%"}}/>
        
</View>
        )
    }
}