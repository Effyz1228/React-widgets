import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  { title: "What's your favorite food?", answer: "I love cakes!" },
  { title: "What's your favorite color?", answer: "I love purple" },
  { title: "What's your favorite workout?", answer: "jumping ropes" },
];

const dropDownOptions = [
  { label: "The rose red", value: "#F675A8" },
  { label: "The sea blue", value: "#277BC0" },
  { label: "The grass green", value: "#7FB77E" },
];

const App = () => {
  const [selected, setSelected] = useState(dropDownOptions[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={dropDownOptions}
          selected={selected}
          label="Choose a fucking color"
          onSelected={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
