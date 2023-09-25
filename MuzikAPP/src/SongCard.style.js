import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
   flexDirection:"column",

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  inner_container: {
    flex:1,
    padding:10,
    justifyContent:"center",

  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    maxWidth: '50%'
  },
  info_container: {
    flexDirection:"row",
    alignItems:"center"
  },
  year: {
    fontSize:12,
   marginLeft:10,
   color:"gray",
   fontWeight:"bold"
  },
  seperator:{borderWidth:1,
  borderColor:"#e0e0e0"},

  soldout_container:{
    borderWidth:1,
    borderColor:"red",
    padding:5,
    borderRadius:5,
    
  },
  soldout_title:{
    color:"red",
  },
  content_container:{
   flexDirection:"row",
   alignItems: "center",
   flex: 1,
   justifyContent: 'space-between'
   
  },

});

export default styles;
