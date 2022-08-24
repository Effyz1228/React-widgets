import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Chinese",
    value: "zh-CN",
  },
];

const Translate = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            className="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
        </div>
      </form>
      <Dropdown
        options={options}
        selected={language}
        onSelected={setLanguage}
        label="Select Language"
      />
      <hr />
      <h3 className="ui header">
        Result:
        <Convert text={text} language={language} />
      </h3>
    </div>
  );
};

export default Translate;
