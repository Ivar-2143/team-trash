import React from 'react'
import TitleLogo from './TitleLogo';
import Navigator from './Navigator';
import styled from 'styled-components'

function NavBar() {
  return (
    <NavPNL>
        <div className="wrapper">
            <TitleLogo />
            <Navigator />
        </div>
    </NavPNL>
        
  )
}

const NavPNL = styled.div`
    width: 100%;
    background-color: #3F3D56;
    height: 100px;
    position: fixed;
    top: 0;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
    z-index:10;
    .wrapper{
        width: 70%;
        height: 100%;
        position: relative;
        left:50%;
        transform:translate(-50%,0);
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
`; 

export default NavBar;