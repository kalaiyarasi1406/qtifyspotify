import React from "react";
import "./Card.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className="wrappe">
              <div className="card">
                <img src={image} alt="album" />
                <div className="banner">
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className="chip"
                  ></Chip>
                </div>
              </div>
              <div className="titleWrappers">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title, durationInMs } = data;
        return (
          <Tooltip title={`${durationInMs} Seconds`} placement="top" arrow>
            <div className="wrappe">
              <div className="card">
                <img src={image} alt="album" />
                <div className="banner">
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className="chip"
                  ></Chip>
                </div>
              </div>
              <div className="titleWrapper">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
