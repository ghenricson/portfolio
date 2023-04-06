/* import React from "react";

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <h4>List 1</h4>
                        <ul className="list-unstyled">
                            <li>4356</li>
                            <li>Sverige, bla</li>
                            <li>Tyskland, ja</li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4>List 2</h4>
                        <ul className="list-unstyled">
                            <li>4356</li>
                            <li>Sverige, bla</li>
                            <li>Tyskland, ja</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
 export default Footer; */

import React, { useState } from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";
import FormInput from "./FormInput";

import { FaLinkedinIn, FaTwitter, FaGithub, FaTiktok } from "react-icons/fa";

const StyledFooter = styled.footer`
grid-area: footer;
display: flex;
flex-direction: row;
align-items: center;
background-color: #0077b6;
justify-content: space-between;
`;

const StyledLinks = styled(Link)`
font-size: 20px;
margin: 0 1em 0 1em;
text-decoration: none;
color: white;
`

const StyledIcons = styled.a`
height: 3em;
width: 3em;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
`
const IconWrap = styled.div`
display: flex;
flex-direction: row;
width: 15rem;
justify-content: space-between;
`



const Footer = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    let iconStyles = { color: "#eeeeee", fontSize: "2em" };
    
    return (
        <StyledFooter>
            <StyledLinks to="mailto:gabriel.henricson@gmail.com">
{/*                 <p>Gabriel Henricson</p>
                <p>gabriel.henricson@gmail.com</p>
                <p>+46768037795</p> */}
            </StyledLinks>
            <IconWrap>
                <StyledIcons href="https://www.github.com/">
                    <FaGithub style={iconStyles} />
                </StyledIcons>
                <StyledIcons href="https://se.linkedin.com/">
                    <FaLinkedinIn style={iconStyles} />
                </StyledIcons>
                <StyledIcons href="https://www.tiktok.com/">
                    <FaTiktok style={iconStyles} />
                </StyledIcons>
                <StyledIcons href="https://twitter.com/?lang=sv">
                    <FaTwitter style={iconStyles} />
                </StyledIcons>
            </IconWrap>
            <form>
                <FormInput placeholder="e-mail" setEmail = {setEmail}/>
                <FormInput placeholder="message" setMessage = {setMessage}/>
                
                <button>
                Send
                </button>
            </form>
        </StyledFooter>
    );
}

export default Footer;