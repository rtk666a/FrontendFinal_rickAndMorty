import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./App.css";

import Data from "./assets/data";
import Character from "./Components/Character";
import FilterSection from "./Components/FilterSection";
import "./Components/Styles.css";
import DropdownMenu from "./Components/DropdownMenu";

class App extends Component {
  state = {
    filters: {
      filterName: "",
      filterGender: null,
      filterStatus: null
    },
    data: { ...Data }
  };

  filterHandler = (filter, filterType) => {
    let stateFilters = cloneDeep(this.state.filters);

    if (filterType === "name") {
      stateFilters.filterName = filter;
    }

    if (filterType === "gender") {
      stateFilters.filterGender = filter;
      if (filter === "All") {
        stateFilters.filterGender = null;
      }
    }

    if (filterType === "status") {
      stateFilters.filterStatus = filter;
      if (filter === "All") {
        stateFilters.filterStatus = null;
      }
    }

    this.setState({ filters: stateFilters });
  };

  dataFiltering = completeData => {
    let filteredData = cloneDeep(completeData);
    let filteredResults = cloneDeep(completeData.data.results);

    if (this.state.filters.filterName !== "") {
      filteredResults = filteredResults.filter(elem => {
        return elem.name.toUpperCase().includes(this.state.filters.filterName.toUpperCase());
      })
    }

    if (this.state.filters.filterGender) {
      filteredResults = filteredResults.filter(elem => {
        return elem.gender === this.state.filters.filterGender;
      });
    }

    if (this.state.filters.filterStatus) {
      filteredResults = filteredResults.filter(elem => {
        return elem.status === this.state.filters.filterStatus;
      });
    }

    filteredData.data.results = filteredResults;

    return filteredData;
  };

  render() {
    const filteredData = this.dataFiltering(this.state);
    return (
      <div className="App">
        <div className="content">
          <div className="title"> THE RICK AND MORTY API </div>
          <div className="info">
            <div className="main_content">
              {filteredData.data.results.map(item => {
                return <Character key={item.id} characterInfo={item} />;
              })}
            </div>
            <div className="button_content">
              <FilterSection
                filters={this.state.filters}
                onFilterClick={this.filterHandler}
              />
              <DropdownMenu
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
