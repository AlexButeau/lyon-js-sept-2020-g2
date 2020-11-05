import React from 'react';
import countyList from './datas/countyList.json'; // data from https://geo.api.gouv.fr/departements

class SearchBar extends React.Component {
  handleCountySelection = (event) => {
    const countyCode = event.target.value;
    if (countyCode !== '') {
      const { onSelectCounty } = this.props;
      onSelectCounty(countyCode);
      document.querySelector('select').selectedIndex = 0;
    }
  };

  render() {
    return (
      <div className="searchBar">
        <div className="select-wrapper">
          {/* <p>Sélectionnez un département</p> */}
          <div className="custom-select">
            <select
              name="counties"
              id="county-select"
              onChange={this.handleCountySelection}
            >
              <option value="">- Merci de choisir une option &#8595;-</option>
              {countyList.map((county) => (
                <option key={county.code} value={county.code}>
                  {county.code}-{county.nom}
                </option>
              ))}
            </select>
          </div>
          <p className="description">
            Sélectionnez un département pour voir le détail des derniers
            chiffres de l'épidémie
          </p>
        </div>
      </div>
    );
  }
}

export default SearchBar;
