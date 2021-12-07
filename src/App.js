import { useEffect, useState } from "react";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Photo from "./components/Photo";
import APP_KEY from "./config";

let apiKey = APP_KEY;

let API_URL =
  "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key={apiKey}&tags={query}&per_page=24&format=json&nojsoncallback=1";

const App = () => {
  const [images, SetImages] = useState([]);
  const [search, setSearch] = useState([""]);
  const [query, setQuery] = useState("mountain");

  useEffect(() => {
    getImages();
  }, [query]);

  const getImages = async () => {
    const res = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    );
    const data = await res.json();
    SetImages(data.photos.photo);
  };

  const updateQuery = (str) => {
    setQuery(str);
  };

  const updateSearch = (str) => {
    setSearch(str);
  };

  const searchImages = () => {
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <Form onAdd={updateSearch} onSubmit={searchImages} />
      <Nav onChange={updateQuery} value={search} />
      <div className="photo-container">
        <Photo imgArray={images} />
      </div>
    </div>
  );
};

export default App;
