import { TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { stylesHeader } from "./style";
import { useState } from "react";

const Header = () => {
  const [search, setSeach] = useState('tes')
  
  return(
    <View style={stylesHeader.header}>
      <Ionicons name='menu' color='#fff' size={30}/>
      <View style={stylesHeader.searchView}>
        <Ionicons name='search-outline' size={24} color='#fff'/>
        <TextInput
          style={stylesHeader.textInput}
          placeholder='Pesquisar...'
          placeholderTextColor='#999'
          value={search}
        />
      </View>
      <Image 
        source={require('../../../assets/logo.svg')}
        style={stylesHeader.logo}
        resizeMode='contain'
        />
    </View>
  )
}

export default Header;