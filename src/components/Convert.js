import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [debouncedText, setDebouncedText] = useState(text);
  const [translateRes, setTranslateRes] = useState("");

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslateRes(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header"> {translateRes}</h1>
    </div>
  );
};

export default Convert;
