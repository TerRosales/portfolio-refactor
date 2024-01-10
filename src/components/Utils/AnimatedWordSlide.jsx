// import React from "react";
// import {
//   TbBrandVite,
//   TbBrandJavascript,
//   TbBrandTailwind,
// } from "react-icons/tb";
// import { SiAstro, SiBootstrap, SiAdobephotoshop } from "react-icons/si";
// import {
//   LiaHtml5,
//   LiaCss3Alt,
//   LiaSass,
//   LiaFigma,
//   LiaWordpressSimple,
//   LiaNpm,
// } from "react-icons/lia";

// const skills = [
//   {
//     icon: <TbBrandJavascript />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <LiaHtml5 />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <LiaCss3Alt />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <SiAstro />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <TbBrandTailwind />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <LiaSass />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <SiBootstrap />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <LiaFigma />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <SiAdobephotoshop />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <LiaWordpressSimple />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <LiaNpm />,
//     familiarity: "filler",
//     projects: "",
//   },
//   {
//     icon: <TbBrandVite />,
//     familiarity: "filler",
//     projects: "",
//   },
// ];

// const iconSize = "3em";

// const AnimatedWordSlide = () => {
//   return (
//     <div>
//       {skills.map((skill, index) => (
//         <div className="app__about-animationWordSlide" key={index}>
//           <ul className="app__about-carousel-list">
//             <li className="app__about-carousel-listItem">
//               {React.cloneElement(skill.icon, { size: iconSize })}
//             </li>
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedWordSlide;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  TbBrandVite,
  TbBrandJavascript,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiAstro, SiBootstrap, SiAdobephotoshop } from "react-icons/si";
import {
  LiaHtml5,
  LiaCss3Alt,
  LiaSass,
  LiaFigma,
  LiaWordpressSimple,
  LiaNpm,
} from "react-icons/lia";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const skills = [
  {
    icon: <TbBrandJavascript />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <LiaHtml5 />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <LiaCss3Alt />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <SiAstro />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <TbBrandTailwind />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <LiaSass />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <SiBootstrap />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <LiaFigma />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <SiAdobephotoshop />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <LiaWordpressSimple />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <LiaNpm />,
    familiarity: "filler",
    projects: "",
  },
  {
    icon: <TbBrandVite />,
    familiarity: "filler",
    projects: "",
  },
];

const iconSize = "3.2em";

const AnimatedWordSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    speed: 400,
    slidesToShow: 5, // Set the number of icons to show at a time
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {skills.map((skill, index) => (
        <div className="app__about-animationWordSlide" key={index}>
          <ul className="app__about-carousel-list">
            <li className="app__about-carousel-listItem">
              {React.cloneElement(skill.icon, { size: iconSize })}
            </li>
          </ul>
        </div>
      ))}
    </Slider>
  );
};

export default AnimatedWordSlide;
