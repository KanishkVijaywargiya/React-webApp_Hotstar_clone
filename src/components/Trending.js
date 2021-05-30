import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0ECD36DD35658155915685271440833C29ED87E788CF8AE111AA6BCA6B939C37/scale?width=400&amp;aspectRatio=1.78&amp;format=jpeg"
              alt="Tangled"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&amp;aspectRatio=1.78&amp;format=jpeg"
              alt="Moana"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&amp;aspectRatio=1.78&amp;format=jpeg"
              alt="The Simpsons"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/509E4D9F0BF98A9DC4CDD38954380782F6AB2664E503CC7652A37D18D06666BF/scale?width=400&amp;aspectRatio=1.78&amp;format=jpeg"
              alt="Mickey mouse"
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default Trending;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
