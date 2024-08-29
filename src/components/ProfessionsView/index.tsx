import { FlatList, ScrollView, Text, View } from "react-native";
import { stylesProfessions } from "./style";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const ProfessionsView = () => {
  
  const data = [
    'item',
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item2',
    'item3',
    'item4',
    'item5',
  ]
  
  return(
    <View style={stylesProfessions.container}>
      <Text style={stylesProfessions.index}>{'Humanas >'}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FlatList 
          data={data}
          keyExtractor={(item,index) => index.toString()}
          numColumns={7}
          columnWrapperStyle={stylesProfessions.row}
          renderItem={({item}) => (
            <View style={stylesProfessions.group}>
              <LinearGradient
                colors={['rgba(114,16,255,1)', 'rgba(216,212,255,1)']}
                start={[0, 0]}
                end={[1, 1]}
                style={stylesProfessions.fakeImage}
              >
              </LinearGradient>
              <View>
                <Text style={stylesProfessions.title}>Química</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default ProfessionsView;