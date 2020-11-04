import React from 'react';
import axios from 'axios';
import prefectures from './prefectures.json';

function TopFiveCard({ county, index }) {
  const [imageUrl, setImageUrl] = React.useState('');

  const countyCodeAPI = county.code;
  const countyPrefecture = prefectures.filter((item) => {
    const countyCodePrefecture =
      item.code.toString().length === 1 ? '0' : `${item.code.toString()}`;
    return countyCodeAPI === countyCodePrefecture;
  })[0].prefecture;

  const handleFetchError = (error) => {
    console.error(
      'Une erreur est survenue lors de la communication avec le service de données'
    );
    console.error(error);
  };

  const fetchCityImages = (cityName) => {
    const q = encodeURIComponent(`${cityName} city France`);
    return axios
      .get(
        `https://pixabay.com/api/?key=18980832-52c1bd61891f49f979ceb1b7b&q=${q}&image_type=photo`
      )
      .then((response) => response.data)
      .then((data) => {
        setImageUrl(data.hits[0].webformatURL);
      })
      .catch((err) => {
        setImageUrl(
          'https://cdn.pixabay.com/photo/2013/12/22/17/34/french-countryside-232571_1280.jpg'
        );
        handleFetchError(err);
      });
  };

  React.useEffect(() => {
    fetchCityImages(countyPrefecture); // eslint-disable-next-line
  }, []);

  return (
    <div
      className="top-five-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay">
        <div className="rank">{index}</div>
        <h3>{county.nom}</h3>
        <ul>
          <li>
            <em>Hospitalisés :</em> {county.hospitalises}
          </li>
          <li>
            <em>En réanimation :</em> {county.reanimation}
          </li>
          <li>
            <em>Nouvelles hospitalisations :</em>{' '}
            {county.nouvellesHospitalisations}
          </li>
          <li>
            <em>Nouvelles réanimations :</em> {county.nouvellesReanimations}
          </li>
          {/* <li> //this was kept in case anyone else in the groups thought we should add these data
          <em>Décès (cumulés) :</em> {county.deces}
        </li>
        <li>
          <em>Guéris (cumulés) :</em> {county.gueris}
        </li> */}
        </ul>
        <p className="ratio">
          Taux d'occupation des lits en réa : {county.ratio}%
        </p>
      </div>
    </div>
  );
}

export default TopFiveCard;
