import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ResultsList = ({title, results}) => {

    return ( 
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{ item.name } </Text>
                        </View>
                    );
                }}
            />
        </View>
    );

};
const style = StyleSheet.create({
    title: {
        fontSize:18,
        fontWeight: 'bold'
    }
});
export default ResultsList;
