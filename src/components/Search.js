import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("cat");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [searchResult, setResult] = useState([]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedTerm,
        },
      });

      setResult(data.query.search);
    };

    if (debouncedTerm) search();
  }, [debouncedTerm]);

  const renderedResult = searchResult.map((result) => {
    const clearSnippet = result.snippet.replace(/(<([^>]+)>)/gi, "");

    return (
      <div className="item" key={result.title}>
        <div className="content">
          <div className="header">{result.title}</div>
          <div className="description">{clearSnippet}</div>
        </div>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Visit
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Search here</label>
          <input
            className="input"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="ui relaxed divided list">{renderedResult}</div>
    </div>
  );
};

export default Search;
