import React from 'react';
import {Text,View, Image, StyleSheet, TextInput, Button, Alert, ScrollView,TouchableOpacity} from 'react-native';




const DetalheProduto= (props)=>{
    return (
       
    <View >{DetalheProduto}
     <Image style={styles.imagem}
       source={require('../assets/alcool.png')}          />

       <View style={styles.container}>

         <Text style={styles.descricao}>Quantidade: 80</Text>
      <Text style={styles.descricao}>Preço Unidade: R$ 4,50</Text>
      
        
       
       </View>
    
    </View>
    );
}

DetalheProduto.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam("nomeDoProduto")
    }
  }
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        elevation: 1.5,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3
        }
    },

    imagem:{
        height: 400,
        width: 400,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    descricao:{
        color: '#121212',
        fontSize: 17,
        paddingLeft: 10,
        paddingRight: 20
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    tituloNome:{
        color: 'gray'
    }
})

export default DetalheProduto;
