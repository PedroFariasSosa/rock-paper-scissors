import React, { useReducer } from "react";
import MainContext from "./mainContext";
import { mainReducer } from "./mainReducer";
import {
  YOU_PICKED,
  HOUSE_PICKED,
  TOGGLE,
  RESULT,
  INCREMENT,
  DECREMENT,
} from "./types";

const MainState = ({ children }) => {
  const initialState = {
    you_picked: "",
    house_picked: "",
    toggle: false,
    result: null,
    score: 0,
    data: [
      {
        name: "paper",
        value: 0,
      },
      {
        name: "scissor",
        value: 1,
      },
      {
        name: "rock",
        value: 2,
      },
    ],
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const getYouPicked = (value) => {
    dispatch({ type: YOU_PICKED, payload: value });
  };

  const getHousePicked = (value) => {
    dispatch({ type: HOUSE_PICKED, payload: value });
  };

  const changeToggle = (boolean) => {
    dispatch({ type: TOGGLE, payload: boolean });
  };

  // resolve this
  const getResult = (youPicked, theHousePicked) => {
    const dispatchFn = (message) =>
      dispatch({ type: RESULT, payload: message });

    if (youPicked === theHousePicked) {
      return dispatchFn("Draw");
    }

    switch (youPicked) {
      case "paper":
        return theHousePicked === "scissor"
          ? dispatchFn("You Lose")
          : dispatchFn("You Win");

      case "scissor":
        return theHousePicked === "paper"
          ? dispatchFn("You Win")
          : dispatchFn("You Lose");

      case "rock":
        return theHousePicked === "scissor"
          ? dispatchFn("You Win")
          : dispatchFn("You Lose");

      default:
        return;
    }
  };

  const incrementScore = () => {
    setTimeout(() => {
      dispatch({ type: INCREMENT });
    }, 2300);
  };

  const decrementScore = () => {
    setTimeout(() => {
      dispatch({ type: DECREMENT });
    }, 2300);
  };

  return (
    <MainContext.Provider
      value={{
        you_picked: state.you_picked,
        house_picked: state.house_picked,
        toggle: state.toggle,
        result: state.result,
        score: state.score,
        data: state.data,
        getYouPicked,
        getHousePicked,
        changeToggle,
        getResult,
        incrementScore,
        decrementScore,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainState;
