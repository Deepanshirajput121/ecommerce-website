import { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [data, setData] = useState(null);

  // API call when component mounts
  useEffect(() => {
    fetch('/api/search?query=my-search-query')
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log("Data received: ", data);
          setData(data);  // Save the received data to state
        } else {
          console.error("No data received");
        }
      })
      .catch(error => console.error("Error during fetch: ", error));
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data to display</p>}
    </div>
  );
};

export default SearchComponent;
