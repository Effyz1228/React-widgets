import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelected, label }) => {
  const [open, toggleOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      toggleOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const rendered = options.map((option) => {
    if (selected.value === option.value) return null;

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label>{label}</label>
        <div
          onClick={() => {
            toggleOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""} `}
          style={{ color: `${selected.value}` }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? " visible transition" : ""} `}>
            {rendered}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
