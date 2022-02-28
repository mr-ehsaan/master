import React from "react";
import covidImage from "../assets/images/covid-19.jpg";

function Home() {
  return (
    <div className="home">
      <h2>COVID-19 Appointment</h2>
      <div>
        <img src={covidImage} alt="" />
      </div>
    </div>
  );
}

export default Home;
