import React from "react";
import "../About/About.css";

const AnimatedWordFlip = () => {
  return (
    <section className="app__animator-wrapper">
      <div className="app__animator-wrapper_firstWord">
        <span className="app__animator-firstWord">Live</span>
        <span className="app__animator-firstWord">Love</span>
        <span className="app__animator-firstWord">Inspire</span>
        <span className="app__animator-firstWord">Improve&nbsp;</span>
        <span className="app__animator-firstWord">Learn</span>
      </div>
      <div className="app__animator-wrapper_secondWord">
        <span className="app__animator-secondWord">upon</span>
        <span className="app__animator-secondWord">&nbsp;to add&nbsp;</span>
        <span className="app__animator-secondWord">the</span>
        <span className="app__animator-secondWord">you</span>
        <span className="app__animator-secondWord">life</span>
      </div>
      <div className="app__animator-wrapper_thirdWord">
        <span className="app__animator-thirdWord">Slow</span>
        <span className="app__animator-thirdWord">Haters</span>
        <span className="app__animator-thirdWord">Younger</span>
        <span className="app__animator-thirdWord">Value</span>
        <span className="app__animator-thirdWord">Failure</span>
      </div>
    </section>
  );
};

export default AnimatedWordFlip;
