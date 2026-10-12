import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    },
    fotoCapa:{
        width:300,
        height:300,

        
    },
    fotoCapaBorder:{
        borderRadius:200,
        borderWidth:5,
        bordercolor:'black',
    },
    boxShadow:{
        width:'80%',
        height:'25%',
        borderRadius:20,
        backgroundColor:'black',
        alignItems:'center',        
        gap:10,
    },
    title:{
        color:'white',
        fontSize:25,
        margin:10,
        fontWeight:'bold',
    },
    paragraph:{
        color:'white',
        margin:2,
        textAlign:'center'
    },
});

export default styles;