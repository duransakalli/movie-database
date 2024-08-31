import React, { useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Main from "./components/main/Main"; // Ensure the path and case match

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <Main searchParams={searchParams} />
    </div>
  );
}

export default App;
