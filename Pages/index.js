import React from "react";
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                    source={require('../img/zoe.png')}
                    style={{ }}
                    resizeMode='contain'
                    />
                </View>
                <Text style={styles.Title}>
                Zoe
                </Text>
                <TextInput placeholder ="e-mail" style={styles.TextInput}>
                    
                </TextInput>
                <TextInput placeholder ="senha" style={styles.TextInput}>
                    
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Metas')}>
                    <Text>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Cadastro')}>
                    <Text>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{ flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
    },
    containerLogo:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerForm:{
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        padding: '5%',
        marginBottom: 250,
        backgroundColor:'#ADD8E6'
    },
    Title:{
        flex: 1,
        marginTop:0,
        fontWeight:"bold",
        color:'#111',
        fontSize: 54
    },
    TextInput:{
        position:'relative',
        padding:10,
        backgroundColor:'#7f7f7',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#111',
        borderRadius:5,
        paddingVertical: 8,
        width:'60%',
        alignSelf:'center',
        bottom:'20%',
        textAlign:"left",
        justifyContent:'center',
        marginBottom: '5%',
    },
    Text:{
        fontFamily:'SansSeriff',
        color:'#888'
    },
    button:{
        position:'absolute',
        backgroundColor:'#ccc',
        borderRadius:50,
        paddingVertical: 8,
        width:'30%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#ccc'
    },
    button1:{
        position:'absolute',
        backgroundColor:'#ccc',
        borderRadius:50,
        paddingVertical: 8,
        width:'30%',
        alignSelf:'center',
        bottom:'8%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText1:{
        fontSize:18,
        color:'#ccc'
    }
})