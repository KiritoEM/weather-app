const WeatherCard = ({img , degree}) => {
  return (
    <div className="weather-box">
      <div className="weather-box__img">
        <img src={`/images/${img}`} alt="" className="icon" />
      </div>
      <div className="weather-box__content">
        <h6 className="text-center">{degree}</h6>
      </div>
    </div>
  );
};

export default WeatherCard;
