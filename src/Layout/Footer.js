import React from 'react';
import styled from 'styled-components';
import { FootSpan, Outer, Inner, Copy } from '../theme/Styled.js';

export default function Footer() {
  return (
    <>
      <br/>
      <hr/>
      <Outer>   
          <div className="logo">
            <FootSpan>
            U<span className="logo-center">MAD</span>BRO?!
            </FootSpan>
          </div>
          <Inner>
            <a href="https://build-week-saltiest-hacker-news-trolls.github.io/Marketing-Page/index.html">Marketing Page</a>
            <a href="https://build-week-saltiest-hacker-news-trolls.github.io/Marketing-Page/about.html">About Us</a>
          </Inner>          
      </Outer>
      <Copy>
        <p>© Copyright 2019 D'Salty Dogs of LS</p>
      </Copy>
    </>
  );
}