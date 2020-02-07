import styled, { css } from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;

  ${({ isScrollable }) => isScrollable && css`
    /* overflow: auto; */
    height: 100%;
    width: 100%;

    flex-wrap: wrap;
    justify-content: center;
  `}
`;
