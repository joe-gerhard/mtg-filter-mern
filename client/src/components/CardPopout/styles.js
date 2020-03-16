import styled, { css } from 'styled-components';

const CardPopout = styled.div(({ theme, visible }) => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: ${visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  background: #00000099;
  z-index: 1000;

  img {
    height: 90vh;
  }

`);

export default {
  CardPopout,
}