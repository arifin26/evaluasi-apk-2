import React from 'react'
import {View,Text,Image,ActivityIndicator} from 'react-native'
import Route from './3'



export default class NJaal extends React.Component{
    state={
        role:true
}
   
render(){
        setTimeout(()=>{
      this.setState({
          role:false
      })
  },1000)
    if (this.state.role) {
      return (
        <View style={{alignItems:'center',paddingTop:70}}>
          <Image
                source={require('../image/pistons.png')}
                style={{height:150,width:150}}
          />
          <ActivityIndicator size='large' />
          <View style={{alignItems:'center'}} >
                <Text style={{color:'red'}}>WELCOME</Text>
                <Text style={{color:'red'}}>TO MY GARAGE</Text>
                
          </View>
        </View>
      );
      
    }

    return(
        <Route/>
    )
}


}

