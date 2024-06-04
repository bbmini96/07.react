import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const GoldButton = styled(Button)`
  color: gold;
  border-color: gold;
  `;


export function Style2() {


    return (
        <div>
            <h1>Styled-Components</h1>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
            <Button>Normal</Button>
            <Button $primary>Primary</Button>
            <TomatoButton>Tomato Button</TomatoButton>
            <GoldButton>Gold Button</GoldButton>
        </div>
    )
}
