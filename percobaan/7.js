import React from 'react'
import {View,Image} from 'react-native'

export default class Mobil2 extends React.Component{
    render(){
        return(
<View style={{paddingLeft:15,paddingTop:10,flexDirection:'row'}}>
<Image source={require('../image/bmw_csl_hommage_side_view_105056_1152x864.jpg')} style={{height:110,width:"100%"}}/>
        
</View>
        )
    }
}