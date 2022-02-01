import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import KitSearch from '../../components/KitSearch';

describe('KitSearch tests', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      query: '',
      matchingIds: [],
      handleQueryUpdate: jest.fn(),
      handleAutocompleteSelection: jest.fn()
    };
    jest.clearAllMocks();
  });

  const renderComponent = () => render(<KitSearch {...mockProps} />);

  it('will render an input element', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('kit-search')).toBeTruthy();
  });

  it('will update the input value when the user types in the input', () => {
    const { getByTestId } = renderComponent();
    userEvent.type(getByTestId('kit-search'), 'testing');
    expect(mockProps.handleQueryUpdate).toHaveBeenCalled();
  });
});