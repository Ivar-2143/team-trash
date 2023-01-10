import React from 'react'
import logo from '../images/team_trash_logo.png';
import styled from 'styled-components';

function TitleLogo() {
  return (
    <Wrapper>
        <img src={logo} alt="" width='64px' />
        <span>Team Trash</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items:center;
    span{
        color: #84FF65;
        font-family: 'Chewy','Comfortaa';
        font-size: 2.3rem;
        margin-left: 15px;
        cursor: default;
    }

`;


export default TitleLogo