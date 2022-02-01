import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

import { getTypeaheadData, getSelectedKitData } from '../utils/api';

jest.mock('../utils/api', () => ({ getTypeaheadData: jest.fn(), getSelectedKitData: jest.fn() }))

describe('App tests', () => {
  const renderComponent = () => render(<App />);

  it('will fetch the typeahead data when the user types in the search input', async () => {
    const { getByTestId } = renderComponent();
    userEvent.type(getByTestId('kit-search'), 'test');
    expect(getTypeaheadData).toHaveBeenCalledTimes(4);
    expect(getTypeaheadData).toHaveBeenCalledWith('test');
  });

  it('will update the input value when the user types in the input', () => {
    const { getByTestId } = renderComponent();
    userEvent.type(getByTestId('kit-search'), 'testing');
    expect(mockProps.handleQueryUpdate).toHaveBeenCalled();
  });
});