import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
`;

const ImageTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    background-color: white;
    margin-top: 10px;
`;

const Button = styled.button`
    margin-top: 20px;
    width: 300px;
    height: 50px;
    background-color: pink;
    textAlign: center;
    border: none;
    border-radius: 5px
    
`;
const BackButton = styled.button`
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 50px;
    background-color: gold;
    textAlign: center;
    border: none;
    border-radius: 5px

`;


export function Printing() {

    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);

    const DogImage = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            if (!response.ok) {
                throw new Error('네트워크 응답이 올바르지 않습니다.');
              }
            const data = await response.json();
            setImageSrc(data.message);
        } catch (e) {
            alert("링크가 잘못됐습니다.");
        }
    };


    return (
        <Wrapper>
            <div>
                <h1>Printing Dog Images</h1>

                <div>
                    <ImageTag>
                        {imageSrc ? <img src={imageSrc} style={{ width: '100%', height: '100%' }} /> : "버튼을 클릭해주세요"}
                    </ImageTag>
                </div>
                <div>
                <Button onClick={DogImage}>버튼</Button>
                <BackButton onClick={() => navigate('/')}>뒤로가기</BackButton>
                </div>
            </div>
        </Wrapper>
    );
};

