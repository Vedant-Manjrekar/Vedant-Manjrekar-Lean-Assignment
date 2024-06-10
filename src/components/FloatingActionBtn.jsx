import React, { useReducer, useContext } from "react";
import fab from "../../src/assets/fab.svg";
import cross from "../../src/assets/cross.svg";
import DialogueBox from "./DialogueBox";
import Icon from "./Icon";
import mobFab from "../../src/assets/mob_fab.svg";
import { Context } from "../Context";

const initialState = { option: "" };

function reducer(state, action) {
  switch (action.type) {
    case "report":
      return { option: "report" };
    case "contactus":
      return { option: "contactus" };
    case "suggestion":
      return { option: "suggestion" };
    case "feedback":
      return { option: "feedback" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function FloatingActionBtn({ options }) {
  const {
    isClicked,
    setIsClicked,
    isOptionClicked,
    setIsOptionClicked,
    element,
    setElement,
    isSubmitted,
    setIsSubmitted,
    setIsEmpty,
  } = useContext(Context);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fabStyle = {
    right: isSubmitted ? "1rem" : 0,
    bottom: isSubmitted ? "1rem" : 0,
  };

  return (
    <div className='FAB' style={fabStyle}>
      {isOptionClicked && (
        <DialogueBox
          text={"Let us know about the Issue you are facing right now!"}
          optionValue={state.option}
          isLoggedIn={true}
          options={options}
        />
      )}

      <div
        className='options'
        style={{
          flexDirection: `${isOptionClicked ? "row" : "column"}`,
          marginBottom: `${
            isOptionClicked || window.innerWidth > 501 ? "0" : "24px"
          }`,
          marginRight: `${
            isOptionClicked || window.innerWidth > 501 ? "0.3rem" : "24px"
          }`,
          animation: `${
            isOptionClicked ? "moveUp1 1s ease-in-out forwards" : ""
          }`,
        }}
      >
        {/* Mapping options */}
        {options.map((elem, i) => (
          <div
            className='optionBlock'
            key={i + 2}
            onClick={() => {
              setIsOptionClicked(true);
              dispatch({ type: elem.option });
            }}
            style={{ display: `${isClicked ? "flex" : "none"}` }}
          >
            {/* Labels */}
            <span
              className='label'
              key={i}
              style={{ display: `${isOptionClicked ? "none" : "flex"}` }}
            >
              {elem.label}
            </span>

            {/* Option Buttons */}
            <div
              onClick={() => {
                setElement(elem.no);
                setIsEmpty(true);
              }}
            >
              <Icon img={element === i ? elem.clickedImg : elem.img} />
            </div>
          </div>
        ))}

        {/* FAB main */}
        <img
          src={`${isClicked ? cross : window.innerWidth < 501 ? mobFab : fab}`}
          className='cross icons'
          alt='fab_button'
          onClick={() => {
            setIsClicked(!isClicked);
            setIsOptionClicked(false);
            setElement("");
            setIsSubmitted(false);
          }}
        />
      </div>
    </div>
  );
}

export default FloatingActionBtn;
