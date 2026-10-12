
import { View,Text,ImageBackground, ScrollView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Card from '../Card';
import imgfundo from '../../assets/corrida1.jpg';
import vitoria1 from '../../assets/vitoria1.jpg';
import vitoria2 from '../../assets/vitoria2.jpg';
import vitoria3 from '../../assets/vitoria3.jpg';
import styles from './styles';
export default function VictoriesScreen(){
    return(
        <ImageBackground style={styles.container} source={imgfundo} blurRadius={7} resizeMode='cover'>
           <ScrollView style={styles.containerScroll}  >
                <View style={styles.cardBanner}>
                     <View style={styles.cardPrime}> 
                    <Text style={styles.title}>Senna em Números</Text>

                    <Text style={styles.paragraph}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>

                    <View style={styles.textContainer}>
                        <MaterialCommunityIcons name="trophy-variant" size={24} color={'#F1C40F'}/>
                        <Text style={styles.textNumber}>161</Text>
                        <Text style={styles.textLiner}>GPS DISUTADOS</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <MaterialCommunityIcons name="trophy-variant" size={24} color={'#F1C40F'}/>
                        <Text style={styles.textNumber}>65</Text>
                        <Text style={styles.textLiner}>POLE POSITIONS</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <MaterialCommunityIcons name="trophy-variant" size={24} color={'#F1C40F'}/>
                        <Text style={styles.textNumber}>41</Text>
                        <Text style={styles.textLiner}>VITÓRIAS</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <MaterialCommunityIcons name="trophy-variant" size={24} color={'#F1C40F'}/>
                        <Text style={styles.textNumber}>3X</Text>
                        <Text style={styles.textLiner}>CAMPIÃO MUNDIAL</Text>
                    </View>
                </View> 
                </View>
                
                <View style={styles.card}>
                     <Card title="Campionato Mundial - 1988" img={vitoria1}/>
                </View>
                
                <View style={styles.card}>
                    <Card title="Campionato Mundial - 1990" img={vitoria2}/>
                </View>

                <View style={styles.card}>
                    <Card title="Campionato Mundial - 1991" img={vitoria3}/>
                </View>


           </ScrollView>
            
        </ImageBackground>
    );
}