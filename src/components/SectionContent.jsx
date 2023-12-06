import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WeatherCard from "./childrenComponens/WeatherCard";

const SectionContent = () => {
  return (
    <div className="section-content">
      <div className="header">
        <h5>Recherchez une ville</h5>
      </div>
      <div className="search-bar">
        <div className="input">
          <input type="text" name="" id="" placeholder="Nom de la ville ..." />
        </div>
        <div className="button">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
      </div>
      <div className="weather-stat">
        <div className="row gx-4">
          <div className="col-6">
            <div className="morning">
              <div className="subtitle">
                <h5>Matin</h5>
              </div>
              <WeatherCard degree="23°C" img="cloudy-day-3.svg" />
            </div>
          </div>

          <div className="col-6">
            <div className="Afternoon">
              <div className="subtitle">
                <h5>Aprés midi</h5>
              </div>
              <WeatherCard degree="26°C" img="cloudy-day-3.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
