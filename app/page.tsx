"use client";
import { FC } from "react";
import "@styles/Home.scss";
import "@styles/global.scss";
import Title from "@/components/Title";
import Down from "@/components/Down";
import Article from "@/components/Article";
import Profile from "@/components/Profile";
import "@/styles/bottom.scss";
const Home: FC = () => {
  return (
    <div className="root">
      <div className="home">
        <Title />
        <h2 className="description">{process.env.NEXT_PUBLIC_DESCRIPTION}</h2>
        <Down />
      </div>
      <div className="bottom">
        <Article />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
