import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIdx, setActIdx] = useState(null);

  const changeIdx = (idx) => {
    setActIdx(idx);
  };

  const rendered = items.map((item, idx) => {
    const active = activeIdx === idx ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`${active} title`}
          onClick={() => {
            changeIdx(idx);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.answer}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{rendered}</div>;
};

export default Accordian;
