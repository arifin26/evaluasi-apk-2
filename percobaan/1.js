import React from 'react'
import { View,Text,Image,ActivityIndicator,TextInput ,TouchableOpacity,ScrollView } from 'react-native'
import Coba from './2'

export default class Singa extends React.Component{

render(){

return(
<View style={{flex:1}}>
<View style={{backgroundColor:'blue',height:50,width:'100%'}}>
<View style={{alignItems:'center',paddingTop:10}}>
<Coba gambar='RIFIN LOBBY'  />
<Text >{this.props.gambar}</Text>

</View>
</View>

<ScrollView>

<View style={{flexDirection:'row'}}>
  <View style={{paddingLeft:15,paddingTop:10,flexDirection:'row'}}>
        <Image source={require('../image/car.png')} style={{height:50,width:50,borderRadius:170}}/>
        
    </View>
    <View style={{flexDirection:'column',paddingTop:10,paddingLeft:10}}>
    <Text>
            AUDI
        </Text>
        <Text>
            20-11-2017
        </Text>
    </View>
</View>
<View style={{paddingTop:10}}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Mobil1')}>
    <Image source={require('../image/audi_r8_regula_tuning_oxigin_oxrock_r20_96478_1152x864.jpg')}
        style={{height:170,width:'100%'}}
    />
    </TouchableOpacity>
    <View style={{alignItems:'center'}}>
   <Text>by carla</Text>
    </View>
</View>





<View style={{flexDirection:'row',paddingTop:30}}>
  <View style={{paddingLeft:15,flexDirection:'row'}}>
        <Image source={require('../image/car.png')} style={{height:50,width:50,borderRadius:170}}/>
        
    </View>
    <View style={{flexDirection:'column',paddingLeft:10}}>
    <Text>
            BMW
        </Text>
        <Text>
           21-06-2018
        </Text>
    </View>
</View>
<View style={{paddingTop:10}}>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Mobil2')}>
    <Image source={require('../image/bmw_csl_hommage_side_view_105056_1152x864.jpg')}
        style={{height:180,width:'100%'}}
    />
    </TouchableOpacity>
</View>





<View style={{flexDirection:'row',paddingTop:30}}>
  <View style={{paddingLeft:15,flexDirection:'row'}}>
        <Image source={require('../image/car.png')} style={{height:50,width:50,borderRadius:170}}/>
        
    </View>
    <View style={{flexDirection:'column',paddingLeft:10}}>
    <Text>
           FERARRI
        </Text>
        <Text>
            30-04-1987
        </Text>
    </View>
</View>
<View style={{paddingTop:10}}>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Mobil3')}>
    <Image source={require('../image/equus_bass_770_movement_2014_97833_1152x864.jpg')}
        style={{height:180,width:'100%'}}
    />
    </TouchableOpacity>

</View>






<View style={{flexDirection:'row',paddingTop:30}}>
  <View style={{paddingLeft:15,flexDirection:'row'}}>
        <Image source={require('../image/car.png')} style={{height:50,width:50,borderRadius:170}}/>
        
    </View>
    <View style={{flexDirection:'column',paddingLeft:10}}>
    <Text>
            FORD
        </Text>
        <Text>
            21-05-2015
        </Text>
    </View>
</View>
<View style={{paddingTop:10}}>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Mobil4')}>
    <Image source={require('../image/ford_f_150_raptor_tune_roush_performance_pickup_phase_2_roush_97552_1152x864.jpg')}
        style={{height:180,width:'100%'}}
    />
   </TouchableOpacity>
</View>





<View style={{flexDirection:'row',paddingTop:30}}>
  <View style={{paddingLeft:15,flexDirection:'row'}}>
        <Image source={require('../image/car.png')} style={{height:50,width:50,borderRadius:170}}/>
        
    </View>
    <View style={{flexDirection:'column',paddingLeft:10}}>
    <Text>
           MUSTANG
        </Text>
        <Text>
            30-03-1999
        </Text>
    </View>
</View>
<View style={{paddingTop:10}}>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Mobil5')}>
    <Image source={require('../image/ford_mustang_silver_sea_111796_1152x864.jpg')}
        style={{height:180,width:'100%'}}
    />
   </TouchableOpacity>
</View>






<View style={{flexDirection:'row',paddingTop:30}}>
  <View style={{paddingLeft:15,flexDirection:'row'}}>
        <Image source={require('../image/car.png')} style={{height:50,width:50,borderRadius:170}}/>
        
    </View>
    <View style={{flexDirection:'column',paddingLeft:10}}>
    <Text>
           LAMBORGINI
        </Text>
        <Text>
            21-02-2014
        </Text>
    </View>
</View>
<View style={{paddingTop:10}}>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Mobil6')}>
    <Image source={require('../image/lamborghini_aventador_lp700_4_blue_supercars_exotic_96016_1152x864.jpg')}
        style={{height:180,width:'100%'}}
    />
    </TouchableOpacity>
</View>

</ScrollView>

</View>

  


)
}
}