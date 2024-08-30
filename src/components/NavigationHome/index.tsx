import { Text, View } from "react-native";
import { stylesNav } from "./style";
import { useContext } from "react";
import { CatalogContext } from "../../contexts/CatalogContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const { screen, setScreen } = useContext(CatalogContext); 
  
  return(
    <View style={stylesNav.container}>
      <NavigationContainer>
        {screen === 'catalog' ? (
          <>
            <View>
              <Text style={stylesNav.activedText}>Catálogo</Text>
              <View style={stylesNav.bar}></View>
            </View>
            <Text style={stylesNav.text} onPress={() => setScreen('myClasses')}>Minhas turmas</Text>
          </>
        ):(
          <>
            <Text style={stylesNav.text} onPress={() => setScreen('catalog')}>Catálogo</Text>
            <View>
              <Text style={stylesNav.activedText}>Minhas turmas</Text>
              <View style={stylesNav.bar}></View>
            </View>
          </>
        )}
      </NavigationContainer>
    </View>
  )
}

export default Navigation;