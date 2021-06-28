import React from 'react';
import { StyleSheet, Text, View,Button, FlatList,Image,TouchableOpacity } from 'react-native';
import Data from './app/components/data.json'
class ListRecipe extends React.Component {
  
  render() {
    const data = Data
    const renderItem = ({ navigation,item }) => (
      <View>
            <TouchableOpacity style={styles.containerRecipe} onPress={ () => this.props.navigation.navigate('DetailRecipe',{ item: item})} >
              <Image source={{uri: item.image}} style={styles.recipeImage}/>
              <Text style={styles.recipeText}>{item.title}</Text>
            </TouchableOpacity>
      </View>
    );
    return (
      <View style={styles.container}>
            <Text style={styles.title}> Liste des ingrédients </Text>
        <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeImage: {
    width:250,
    height :250,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    padding :15,
    margin : 'auto',
    marginTop : 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
},
containerRecipe:{
  backgroundColor: '#ffa500',
  paddingTop : 20,
  paddingBottom : 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  marginTop: 20,
  alignItems : 'center'
},
recipeText:{
  marginTop : 10
},
title:{
  textAlign: 'center',
  marginTop : 20
}
});

export default ListRecipe;