import React from "react";
import { Link } from "react-router-dom";
import covidImage from "../assets/images/covid-19.jpg";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

function Home() {
  const breakpoints = useBreakpoint();
  const { sm, md, lg } = breakpoints;
  return (
    <div className="home">
      <div
        className={
          lg
            ? "largeText"
            : md
            ? "mediumText"
            : sm
            ? "smallText"
            : "smallerText"
        }
      >
        COVID-19 Appointment <Link to={"/signup"}>Register Now</Link>
      </div>

      <div className="homeImage">
        <img
          className={
            lg ? "lgWidth" : md ? "mdWidth" : sm ? "smWidth" : "xsWidth"
          }
          src={covidImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
