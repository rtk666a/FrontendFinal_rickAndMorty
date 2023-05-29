import React from "react";

import "./Styles.css";

const DropdownMenu = props => {
    return (
        <div>
            <div className="menu_status">
                <div className="dropdown_title">
                    <label for="filters">Status</label>
                </div>
                <select id="filters">
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="menu_gender">
                <div className="dropdown_title">
                    <label for="filters">Gender</label>
                </div>
                <select id="filters">
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </div>
    );
};

export default DropdownMenu;
