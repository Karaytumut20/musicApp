import React ,{useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import music_data from "./music-data.json";
import SongCard from "./SongCard";
import styles from "./SongCard.style";
import SearchBar from './components/SourceBar';

function App() {

const [list,setList] = useState(music_data);

  const renderSong = ({ item }: { item: any }) => (
    <SongCard song={item} />
  );

  const renderSeparator = () => <View style={styles.seperator} /> // "styles" nesnesini kullanıyoruz

  const handleSearch = text =>{
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

     return currentTitle.indexOf(searcedText) > -1;
    });

    setList(filteredList);
  };


  return (
    <View style={styles.container}>
    <SearchBar onSearch={handleSearch} />
    <FlatList
      keyExtractor={item => item.id}
      data={list}
      renderItem={renderSong}
      ItemSeparatorComponent={renderSeparator}
    />
  </View>
  );
}

export default App;
