import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: result.image_url }} />
      <Text style={style.name}>{result.name}</Text>
      <Text >{result.rating} Starts, {result.review_count}</Text>

    </View>
  );
};

const style = StyleSheet.create({
  // bunu vermezsen ekrana yazdıramıyor eğer dışarıdan alacaksan resmi uri ile alacaksın
  image: {
    width: 250,
    height: 100,
    borderRadius: 4,
  },
  container: {
    marginLeft: 10
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
