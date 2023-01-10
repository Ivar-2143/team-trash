import React from 'react'
import banner from '../images/sea_pollution.jpg';
import styled from 'styled-components';

function Banner() {
  return (
    <Wrapper>
        <img src={banner} alt="" />
        <Blur />
        <MsgWrap>
            <span>
                " To live the world better than you found it, sometimes you have to pick up other people's trash. -Bill Nye "
            </span>
            <button>
                Join Now
            </button>
        </MsgWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    left:50%;
    transform: translate(-50%,0);
    margin-top: 10px;
    background-color: #f5f5f5;
    img{
        position: relative;
        width: 100%;
        top:-100px;
        filter: blur(2px);
    }
`;
const Blur = styled.div`
    width:100%;
    height: 100%;
    position: absolute;
    top:-100px;
    z-index:1;
    background-color: rgba(0,0,0,0.4);
    
`;

const MsgWrap = styled.div`
    width: 70%;
    color: #f5f5f5;
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%,0);
    display:flex;
    flex-direction: column;
    height: 100%;
    top:25%;
    span{
        width: 70%;
        font-size: 3.5rem;
        font-family: 'Chewy';
    }
    button{
        width: 280px;
        font-size: 2.5rem;
        padding: 18px 0;
        border-radius: 50px;
        background-color: #FAEF96;
        border: none;
        font-weight: 700;
        margin-top: 10%;
        &:hover{
            cursor: pointer;
            background-color: rgba(229,218, 136);
        }
    }
`;

export default Banner