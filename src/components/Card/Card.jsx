import React from 'react';

import { CardContainer, StyledReactPic, StyledCompPic, StyledButton, StyledP } from './styles';
import ReactPic from '../../assets/reactlogo.jpg';
import CompPic from '../../assets/comp.jpg';


function Card() {

    return (
        <CardContainer>
            <StyledCompPic src={CompPic} alt="Computer" />
            <StyledReactPic src={ReactPic} alt="React" />

            <h1>React Portfolio</h1>
            <StyledP>Behold my amazing React portfolio, showcasing my immense skills</StyledP>
            <StyledButton>View more</StyledButton>
        </CardContainer>
    )
}

export default Card;