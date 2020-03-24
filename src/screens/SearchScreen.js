import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
// import yelp from '../api/yelp';
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    // try Catch kullanılabilir
    console.log("DENEME");

    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm, // term: term demek oluyor bu
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Somthing Went Wrong");
    }
  };
  // call searchApi when component first rendered
  //   searchApi('pasta') sürekli çalışıyor
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      <Text>Search Screen</Text>
      <Text> We Have Found {results.length} results</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
