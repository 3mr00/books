import React from "react";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import NavBar from "../../components/NavBar/NavBar";
import BooksList from "../../components/BooksList/BooksList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderBanner />
      <BooksList />
    </div>
  );
};

export default Home;
