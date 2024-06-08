import styled from "styled-components";
import { useNavigate } from 'react-router-dom';




export function About() {
    const navigate = useNavigate();

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
`;

    const Ptag = styled.p`
    width: 300px;
    height: 200px;
    background-color: white;
    margin-top: 10px;
    `;

    const Button = styled.button`
    margin: 10px 0px;
    width: 300px;
    height: 50px;
    background-color: gold;
    textAlign: center;
    border: none;
    border-radius: 5px
    `;



    return (

        <Wrapper>
        <div>
            <h1 style={{textAlign:"center"}}>About</h1>
            <div>
                <Ptag> React이게 맞는것인가...</Ptag>
            </div>
            <div>
                <Button className="btn-back" onClick={() => navigate('/')}>뒤로가기</Button>
            </div>
        </div>
    </Wrapper>

    );

};
