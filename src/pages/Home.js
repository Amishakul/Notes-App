import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Vasundhara Academy</h1>
          <p>There is no substitute to hardwork</p>
          <Link to="/menu">
            <button>VIEW NOTES</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
