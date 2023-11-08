import React, { useEffect, useState } from "react";
import "./Section.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const Section = ({ title, data, type, genres }) => {
  const [carouselToggle, setCauroselToggle] = useState(true);
  const [filteredSongsData, setFilteredSongsData] = useState([]);
  const [isSelected, setIsSelected] = useState("all");

  useEffect(() => {
    handlefilterSongs();
  }, [data]);

  useEffect(() => {
    handlefilterSongs();
  }, [isSelected]);

  const handleToggle = () => {
    setCauroselToggle(!carouselToggle);
  };

  const handlefilterSongs = () => {
    console.log(isSelected);
    if (type === "song") {
      if (isSelected === "all") {
        setFilteredSongsData(data);
      } else {
        const filteredData = data.filter(
          (item) => item.genre.key === isSelected
        );
        setFilteredSongsData(filteredData);
      }
    } else {
      setFilteredSongsData(data);
    }
  };

  const selectGenre = (key) => {
    setIsSelected(key);
    handlefilterSongs();
  };

  return (
    <div className={`${type === "song" ? "songsBorder" : ""}`}>
      <div className="header">
        <h3>{title}</h3>

        <h4 className="toggleText" onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "song" ? (
        <div className="genres">
          {genres.map((genre) => (
            <div className="genreNameSection">
              <h5
                className={`$"genreName"  ${
                  isSelected === genre.key ? "selectedGenre" : ""
                }`}
                key={genre.key}
                onClick={() => selectGenre(genre.key)}
              >
                {genre.label}
              </h5>
            </div>
          ))}
        </div>
      ) : null}

      {filteredSongsData.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="cardsWrapper">
          {!carouselToggle ? (
            <div className="wrapper">
              {filteredSongsData.map((item) => (
                <Card data={item} type={type} genres={genres} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredSongsData}
              renderComponent={(filteredSongsData) => (
                <Card data={filteredSongsData} type={type} genres={genres} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
