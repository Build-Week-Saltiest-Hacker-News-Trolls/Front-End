import React from 'react';
import styled from 'styled-components';
import { FootSpan, Outer, Inner } from '../theme/Styled.js';

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
            <span>Content</span>
            <span>Footer Placeholder</span>
        </Inner>
      </Outer>
    </>
  );
}