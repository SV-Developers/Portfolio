import React, { useContext } from "react";
import ReactPlayer from "react-player";
import "./Card.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Card = (props) => {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <div className="custom-card dark:bg-white-900 dark:text-gray-100 w-full">
      <div
        className={`p-4 shadow-md dark:bg-white-900 dark:text-gray-100 rounded-xl h-full ${
          props.width > 1560 || props.width < 1200
            ? "max-w-lg"
            : props.width > 1375
            ? "max-w-md"
            : "max-w-sm"
        }`}
        style={{ background: "#68f7f770" }}
      >
        <div className="flex justify-between pb-3 mb-2 border-bottom custom-card-borderColor">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              {props.title}
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="player-wrapper space-y-2">
            {props.url ? (
              <ReactPlayer
                className="react-player"
                url={props.url}
                controls="true"
                loop="true"
                width="100%"
              />
            ) : (
              ""
            )}

            {/* <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            /> */}
            <div
              className={`custom-card-textSize custom-card-borderColor flex items-center justify-between text-s pb-2 ${
                props.isdesc ? "border-bottom" : ""
              }`}
            >
              <a
                href="#"
                class="btn btn-primary active"
                role="button"
                aria-pressed="true"
              >
                {props.platform}
              </a>
              <a
                href={props.url}
                class="btn btn-primary active flex items-center"
                role="button"
                aria-pressed="true"
              >
                {props.icon}
                Watch On Facebook
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="custom-card-header block"
            >
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {props.header}
              </h3>
            </a>
            <p
              className={`leadi dark:text-gray-400 ${
                props.isdesc ? "desc" : ""
              }`}
            >
              {props.description}
            </p>
            <button
              style={{ background: "#28a745" }}
              type="button"
              class="custom-card-btn btn btn-success"
              onClick={props.func}
            >
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
