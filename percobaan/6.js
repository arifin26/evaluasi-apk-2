import React from 'react'
import {View,Image} from 'react-native'

export default class Mobil1 extends React.Component{
    render(){
        return(
<View style={{paddingTop:10,flexDirection:'row'}}>
<Image source={require('../image/audi_r8_regula_tuning_oxigin_oxrock_r20_96478_1152x864.jpg')} style={{height:200,width:"100%"}}/>
        
</View>
        )
    }
}