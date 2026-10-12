import * as React from 'react';
import { View,Text,ImageBackground } from 'react-native';
import styles from './styles';
import Fundo from '../../assets/fundo.jpg';
import FotoCapa from '../../assets/foto-capa.jpg';


export default function HomeScreen(){
    return(
       <ImageBackground source={Fundo}
        style={styles.container} resizeMode='cover'
        blurRadius={10}>
       
           <ImageBackground source={FotoCapa} imageStyle
           ={styles.fotoCapaBorder} style={styles.fotoCapa}>
            
            </ImageBackground> 
            <View style={styles.boxShadow }>
                <Text style={styles.title}>Ayrton Senna</Text>
                <Text style={styles.paragraph}>Através deses APP, você vai conhecer um pouco sobre quem foi este grande piloto.</Text>
            </View>
            
       </ImageBackground>
    );
}