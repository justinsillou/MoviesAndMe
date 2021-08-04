// Components/Search.js

import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native';
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      films: []
    }
    this.searchedText = ""
  }

  _loadFilms(){
    if (this.searchedText.length > 0){
      getFilmsApiWithSearchedText(this.searchedText).then(data => this.setState({films: data.results}))
    }
  }

  _searchTextInputChanged(text){
    this.searchedText = text
  }

  render(){
    console.log("RENDER")
    return(
      <View style={styles.main_container}>
        <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="Titre du film"/>
        <Button title="Recherche" onPress={() => this._loadFilms()}/>
        <FlatList
          // data={[{key: 'a'}, {key: 'b'}]}
          data={this.state.films}
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
