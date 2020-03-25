import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const ResultsShowScreen = ({ navigation }) => {
  // diğer taraftan id olarak parametre gönderdiğimiz için böyle yapıyoruz

  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(()=>{
      getResult(id);
  },[]);
  if(!result) {
      return null;
  }
  return (
    <View>
      {/* <Text>{result.name}</Text> bu error veriyor çünkü ilk başta null onun için if statement ekleniyor yukarıya */}
      <FlatList data={result.photos} keyExtractor={(item)=> item} renderItem={({item})=> {
          return (
              <View>
                  <Image style={style.image} source={{ uri: item }} />
              </View>
          );
      }} />
    </View>
  );
};

const style = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginBottom:15
    }
});

export default ResultsShowScreen;
