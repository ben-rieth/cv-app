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
                <AutosizeInput placeholder="First and Last Name" fontSize={1.75} pattern={/abc/} icon={false} />
                <AutosizeInput placeholder="Current Occupation" fontSize={.8} pattern={/abc/} icon={false}/>
            </HeaderContainer>
        );
    }
}

export default Header;