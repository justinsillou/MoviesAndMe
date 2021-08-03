// Components/Search.js

import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native';
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  _loadFilms(){
    getFilmsApiWithSearchedText("star").then(data => console.log(data))
  }

  render(){
    return(
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film"/>
        <Button title="Recherche" onPress={() => {}}/>
        <FlatList
          // data={[{key: 'a'}, {key: 'b'}]}
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    flex: 1
  },

  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
