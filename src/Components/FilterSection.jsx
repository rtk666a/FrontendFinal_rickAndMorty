import React from "react";

import "./Styles.css";

import FilterButton from "./FilterButton";
import InputName from "./InputName";

const FilterSection = props => {
  return (
    <div className="filter_section">
      <div className="section_header">
        <span className="header_text">Filters</span>
      </div>

      <div className="section_content">
        <div className="section_container">
          <div className="section_container_title">
            <h2 className="section_title">Name Filter</h2>
          </div>
          <div className="filter_content">
            <div className="filter_container"></div>
            <InputName
              onFilterClick={props.onFilterClick}
              filterButtonType="name"
            />
          </div>
        </div>
        <div className="section_container">
          <div className="section_container_title">
            <h2 className="section_title">Gender Filter</h2>
          </div>
          <div className="filter_content">
            <div className="filter_container">
              <FilterButton
                buttonText="All"
                onFilterClick={props.onFilterClick}
                filterButtonType="gender"
                active={props.filters.filterGender === null ? true : false}
              />
              <FilterButton
                buttonText="Male"
                onFilterClick={props.onFilterClick}
                filterButtonType="gender"
                active={props.filters.filterGender === "Male" ? true : false}
              />
              <FilterButton
                buttonText="Female"
                onFilterClick={props.onFilterClick}
                filterButtonType="gender"
                active={props.filters.filterGender === "Female" ? true : false}
              />
              <FilterButton
                buttonText="unknown"
                onFilterClick={props.onFilterClick}
                filterButtonType="gender"
                active={props.filters.filterGender === "unknown" ? true : false}
              />
            </div>
          </div>
        </div>

        <div className="section_container">
          <div className="section_container_title">
            <h2 className="section_title">Status Filter</h2>
          </div>
          <div className="filter_content">
            <div className="filter_container">
              <FilterButton
                buttonText="All"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === null ? true : false}
              />
              <FilterButton
                buttonText="Alive"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === "Male" ? true : false}
              />
              <FilterButton
                buttonText="Dead"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === "Female" ? true : false}
              />
              <FilterButton
                buttonText="unknown"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === "unknown" ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
