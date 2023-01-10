import React from 'react'
import styled from 'styled-components';
import Members from './Member';


function Team() {
  return (
    <Wrapper>
        <h3>The Team</h3>
        <Members />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 5%;
    width: 100%;
    position: relative;
    h3{
        font-family: 'Chewy';
        font-size: 2.5rem;
        color: #3F3D56;
        position: relative;
        text-align: center;
        left: 50%;
        transform: translate(-50%,0);
    }

`;


export default Team