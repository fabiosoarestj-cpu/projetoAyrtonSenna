import styles from "./styles";
import { View,Text,Image } from "react-native";

export default function Card (props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <Image source={props.img} style={styles.img}/>
        </View>
    );
}