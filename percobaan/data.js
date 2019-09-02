// import React from 'react'
// import{Text,View,FlatList}from 'react-native'
// import { url } from 'inspector';



// class Flatku extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             dataSource:[]
//         }
//     }

//     renderItem = () => {

//     }


//     componentDidMount(){
//         fetch(url)
//         .then((Response) => Response.json())
//         .then((Response.json) {

//         })
//     }

//   render(){
//     return(
//       <View style={styles.container}>
//         <FlatList
//         data={this.state.dataSource}
//         renderItem={this.state.renderItem}
//         />
//       </View>
//     )
//   }
// }
//  export default Flatku



//  const styles = ({
//    container:{
//      height:50,
//      width:100,
    
//    },
//    teks:{
//      fontSize:26
//    }
// })








// import React from 'react';
// import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native';

// export default class FetchExample extends React.Component {

//   constructor(props){
//       super(props);
//       this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://randomuser.me/api/?results=20')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.results,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//         data={this.state.dataSource}
//         // style={{ justifyContent:'center'}} 
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) =>{
//             return(
//                 <View>
//             <Image source={{uri:item.picture.large}} style={{height:90,width:90}}/>
//         <Text> {item.email}</Text>
                    
//                 </View>
//             )
//             }
//         }
//         keyExtractor={({id}, index) => id}

//         />
//       </View>
       
//     );
//   }
// }






import React, { Component } from 'react';
import { View, Text,FlatList,ActivityIndicator,Image,StatusBar } from 'react-native';






export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
        dataSource:[]
    };
  }
    
  






_fetchItem = async ()=>{
    this.setState({ isLoading: true });
    try {
        let response = await fetch('https://randomuser.me/api/?results=20');
        let responseJson = await response.json();
        await this.setState({
                isLoading: false,
                dataSource: responseJson.results,
        });
    } catch (error) {
        console.error(error);
    }
}







_separatorComponent=()=>{
    return(
        <View style={{backgroundColor:'grey',height:0.5}} />
    )
}

_itemComponent = ({ item })=>{
    return(
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, height: 50}}>
            <View style={{ justifyContent:'center'}} >
                <Image source={{ uri: item.picture.thumbnail }} style={{ width: 40, height: 40,borderRadius: 25 }} />
            </View>

            <View>
                <Text style={{ padding: 3, }}>{item.name.first}, {item.name.last}</Text>
                <Text style={{padding: 3,}}>{item.email}</Text>
            </View>
        </View>
    )
}







componentDidMount() {
    this._fetchItem()
 }





 

 render() {
    if (this.state.isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
                <StatusBar barStyle="dark-content" />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>User List</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <StatusBar barStyle="dark-content"  />
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>User List</Text>
            </View>
            <FlatList
                data={this.state.dataSource}
                renderItem={this._itemComponent}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={this._fetchItem}
                refreshing={this.state.isLoading}
                ItemSeparatorComponent={this._separatorComponent}
            />
        </View>
    )
}}

