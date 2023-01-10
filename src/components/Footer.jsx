import React from 'react'
import styled from 'styled-components';
import TitleLogo from './TitleLogo';

function Footer() {
  return (
    <FooterPNL>
      <Wrapper>
        <TitleLogo />
      </Wrapper>
    </FooterPNL>
  )
}

const FooterPNL = styled.div`
  width: 100%;
  height: 100px;
  background-color: #3F3D56;
  position:relative;
  display:flex;
  align-items:center;
`;

const Wrapper = styled.div`
  width: 70%;
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
`;

export default Footer