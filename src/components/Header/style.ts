import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
  header:{
    width:'100%',
    height:60,
    display:'flex',
    justifyContent:'space-between',
    paddingHorizontal:20,
    alignItems:'center',
    marginTop:10,
    flexDirection:'row',
    gap:20
  },
  searchView:{
    backgroundColor:'#333232',
    borderRadius:15,
    display:'flex',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10
  },
  textInput:{
    color:'#fff',
    padding:10,
    flex:1
  },
  logo: {
    width:60,
    height: 50,
  }
})