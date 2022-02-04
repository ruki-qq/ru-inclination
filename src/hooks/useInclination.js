import { useState } from "react";
import endings from "./data/endings";

const useInclination = () => {

  const [res, setRes] = useState("");
  const detectEnding = (word) => {
    const l = word.length;
    const lastTwoSymbols = word.substring(l - 2, l);
    const keys = Object.keys(endings);
    if (keys.includes(lastTwoSymbols)) {
      return { key: lastTwoSymbols, endingLength: 2 };
    } else {
      const lastSymbol = word[l - 1];
      if (keys.includes(lastSymbol)) {
        if (lastSymbol === "а") {
          let regexp = new RegExp(/[аеёиоуыэюя]/gi);
          for (let i = l - 1; i >= 0; i--) {
            if (!regexp.test(word[i])) {
              regexp = /[гкхжшщч]/gi;
              return regexp.test(word[i])
                ? { key: "specialA", endingLength: 1 }
                : { key: lastSymbol, endingLength: 1 };
            }
          }
        }
        return { key: lastSymbol, endingLength: 1 };
      } else
        return (lastSymbol === "у")
          ? { key: "nonInclinable", endingLength: 1 }
          : { key: "nullMale", endingLength: 0 };
    }
  };
  const incline = (word, padezh) => {
    const l = word.length;
    const { key, endingLength } = detectEnding(word);
    if (endings[key] === false) {
      setRes(word);
    } else setRes(word.substring(0, l - endingLength) + endings[key][padezh]);
  };
  return [res, incline];
};

export default useInclination;
