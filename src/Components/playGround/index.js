import React, { useState } from "react";
import { AutoComplete } from "antd";
import axios from "axios";
import { createSearchParams, useSearchParams } from "react-router-dom";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [queryString, setQueryString] = useSearchParams();
  const [queryData, setQueryData] = useState({
    data: [],
    metadata: {},
  });
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    axios
      .get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${data}`)
      .then((response) => {
        setQueryData(response.data);
        // updating query string by input value the user has typed:
        setQueryString(createSearchParams({ key: data }));
      })
      .catch((error) => {
        return "Wrong address";
      });
    axios
      .get(
        `https://moviesapi.codingfront.dev/api/v1/movies?q=${queryString.get(
          "key"
        )}`
      )
      .then((response) => {
        setQueryData(response.data);
      })
      .catch((error) => {
        return "Wrong address";
      });
  };
  const onChange = (data) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};
export default App;
