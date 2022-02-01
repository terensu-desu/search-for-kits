export const getTypeaheadData = query => fetch(`http://localhost:8000/kits/typeahead/${query}`)
  .then(response => response.json());

export const getSelectedKitData = kitId => fetch(`http://localhost:8000/kits/${kitId}`)
  .then(response => response.json());