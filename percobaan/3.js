import {createStackNavigator,createAppContainer,createMaterialTopTabNavigator} from 'react-navigation'

import Singa from './1'
import Macan from './4'
import Mobil1 from './6'
import Mobil2 from './7'
import Mobil3 from './8'
import Mobil4 from './9'
import Mobil5 from './10'
import Mobil6 from './11'
import PeoplePage from './data'

const Route=createMaterialTopTabNavigator({
    Menu:{
        screen:Singa,
        navigationOption:{header:null}
    },
   Member:{
        screen:Macan,
        navigationOption:{header:null}
    },
    List:{
        screen:PeoplePage ,
        navigationOption:{header:null}
    }
}, {headerMode: 'none'})


const Beranda = createStackNavigator({
    rootberanda:{
        screen:Route,
        navigationOptions:()=>({
          header:null
        })
        
      },
    Singa2:{
        screen:Singa
    },
    Macan7:{
        screen:Macan
    },
    Mobil1:{
        screen:Mobil1,
        navigationOption:{
            title:'BACK TO LOBBY'
        }
    },
    Mobil2:{
        screen:Mobil2,
        navigationOption:{
            title:'BACK TO LOBBY'
        }
    },
    Mobil3:{
        screen:Mobil3,
        navigationOption:{
            title:'BACK TO LOBBY'
        }
    },
    Mobil4:{
        screen:Mobil4,
        navigationOption:{
            title:'BACK TO LOBBY'
        }
    },
    Mobil5:{
        screen:Mobil5,
        navigationOption:{
            title:'BACK TO LOBBY'
        }
    },
    Mobil6:{
        screen:Mobil6,
        navigationOption:{
            title:'BACK TO LOBBY'
        }
    },

})

const Kate=createAppContainer(Beranda)
export default Kate
