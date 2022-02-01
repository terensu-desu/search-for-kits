import { render, fireEvent } from '@testing-library/react';

import SearchAutocomplete from '../../components/SearchAutocomplete';

describe('SearchAutocomplete tests', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = { matchingIds: ['43-807-9578', '69-432-4916'], handleAutocompleteSelection: jest.fn() };
    jest.clearAllMocks();
  });

  const renderComponent = () => render(<SearchAutocomplete {...mockProps} />);

  it('will render the autocomplete suggestions', () => {
    const { getAllByTestId } = renderComponent();
    expect(getAllByTestId('autocomplete-suggestion')[0]).toHaveTextContent(/43-807-9578/);
    expect(getAllByTestId('autocomplete-suggestion')[1]).toHaveTextContent(/69-432-4916/);
  });

  it('will apply the autocomplete selection upon user selection', () => {
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId('autocomplete-suggestion')[1]);
    expect(mockProps.handleAutocompleteSelection).toHaveBeenCalled();
  });
});