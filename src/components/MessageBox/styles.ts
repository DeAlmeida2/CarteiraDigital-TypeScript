import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;

    }

`;



export const Container = styled.div`
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column; //coloca um em baixo do outro
    justify-content: space-between; 

    animation: ${animate} .5s;

    > header img{
        width: 35px;
        margin-left: 7px;
    }

    > header p{
        font-size: 18px;

    }
`;