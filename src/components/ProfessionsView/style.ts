import { StyleSheet } from "react-native";

export const stylesProfessions = StyleSheet.create({
  container:{
    padding:20,
    width:'100%',
  },
  group:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10
  },
  index:{
    color:'#fff',
    fontSize:10,
  },
  fakeImage:{
    width:45,
    height:45,
    borderRadius:7
  },
  title:{
    color:'#fff',
    fontWeight:'400',
    fontSize:13
  },
  row:{
    gap:50,
    paddingTop:20
  }
})