import { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/Hero-Section/Hero-Section";
import Navbar from "./components/NavBar/NavBar";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchGenres,
  fetchFaqs,
} from "./api/api";
import Section from "./components/Section/Section";
import FaqSection from "./components/Faqs/Faqs";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    generateDatas();
  }, []);

  const generateDatas = async () => {
    const TopData = await fetchTopAlbums();
    const NewData = await fetchNewAlbums();
    const SongData = await fetchSongs();
    const GenresData = await fetchGenres();
    const fetchFaq = fetchFaqs();

    const newGenre = { key: "all", label: "All" };
    setTopAlbumsData(TopData);
    setNewAlbumsData(NewData);
    setSongData(SongData);
    GenresData.unshift(newGenre);
    setGenresData(GenresData);
    setFaqs(fetchFaq);
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      <div className="albums">
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="album" title="New Albums" />
        <Section
          data={songData}
          type="song"
          title="Songs"
          genres={genresData}
        />
        <FaqSection data={faqs} />
      </div>
    </div>
  );
}

export default App;
