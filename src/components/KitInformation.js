import React from 'react';
import PropTypes from 'prop-types';

const KitInformation = ({ selectedKit }) => (
  <div className="display-flex align-items-center color--white kit-information">
    <div data-testid="kit-id"><span className="fontweight-500">Kit ID:</span> {selectedKit.kitId}</div>
    <div data-testid="kit-tracking-code">
      <span className="fontweight-500">Tracking Code:</span> {selectedKit.trackingCode}
    </div>
  </div>
);

KitInformation.propTypes = { selectedKit: PropTypes.object };

export default KitInformation;