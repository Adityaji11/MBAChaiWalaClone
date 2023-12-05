import React from "react";
import IntroVideo from "./components/IntroVideo"
import Section from "./components/Section";
import Footer from "./components/Footer";
import Misc from "./components/Misc";

import "./css/App.css"
import "./css/video.css"
import "./css/section.css"
import "./css/fotter.css"
import "./css/misc.css"

import freshTopicImg from "./assets/academy.png"
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";



import data from "./data/Data.json"


const yellow = "#fff100",
pink = "#ed1e79",
white = "#fff",
brown = "#6d3d0f";

function App() {

  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala,} = data;

  return (
    <>
    <IntroVideo/>

    {/* freshTopic */}
    <Section h3={freshTopic.heading} text={freshTopic.text} btnTxt={freshTopic.btn} imgSrc={freshTopicImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink}/>
    {/* freshTopic2 */}
    <Section h3={freshTopic2.heading} text={freshTopic2.text} btnTxt={freshTopic2.btn} imgSrc={freshTopic2Img} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink}/>
    {/* tedTalks */}
    <Section h3={tedTalks.heading} text={tedTalks.text} btnTxt={tedTalks.btn} imgSrc={tedTalksImg} backgroundColor={yellow} headingColor={pink} textColor={pink} btnBgColor={pink} btnColor={yellow}/>
    {/* franchise */}
    <Section h3={franchise.heading} text={franchise.text} btnTxt={franchise.btn} imgSrc={franchiseImg} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow}/>
    {/* map */}
    <Section h3={map.heading} text={map.text} btnTxt={map.btn} imgSrc={mapImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} hasBtn={false}/>
    {/* courses */}
    <Section h3={courses.heading} text={courses.text} btnTxt={courses.btn} imgSrc={coursesImg} backgroundColor={yellow} headingColor={pink} textColor={pink} btnBgColor={pink} btnColor={yellow} imgSize={"40%"}/>
    {/* album */}
    <Section h3={album.heading} text={album.text} btnTxt={album.btn} imgSrc={albumImg} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow}/>
    {/* barat */}
    <Section h3={barat.heading} text={barat.text} btnTxt={barat.btn} imgSrc={baratImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink}/>
    {/* chaiwala */}
    <Section h3={chaiwala.heading} text={chaiwala.text} btnTxt={chaiwala.btn} imgSrc={chaiWalaImg} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow}/>
    <Footer/>
    <Misc/>
    </>

  );
}

export default App;
