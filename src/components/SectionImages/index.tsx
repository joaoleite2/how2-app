import { ScrollView, Text, View } from "react-native";
import { stylesSection } from "./style";
import { Image } from "expo-image";
import HorizontalRow from "../hr";

const SectionImages = () => {
  return(
    <View style={stylesSection.container}>
      <Text style={stylesSection.text}>{'Veja agora >'}</Text>
      <ScrollView 
        style={stylesSection.scroll} 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        <Image 
          source={require('../../../assets/scroll-news/vocacional.svg')}
          resizeMode='contain'
          style={stylesSection.image}
        />
        <Image 
          source={require('../../../assets/scroll-news/demanda.svg')}
          resizeMode='contain'
          style={stylesSection.image}
        />
      </ScrollView>
      <HorizontalRow />
    </View>
  )
}

export default SectionImages;