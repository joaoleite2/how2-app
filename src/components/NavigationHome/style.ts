import { StyleSheet } from "react-native";

export const stylesNav = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    gap:20,
    marginTop:60,
    justifyContent:'center'
  },
  text:{
    color:'#fff',
    fontSize:15,
    fontWeight:'500',
    padding:10
  },
  activedText:{
    color:'#8907BB',
    fontSize:15,
    padding:10,
    fontWeight:'500'
  },
  bar:{
    width:'100%',
    height:1,
    backgroundColor:'#999'
  },
  animatedContainer:{
    
  }
})