import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import Nav from "./components/Nav";
import Photo from "./components/Photo";
import APP_KEY from "./config";

const apiKey = APP_KEY;

const App = () => {
  const [images, SetImages] = useState([]);
  const [search, setSearch] = useState([""]);
  const [query, setQuery] = useState("skateboarding");

  useEffect(() => {
    getImages();
  }, [query]);

  const getImages = async () => {
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`
    );
    const data = await response.json();
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
    <Router>
      <div className="container">
        <Form onAdd={updateSearch} onSubmit={searchImages} />
        <Nav onChange={updateQuery} />

        <div className="photo-container">
          <Routes>
            <Route
              path="/search/:query"
              element={<Photo imgArray={images} />}
            />
          </Routes>
          {/* <Photo imgArray={images} /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
