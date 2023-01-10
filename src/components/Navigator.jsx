import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Navigator() {
  return (
    <Wrapper>
        <SLink to={"/"}>
            Home
        </SLink>
        <SLink to={"/about"}>
            About
        </SLink>
        <SLink to={"/blog"}>
            Blog
        </SLink>
        <button>
            Join Now
        </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    font-family: 'Gudea';
    font-size: 1.2rem;
    button{
        margin-left: 10px;
        padding: 12px 20px;
        border-radius: 50px;
        border: none;
        font-weight: 700;
        cursor: pointer;
        font-size: 0.9rem;
        background-color: #FAEF96;
        &:hover{
            background-color: rgba(229,218, 136);
        }
    }
`;

const SLink = styled(NavLink)`
    margin: 10px;
    color: #f5f5f5;
    cursor: pointer;
    text-decoration: none;
    &.active{
        color: #84FF65; 
        font-weight: 700;
    }
    &:hover{
        color: #84FF65; 
    }

`;

export default Navigator