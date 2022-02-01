import React from 'react';
import PropTypes from 'prop-types';

const SearchAutocomplete = ({ matchingIds, handleAutocompleteSelection }) => (
  <div className="display-flex flex-column kits-search__autocomplete">
    {matchingIds.map(trackingCode => (
      <div
        data-testid="autocomplete-suggestion"
        key={trackingCode}
        className="kits-search__autocomplete-row"
        onClick={handleAutocompleteSelection}
        onKeyDown={handleAutocompleteSelection}
        tabIndex={0}
      >
          {trackingCode}
      </div>
    ))}
  </div>
);

SearchAutocomplete.propTypes = { matchingIds: PropTypes.array, handleAutocompleteSelection: PropTypes.func };

export default SearchAutocomplete;