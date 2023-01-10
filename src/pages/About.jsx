import React from 'react';
import styled from 'styled-components';
import MissionVision from '../components/MissionVision';
import Team from '../components/Team';

function About() {
  return (
    <Wrapper>
      <MissionVision/>
      <Team />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 70%;
    position: relative;
    top: 100px;
    left:50%;
    transform: translate(-50%,0);
`;

export default About