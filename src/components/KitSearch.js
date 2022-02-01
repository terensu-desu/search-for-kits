import React from 'react';
import SearchAutocomplete from './SearchAutocomplete';

const KitSearch = ({ query, matchingIds, handleQueryUpdate, handleAutocompleteSelection }) => (
  <div className="kits-search">
    <h1 className="color--white">Kit Status Search</h1>
    <input
      className="kits-search__input"
      data-testid="kit-search"
      name="Tracking Code Search"
      onChange={handleQueryUpdate}
      placeholder="Kit ID"
      type="text"
      value={query}
    />
    {matchingIds.length > 0 && (
      <SearchAutocomplete
        matchingIds={matchingIds}
        handleAutocompleteSelection={handleAutocompleteSelection}
      />
    )}
  </div>
);

export default KitSearch;