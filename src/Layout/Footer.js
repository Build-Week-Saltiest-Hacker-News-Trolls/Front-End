import React from 'react';
import styled from 'styled-components';

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

const FootSpan = styled.span`
    font-size: 1.5rem;
    margin-left: 20px;
`

const Outer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Inner = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
