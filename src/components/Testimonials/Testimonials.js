import React, { useContext, useEffect, useRef, useState } from "react";

import Slider from "react-slick";

import ReactCardFlip from "react-card-flip";
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { ThemeContext } from "../../contexts/ThemeContext";
import { testimonialsData } from "../../data/testimonialsData";
import { socialsData } from "../../data/socialsData";

import "./Testimonials.css";
import { videoData } from "../../data/videoData";
import Card from "../Cards/Card";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowDimensions);
  return windowDimensions;
}

function Testimonials() {
  const { theme } = useContext(ThemeContext);
  const sliderRef = useRef();
  const [isFlipped, setFlip] = useState(false);
  const { height, width } = useWindowDimensions();
  function handleClick() {
    setFlip(!isFlipped);
  }

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: width < 1200 ? 1 : 2,
    slidesToScroll: 1,
    autoplay: false,
    margin: 3,
    loop: true,
    // autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
    setFlip(false);
    console.log(height);
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
    setFlip(false);
    console.log(width);
  };

  return (
    <div
      id="test"
      className="test"
      style={{ backgroundColor: theme.secondary }}
    >
      {videoData.length > 0 && (
        <div
          className="testimonials"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="testimonials--header">
            <h1 style={{ color: theme.secondary }}>Posts</h1>
          </div>
          <div className="testimonials--body">
            {/* <FaQuoteLeft className="quote" style={{ color: theme.secondary }} /> */}
            <div
              className="testimonials--slider"
              style={{ backgroundColor: theme.primary }}
            >
              <Slider {...settings} ref={sliderRef}>
                {videoData.map((video) => (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ReactCardFlip
                      isFlipped={isFlipped}
                      flipDirection="horizontal"
                    >
                      <div>
                        <Card
                          title={video.title}
                          platform={video.platform}
                          url={video.url}
                          header={video.heading}
                          description={video.description}
                          func={handleClick}
                          button={"Read More"}
                          isdesc={true}
                          width={width}
                          icon={video.icon}
                        />
                      </div>

                      <div>
                        <Card
                          title={video.title}
                          platform={video.platform}
                          description={video.description}
                          func={handleClick}
                          button={"Watch Video"}
                          isdesc={false}
                          width={width}
                          icon={video.icon}
                        />
                      </div>
                    </ReactCardFlip>
                  </div>
                  // <div className="single--testimony" key={test.id}>
                  //   <div className="testimonials--container">
                  //     <div
                  //       className="review--img"
                  //       style={{
                  //         backgroundColor: theme.secondary,
                  //       }}
                  //     >
                  //       <img src={test.image} alt={test.name} />
                  //     </div>
                  //     <div
                  //       className="review--content"
                  //       style={{
                  //         backgroundColor: theme.secondary,
                  //         color: theme.tertiary,
                  //       }}
                  //     >
                  //       <p>{test.text}</p>
                  //       <h1>{test.name}</h1>
                  //       <h4>{test.title}</h4>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </Slider>
              <button
                className="prevBtn"
                onClick={gotoPrev}
                style={{ backgroundColor: theme.secondary }}
              >
                <FaArrowLeft
                  style={{ color: theme.primary }}
                  aria-label="Previous testimonial"
                />
              </button>
              <button
                className="nextBtn"
                onClick={gotoNext}
                style={{ backgroundColor: theme.secondary }}
              >
                <FaArrowRight
                  style={{ color: theme.primary }}
                  aria-label="Next testimonial"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
