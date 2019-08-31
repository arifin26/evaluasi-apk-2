import React from 'react'
import {View,Image} from 'react-native'

export default class Mobil3 extends React.Component{
    render(){
        return(
<View style={{paddingLeft:15,paddingTop:10,flexDirection:'row'}}>
<Image source={require('../image/equus_bass_770_movement_2014_97833_1152x864.jpg')} style={{height:110,width:"100%"}}/>
        
</View>
        )
    }
}