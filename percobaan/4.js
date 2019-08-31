import React from 'react'
import{Text,View,ImageBackground,StyleSheet,Image,TextInput,TouchableHighlight,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity,ScrollView}from 'react-native'


class Profil extends React.Component{
  state={
    text:''
  }
  render(){
    return(
      
      <View style={{flex:1}} >
      
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../image/10e82b5c-d718-462d-9910-7e575915f96b.jpeg')}>
        <ScrollView>
          {/* <View style={{height:50,width:'100%',backgroundColor:'#a9a9a9',flexDirection:'row'}}>
              <View style={{paddingLeft:10,justifyContent:'center'}}>
              <Image source={require('../image/christmas_tree_ball_fir_new_year_christmas_118884_1152x864.jpg')} style={{width:20,height:20}}/></View>
              <View style={{paddingLeft:'32%',justifyContent:'center'}}>
              
                <Text style={Styles.teks}>PROFIL</Text>
                <Text>{this.state.text}</Text>
              </View>
          </View> */}


      <TouchableHighlight onPress={()=>{alert('eits.. gak bisa !! ')}}>
        <View style={{alignItems:'center', justifyContent:'center',paddingTop:40}}>
          <Image source={require('../image/landscape_art_moon_127187_1152x864.jpg')} style={{width: 100, height: 100,  borderRadius:50}}/>
        </View>
      </TouchableHighlight>


        <View style={{paddingTop:40,flexDirection:'row',paddingLeft:20}}>
            <TouchableNativeFeedback onPress={()=>{alert('eits.. gak bisa !!')}}>
            <Image source={require('../image/man.png')} style={{width: 50, height: 50,  borderRadius:50}}/>
            </TouchableNativeFeedback>
              <View style={{paddingLeft:15}}>
                  <Text style={Styles.kata}>nama : </Text>
              <TextInput value={this.state.text} style={Styles.tek} placeholder='nama' underlineColorAndroid={'transparent'} onChangeText={inputan => this.setState({text:inputan})}/> 
            </View>
        </View> 

         
        
        <View style={{paddingTop:15,flexDirection:'row',paddingLeft:20}}>
          <TouchableOpacity onPress={()=>{alert('eits.. gak bisa !!')}}>
          <Image source={require('../image/info.png')} style={{width: 50, height: 50}}/>
          </TouchableOpacity>
            <View style={{paddingLeft:15}}>
                <Text style={Styles.tekk}>
                  info
                </Text>
                <Text style={{flexDirection:'column',color:'#fff'}}>
                    pengguna harus mengikuti kebijakan privasi dari aturan lisensi
                </Text>
            </View>
        </View>

        <View style={{paddingTop:40,flexDirection:'row',paddingLeft:20}}>
        <TouchableWithoutFeedback onPress={()=>{alert('eits.. gak bisa !!')}}>
          <Image source={require('../image/call.png')} style={{width:45,height:45}} />
          </TouchableWithoutFeedback>
            <View style={{paddingLeft:15}}>
            
              <Text style={Styles.teek}>
              calls :
              </Text>
            
              <TextInput style={Styles.cal} placeholder='your number' /> 
            </View>  
        </View>
        </ScrollView>  
        </ImageBackground>
      

      </View>
     
      
     
      
    );
    }
}
 export default Profil



 const Styles = StyleSheet.create({
   container:{
     height:50,
     width:'100%',
     backgroundColor:'#a9a9a9'
   },
   teks:{
     fontSize:20,
     textAlign:'center',
     lineHeight:50
   },
   image:{
    flex:1

   },
   border:{
    marginTop:20,
    borderBottomWidth:15
   },
   kata:{
      fontSize:20,
      color:'#fff'
   },
   cal:{
    fontSize:13,
    color:'#fff'
   },
   tek:{
    fontSize:13,
    color:'#fff'
   },
   tekk:{
    fontSize:20,
    color:'#fff'
    
   },
   teek:{
    fontSize:20,
    color:'#fff'

   },
   BgimageStyle:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    width:'100%',
    height:'100%'
   }

 })

