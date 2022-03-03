import React from "react";
import { Link } from "react-router-dom";
import covidImage from "../assets/images/covid-19.jpg";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

function Home() {
  const breakpoints = useBreakpoint();
  const { xs, sm, md, lg } = breakpoints;
  return (
    <div className="home" data-testid="heading">
      {lg ? (
        <h1>
          COVID-19 Appointment <Link to={"/signup"}>Register Now</Link>
        </h1>
      ) : md ? (
        <h2>
          COVID-19 Appointment <Link to={"/signup"}>Register Now</Link>
        </h2>
      ) : sm ? (
        <h3>
          COVID-19 Appointment <Link to={"/signup"}>Register Now</Link>
        </h3>
      ) : (
        <h4>
          COVID-19 Appointment <Link to={"/signup"}>Register Now</Link>
        </h4>
      )}

      <div className="homeImage">
        <img
          style={{ width: lg ? "100%" : md ? "90%" : sm ? "80%" : "70%" }}
          src={covidImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
