import React from 'react'
import Banner from '../components/Banner';
import styled from 'styled-components';
import Donation from '../components/Donation';
import Form from '../components/ContactSection';

function Home() {
  return (
    <Wrapper>
      <Banner />
      <Donation />
      <Form />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    left:50%;
    transform: translate(-50%,0);
`;

export default Home