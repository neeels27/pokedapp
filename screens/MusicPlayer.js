import { View, Text,StyleSheet, SafeAreaView , TouchableOpacity, Dimensions, Image} from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
Ionicon.loadFont()
import Slider from '@react-native-community/slider'


const {width, height} = Dimensions.get('window');

const MusicPlayer = () => {
  return (
      <SafeAreaView style={style.container}>
    <View style={style.maincontainer}>
        
      {/* image  */}
        <View style={[style.imageWrapper, style.elevation]}>
        <Image
        
        source={require('../assets/img/img1.jpg')}
        style={style.musicImage}/>
        
        

        </View>

        {/* song content */}

        <View>

            <Text style={[style.songContent, style.songTitle]}> Some Title</Text>
            <Text style={[style.songContent, style.songArtist]}> Some Artiste name</Text>
        </View>
      {/* slider */}
        <View>
            <Slider 
            
            value = {10}
            minimumValue = {0}
            maximumValue = {1}
            minimimTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            />
        </View>


    {/* music controls*/}

    </View>
    <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper}>

        <TouchableOpacity onPress={()=>{}}>
            <Ionicon name="heart-outline" size={30} color="#88888"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
            <Ionicon name="repeat" size={30} color="#88888"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
            <Ionicon name="share-outline" size={30} color="#88888"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
            <Ionicon name="ellipsis-horizontal" size={30} color="#88888"/>
        </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  );
};

export default MusicPlayer

const style = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: "#222831",

    },

    maincontainer :{
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
    },
    bottomContainer:{
    
    width: width,
    alignItems: 'center',
    paddingVertical : 15,
    borderTopColor : "#393E46",
    borderWitdh : 1,
    },

    bottomIconWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
       

    },

    imageWrapper:{
        width:300,
        height: 340,
        marginBottom:25,
    },

    musicImage:{
        width :'100%',
        height:'100%',
        borderRadius:15,
    },

    elevation:{
        elevation : 5,
        shadowColor:'#ccc',
        shadowOffset:{
            width:5,
            height:5,
        },
        shadowOpacity:0.5,
        shadowRadius:3.84,
    },
        songContent:{
            textAlign : 'center',
            color:'#EEEEEE',
        },
    songTitle:{
        fontsize: 18,
        fontWeight: '600',
        textAlign : 'center',
        color:'#EEEEEE',
    },
    songArtist:{
        fontsize:16,
        fontWeight: '300',
        textAlign : 'center',
        color:'#EEEEEE',
    }
});