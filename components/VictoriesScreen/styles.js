import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,       
    },
    containerScroll:{
        width:'100%',
        height:400,
        gap:30, 
        paddingTop:10,
        marginTop:10,
        marginBottom:4,
        alignSelf:'center',
        
    },
    cardBanner:{
        width:'85%',
        marginHorizontal:'auto',
        marginVertical:10,
        height:310,
        

    },
    card:{
        width:'75%',
        alignSelf:'center',
        marginVertical:20,
        height:240,
        backgroundColor:'rgba(25,25,250,0.5)',
    },

    cardPrime:{
        width:'100%',   
        alignSelf:'center',         
        marginVertical:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:10,
        

    },
    title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        margin:5,
    },
    paragraph:{
        color:'white',
        fontSize:15,
        textAlign:'center',
    },
    textContainer:{
        flexDirection:'row',
        padding:10,
        gap:10,
    },
    textNumber:{
        color:'#F1C40F',
        fontSize:19,
        fontWeight:'bold',
    },
    textLiner:{
        color:'white',
        fontSize:18,
    },

});

export default styles;