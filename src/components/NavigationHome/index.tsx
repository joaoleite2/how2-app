import { Text, View } from "react-native";
import { stylesNav } from "./style";

const Navigation = () => {
  return(
    <View style={stylesNav.container}>
      <Text style={stylesNav.text}>Catálogo</Text>
      <Text style={stylesNav.text}>Minhas turmas</Text>
    </View>
  )
}

export default Navigation;