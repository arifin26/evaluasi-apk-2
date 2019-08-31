import React from 'react'
import {Text} from 'react-native'

export default class Coba extends React.Component{
    render(){
        return(
            <Text style={{color:'#fff'}}>
                {this.props.gambar}
            </Text>
        )
    }
}