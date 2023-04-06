import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;
    width: 380px;
    border-radius: 15px;
    text-align: center;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px ;
`
export const StyledReactPic = styled.img`
    width: 160px; 
    height: 160px;
    object-fit: cover;
    align-self: center;
    margin-top: -3em;
    border: 5px solid white;
    border-radius: 50%;
`;
export const StyledCompPic = styled.img`
   width: 100%;   
`;

export const StyledButton = styled.button`
    color: #47C0D6;
    background-color: white;
    padding: 12px;
    border-color: cyan;
    border-radius: 20px;
    font-size: 14px;
    width: 160px;
    margin-bottom: 2.5rem;
`;

export const StyledP = styled.p`
width: 70%;
`;

