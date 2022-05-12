import React from 'react';
import { PropTypes } from 'prop-types';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://github.com/tonoli" target="_blank" rel="noopener noreferrer">
          Tonoli Tech ® 2021
        </a>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
