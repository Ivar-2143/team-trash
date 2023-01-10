import React from 'react'
import Home from './Home';
import styled from 'styled-components';
import About from './About';
import Blog from './Blog';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100%;
    position: relative;
  
`;



export default Pages