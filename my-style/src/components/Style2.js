import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components'


export const theme = {
    baseTheme: '#000'
}


// golbal스타일 적용하기
export const GlobalStyle = createGlobalStyle `
  body{
    padding: 0;
    margin: 0;
    font-family: 'Arial',sanas-serif;
  }  
`;

export function Style2() {
    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
  `;



    const Box = styled.div.attrs({ data: 'box' })`
    // background-color: ${(props) => props.bgColor};
    // border: ${(props) => props.bgColor && 'pink 3px solid'};

    ${(props) => props.bgColor && css`  // css함수를 호출해서 사용
    background-color: ${props.bgColor};
    border: pink 3px solid;
    `}
    
    // background-color: 'purple';
    width: 100px;
    height: 100px;
    margin: 10px;
    &:hover{
        background-color: black;
    }
    `;

    const CircleAnimation = keyframes`
        0%{
            background-color: red;
        }
        25%{
            background-color: green;
        }
        50%{
            background-color: skyblue;
        }
        75%{
            background-color: yellow;
        }
        100%{
            background-color: red;
        }

    `;

    const Circle = styled(Box)`   // box를 상속받음
    border-radius: 50%;
    animation: ${CircleAnimation} 5s linear infinite;
  `;

    return (
        <Wrapper>
            {/* 형식바꾸기 as */}
            <Box as="button" bgColor={'navy'} />

            {/* <Box bgColor={'gold'}/> */}
            {/* 형식바꾸기 as */}
            <Box as="a" bgColor={'gold'} />

            <Circle bgColor={'red'} />
        </Wrapper>
    )


}
