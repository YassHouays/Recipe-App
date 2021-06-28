import React from 'react';
import { StyleSheet, Text, View,Button,Image,FlatList } from 'react-native';
import axios from 'axios';
import Data from './app/components/detailRecipe.json'


class DetailRecipe extends React.Component {
  state = {
    recette: {}
  }

  componentDidMount() {
    const data = Data

    axios.get(`https://api.spoonacular.com/recipes/${this.props.route.params.item.id}/information?apiKey=bbf788cda4f34fcc8b58403847622e97`)
      .then(res => {
        const recette = res.data;
        this.setState({ recette });
        console.log(recette);
      })
    // this.setState({recette: data})
  }
  
  render() {
    const renderItem = ({ item }) => (
        <Text style={styles.ingredients}><Text style={styles.value}>{(item.amount)}</Text> of <Text style={styles.value}>{(item.unit)}</Text> {item.name}</Text>
    );
    return (
      <View style={styles.container}>
        <View style={styles.colLeft}>
          <Image source={{uri: this.props.route.params.item.image}} style={styles.recipeImage}/>
          <Text style={styles.colLeftText}>{this.props.route.params.item.title}</Text>
        </View> 
        <View style={styles.colRight}>
          <Text style={styles.titleH2}>Détails</Text>
          <Text>Vegetarian : <Text style={styles.value}>{(this.state.recette.vegetarian) ? 'Oui' : 'Non' }</Text></Text>
          <Text>Vegan : <Text style={styles.value}>{(this.state.recette.vegan) ? 'Oui' : 'Non' }</Text></Text>
          <Text>Price : <Text style={styles.value}>{this.state.recette.pricePerServing} $</Text></Text>

          <Text style={styles.spacer}> </Text>

          <Text style={styles.titleH2}>Ingrédients</Text>
          <FlatList
                style={styles.ingredientsContainer}
                data={this.state.recette.extendedIngredients}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // display:'flex',
  },
  recipeImage: {
    width:500,
    height: 500,
    alignSelf: 'center',
    textAlign: 'center',
    padding :15,
    margin : 'auto',
    marginTop : 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
},
colLeft: {
  flex: 0.5, //why this doesnt work???
  height: 600,
  padding: 10,

  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
colLeftText: {
  color: '#ffa500',
  marginTop: 20,
  fontSize: 20

},
colRight: {
  flex: 0.5, //why this doesnt work???
  height: 100,
  padding: 10,

  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
titleH2: {
  fontSize: 30,
  marginBottom: 10,
},
spacer: {
  height: 1,
  width: 500,
  backgroundColor: '#000',
  margin: 20
},
value: {
  fontWeight: 'bold',
  color: '#ffa500',
},
ingredientsContainer: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
ingredients: {
  color: '#000'
}
});

export default DetailRecipe;