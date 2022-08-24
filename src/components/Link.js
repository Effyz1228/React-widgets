import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);

    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
