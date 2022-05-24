import React from "react";
import styled from "styled-components";
import AutosizeInput from "../parts/AutosizeInput";

const HeaderContainer = styled.div`
    border: 1px solid blue;
    grid-area: header;
    padding: 20px;

    display: flex;
    flex-direction: column;
`;

class Header extends React.Component {
    render() {
        return(
            <HeaderContainer>
                <AutosizeInput placeholder="First and Last Name" fontSize={1.75} characterLimit={5}/>
                <AutosizeInput placeholder="Current Occupation" fontSize={.8} initialValue=""/>
            </HeaderContainer>
        );
    }
}

export default Header;