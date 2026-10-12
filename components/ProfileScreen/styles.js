import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',        
        marginTop:20,
        gap:10,
    },
    card:{
        width:'90%',
        height:'60%',
        gap:10,
        
    },
    imgCapa:{
        width:'100%',
        height:'50%',
        borderRadius:10,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    },
    paragraph:{
        fontWeight:'bold',
        color:'#7f7f7f',
    },




    containerScrow:{
        height:'40%',
        width:'90%',       
        marginTop:5,
        
        
       
    },

});

export default styles;