import React from 'react';
import { SafeAreaView, TouchableOpacity,View, FlatList, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import { NavigationContainer,Navigate } from '@react-navigation/native';
import ListItem from './CriarMetas'
{/* array */}
const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Metas = ( {navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>

      <TextInput ></TextInput>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        
      />


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarMetas')}>
                <Text>
                    Criar Nova Meta
                </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#7f7f7f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button:{
    position:'absolute',
    backgroundColor:'#ccc',
    borderRadius:50,
    paddingVertical: 8,
    width:'50%',
    alignSelf:'center',
    bottom:'100%',
    alignItems:'center',
    justifyContent:'center'
},
buttonText:{
    fontSize:25,
    color:'#ccc'
},
});

export default Metas;