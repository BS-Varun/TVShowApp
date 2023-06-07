import React, { useState } from 'react';
import SearchScreen from './screens/SearchScreen';
import ResultsScreen from './screens/ResultsScreen';
import SummaryScreen from './screens/SummaryScreen';
import { searchShows } from './services/api';

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSearch = async (query) => {
    const searchResults = await searchShows(query);
    setResults(searchResults);
    setSelectedShow(null); // Reset selectedShow when performing a new search
  };

  const handleShowClick = (showId) => {
    const selectedResult = results.find((result) => result.show.id === showId);
    if (selectedResult) {
      setSelectedShow(selectedResult.show);
    }
  };

  const handleBackClick = () => {
    setSelectedShow(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">TV Shows App</h1>
      {selectedShow ? (
        <div>
          <button
            className="btn btn-secondary mb-3"
            onClick={handleBackClick}
          >
            Back to Results
          </button>
          <SummaryScreen summary={selectedShow.summary} />
        </div>
      ) : (
        <div>
          <SearchScreen onSearch={handleSearch} />
          {results.length > 0 ? (
            <ResultsScreen results={results} onShowClick={handleShowClick} />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default App;
