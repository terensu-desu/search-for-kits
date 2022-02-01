import React, { useState } from 'react';

import './App.css';

import KitSearch from './components/KitSearch';
import KitInformation from './components/KitInformation';

import { getTypeaheadData, getSelectedKitData } from './utils/api';

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedKit, setSelectedKit] = useState('');
  const [matchingIds, setMatchingIds] = useState([]);

  const handleTypeaheadData = async latestQuery => {
    const response = await getTypeaheadData(latestQuery);
    setMatchingIds(response);
  };

  const handleSelectedKitData = async kitId => {    
    const response = await getSelectedKitData(kitId);
    setSelectedKit({ kitId: response['label_id'], trackingCode: response['shipping_tracking_code'] });
  };

  const handleQueryUpdate = ({ target: { value } }) => {
    setQuery(value);
    handleTypeaheadData(value);
  }

  const handleAutocompleteSelection = ({ target: { innerText }, key }) => {
    if (!key || key === 'Enter') {
      setQuery(innerText);
      handleSelectedKitData(innerText);
      setMatchingIds([]);
    }
  };

  return (
    <div className="App">
      <KitSearch
        query={query} 
        matchingIds={matchingIds}
        handleQueryUpdate={handleQueryUpdate}
        handleAutocompleteSelection={handleAutocompleteSelection}
      />
      {selectedKit && <KitInformation selectedKit={selectedKit} />}
    </div>
  );
}

export default App;
