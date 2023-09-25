import React from "react";
import { TextInput,Vibration,View } from "react-native";
import styles from "./SourceBar.styles";


const SearchBar = (props) => {

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Ara..." onChangeText={props.onSearch}/>
        </View>
    );
};

export default SearchBar;