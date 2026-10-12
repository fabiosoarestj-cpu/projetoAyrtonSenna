import { StyleSheet } from "react-native";

const styles= StyleSheet.create(
    {
    cardScroll:{
        width:'100%',
        height:120,  
        marginTop:5,
        marginBottom:5,      
        flexDirection:'row',
        borderTopWidth:0.7,
        borderBottomWidth:0.7,
        borderBottomColor:'black',
        gap:10,
    },
    imgCardContainer:{
        width:'35%',
        height:'100%',
    },
    imgCardScrow:{
        width:'100%',
        height:'100%',
    },
    txtView:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        gap:3,    },
    titleScroll:{
        fontSize:14,
        fontWeight:'bold',
    },
    paragraphScroll:{
        fontSize:12,
    },   
    });

export default styles;