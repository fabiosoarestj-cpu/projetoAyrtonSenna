import * as React from 'react';
import { View,Text,Image,ScrollView } from 'react-native';
import styles from './styles';
import CardScroll from '../CardScroll';
import fotoCapa from '../../assets/foto-capa.jpg';
import ReiChuva from '../../assets/rei-da-chuva.png';
import ReiMonaco from '../../assets/rei-de-monaco.png';
import Silvastone from '../../assets/silvastone.png';
import Preparacao from '../../assets/preparacao.png';
export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            
            <View style={styles.card}>
                <Text style={styles.title}>Ayrton Senna</Text>
                <Image source={fotoCapa} style={styles.imgCapa}/>
                <Text style={styles.paragraph}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsavel por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
            </View>
            <ScrollView style={styles.containerScrow} >
               
                <CardScroll imagemFonte={ReiChuva} title="Rei da chuva" paragraph="Aprimoriou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência."/>

                <CardScroll imagemFonte={ReiMonaco} title="Rei de Mônaco" paragraph="Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas."/>

                <CardScroll imagemFonte={Silvastone} title="Silvastone" paragraph="Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprenssa inglesa."/>

                <CardScroll imagemFonte={Preparacao} title="Preparação" paragraph="Para vencer corridas e campionatos o piloto precisava ter uma preparação fisica de atleta."/>
                
            </ScrollView>
           
            


        </View>
    );
}