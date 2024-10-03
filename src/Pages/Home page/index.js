import { useEffect, useRef, useState } from "react";
import MainLayout from "../../Components/Layouts/MainLayout";
import RenderAll from "../../Components/RenderAllMovies";
import "./style.css";
import TopActors from "../../Components/Top Actors";
import MovieStudio from "../../Components/Movie Studios";

export default function HomePage() {
  const [moveUp, setMoveUp] = useState(false);
  const targetElementRef = useRef();

  const scrollToElement = () => {
    if (targetElementRef.current) {
      targetElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  

  return (
    <MainLayout>
      <div className="home-primary-parent">
        <div className="home-container">
          <div className="hero-bg"></div>
          <div className="hero-title">
            <p onClick={scrollToElement} className={ `hero-text ${ moveUp ? "move-up" : "" } ` }> IMDb Top 250 Movies </p>
          </div>
        </div>
        
        <div  className="render">
        <div className="line"></div>
        <div  ref={targetElementRef} className="line line-2"></div>
          <RenderAll />
        </div>
        <TopActors />
        <br/>
        <MovieStudio />
      </div>
    </MainLayout>
  );
}
