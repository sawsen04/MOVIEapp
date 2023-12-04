import React from "react";
import "./styleSectionOne.css";
import { RiSearchLine } from "react-icons/ri";
import ListSectionOne from "./ListSectionOne";
import { TbCaretUpDownFilled } from "react-icons/tb";
import Button from "./Button";

function SectionOne() {
  return (
    <div className="section-one">
      <div className="search-section-one">
        <input type="text" placeholder="Enter Keywords..."></input>
        <div className="search-icon">
          <RiSearchLine size={20} color="rgb(41, 182, 246)" />
        </div>
      </div>
      <div className="elements-sec-one">
        <div className="dropdown-parent">
          <ListSectionOne title={"Type"} />
          <div className="dropdown">
            <ul className="dropdown-menu">
              <li>Any</li>
              <li>Movies</li>
              <li>Tv Series</li>
            </ul>
          </div>
        </div>

        <div className="dropdown-parent">
          <ListSectionOne title={"Quality"} />
          <div className="dropdown">
            <ul className="dropdown-menu">
              <li>Any</li>
              <li>HDs</li>
              <li>SD</li>
              <li>TS</li>
              <li>CAM</li>
              <li>DVD</li>
            </ul>
          </div>
        </div>
        <div className="elements-sec-one">
          <div className="dropdown-parent">
            <ListSectionOne title={"Rating"} />
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li>Any</li>
                <li>From 9-10</li>
                <li>From 8-9</li>
                <li>From 7-8</li>
                <li>From 6-7</li>
                <li>From 5-6</li>
              </ul>
            </div>
          </div>

          <div className="dropdown-parent">
            <ListSectionOne title={"Sort By"} />
            <div className="dropdown">
              <ul className="dropdown-menu">
                <li>Any</li>
                <li>Trending</li>
                <li>Latest Movies</li>
                <li>Most Watched</li>
                <li>IMDB Rate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-sec-one">
        <Button
          icon={<TbCaretUpDownFilled size={17} />}
          title={"FILTER"}
          padding={"15px 20px"}
        />
      </div>
    </div>
  );
}

export default SectionOne;
