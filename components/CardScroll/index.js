import styles from "./styles";
import {View,Text,Image} from 'react-native';

export default function CardScroll(props)
{
    return(
        <View style={styles.cardScroll}  >
            <View style={styles.imgCardContainer} >
                <Image source={props.imagemFonte} style={styles.imgCardScrow}/>
            </View>
            <View style={styles.txtView}> 
                <Text style={styles.titleScroll}>{props.title}</Text>
                <Text style={styles.paragraphScroll}>{props.paragraph}</Text>
            </View>
        </View>
    );
};