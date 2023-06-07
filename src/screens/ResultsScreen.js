import React from 'react';

const ResultsScreen = ({ results, onShowClick }) => {
  const handleShowClick = (showId) => {
    onShowClick(showId);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {results.map((result) => (
          <div key={result.show.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{result.show.name}</h5>
                <p className="card-text">Language: {result.show.language}</p>
                <p className="card-text">Type: {result.show.type}</p>
                <p className="card-text">Premiered: {result.show.premiered}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowClick(result.show.id)}
                >
                  Show Summary
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsScreen;
