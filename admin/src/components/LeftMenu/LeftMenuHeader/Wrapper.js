import styled, { css } from 'styled-components';

import Logo from '../../../assets/images/logo_blanc.png';

const Wrapper = styled.div`
  ${({ theme: { main } }) => css`
  background-color: ${main.colors.won.blue};
  height: ${main.sizes.leftMenu.height};

  .projectName {
    display: block;
    height: ${main.sizes.leftMenu.height};
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 6rem;
  }
  `}
`;

export default Wrapper;
