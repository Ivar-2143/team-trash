import React from 'react'
import styled from 'styled-components';
import ConcernForm from './ConcernForm';
import Details from './Details';

function ContactSection() {
  return (
    <Wrapper>
        <Container>
            <Details />
            <ConcernForm />
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 50px 0;
`;

const Container = styled.div`
    width: 70%;
    height: 600px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
`;
export default ContactSection