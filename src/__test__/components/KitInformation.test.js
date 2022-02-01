import { render } from '@testing-library/react';

import KitInformation from '../../components/KitInformation';

describe('KitInformation tests', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = { selectedKit: { kitId: '43-807-9578', trackingCode: '7587928022' } };
    jest.clearAllMocks();
  });

  const renderComponent = () => render(<KitInformation {...mockProps} />);

  it('will render the selected kit ID and tracking code', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('kit-id')).toHaveTextContent(/43-807-9578/);
    expect(getByTestId('kit-tracking-code')).toHaveTextContent(/7587928022/);
  });
});