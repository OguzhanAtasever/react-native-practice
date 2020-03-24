import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default useResults = () => {
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
  return [searchApi, results, errorMessage];
};
