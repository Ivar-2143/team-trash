import React from 'react'
import styled from 'styled-components';

function Details() {
  return (
    <Wrapper>
        <h1>Connect with us Lorem ipsum dolor sit amet. </h1>
        <ul>
            <li>
                <div />
                Lorem ipsum dolor sit amet.
            </li>
            <li>
                <div />                
                Lorem ipsum dolor sit amet.
            </li>
            <li>
                <div />
                Lorem ipsum dolor sit amet.
            </li>
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 40%;
    color: #3F3D56;
    height: 80%;
    h1{
        font-size: 2rem;
        font-family: 'Chewy';
    }
    ul{
        list-style-type: none;
        li{
            display: flex;
            align-items: center;
            margin: 10% 0;
            font-size: 1.2rem;
            div{
                width: 64px;
                height: 64px;
                margin-right: 15px;
                border-radius: 50%;
                background-color: #F0F0F4;
            }
        }
    }
`;
export default Details