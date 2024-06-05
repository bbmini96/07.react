import React, { useState, useRef } from 'react';
import styled from "styled-components";


export default function Student({ id, name, onDelete, onUpdate, isAbsent }) {

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `;

  const Span = styled.div `
    textDecoration: isAbsent? 'line-through':'none';
    color: isAbsent? 'red':'black';
    background-color: skyblue;
  `
  const Button = styled.div`
  border-radius: 30%;
  background-color: skyblue;
  `
    return(
        <Wrapper as="div">
            <Span as="span" onClick={() => onUpdate(id)} style={{
                // textDecoration: isAbsent? 'line-through':'none',
                // color: isAbsent? 'red':'black'
            }}>{name}</Span> &nbsp;&nbsp;
            <span><Button as = "button" onClick={ () => onDelete(id)}> X </Button>
            </span>
        </Wrapper>
    )  
}
