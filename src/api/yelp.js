import axios from "../../node_modules/axios";

export default yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IB4OO5Vlq4fVjafaP59HHv439Ha8bUy5T3BDrHK71GAXrFy8E3GC6BXuBqESz7mU4QZ1TXrh7T3UKd7Pp6i9Weg0idL8Cwpeg607knSPTYbcEPleBeGKZKsB2915XnYx"
  }
});
